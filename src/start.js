import Swal from "sweetalert2";
import flatpickr from "flatpickr";

function msToHrsMinsSecs(ms) {
	let hrsMinsSecs = new Object();
	hrsMinsSecs.hours = Math.floor(ms / 3600000);
	hrsMinsSecs.minutes = Math.floor((ms - (hrsMinsSecs.hours * 3600000)) / 60000);
	hrsMinsSecs.seconds = Math.floor(((ms - (hrsMinsSecs.hours * 3600000)) - hrsMinsSecs.minutes * 60000) / 1000);
	return hrsMinsSecs;
}

async function displayStartedDialog() {
	const started = await Swal.fire({
		title: "Welkom bij Meetoffliner",
		text: "Wij nemen voor jou automatisch deel aan je Google Meet lessen. Zo is de kans op gezeur kleiner.",
		confirmButtonText: "Configureren",
		showCancelButton: true,
		cancelButtonText: "Annuleren",
	});
	if (!started.value) {
		throw new Error("canceled");
	}
}

async function displayUserInputDialog() {
	let joinTimePicker, leaveTimePicker;
	const userInput = await Swal.fire({
		title: "Configuratie",
		confirmButtonText: "Instellen",
		showCancelButton: true,
		cancelButtonText: "Annuleren",
		html: `
			<div>
				<div style="text-align: left; margin-bottom: 12px; display: inline-block;">
					<label style="color: #3a3d40; font-weight: 400; margin-bottom: 7px; font-size: 0.9em;">Tijd van deelname</label><br/>
					<input style="color: #000000; font-weight: 300; font-family: 'Roboto'; padding: 6px 8px; border-radius: 4px; border: 1px solid #5f6368; font-size: 1em;" id="meetoffliner-jointime" />
				</div>
				<div style="text-align: left; margin-bottom: 12px; display: inline-block;">
					<label style="color: #3a3d40; font-weight: 400; margin-bottom: 7px; font-size: 0.9em;">Tijd van verlaten</label><br/>
					<input style="color: #000000; font-weight: 300; font-family: 'Roboto'; padding: 6px 8px; border-radius: 4px; border: 1px solid #5f6368; font-size: 1em;" id="meetoffliner-leavetime" />
				</div>
			</div>
		`,
		onBeforeOpen: () => {
			joinTimePicker = flatpickr("#meetoffliner-jointime", {
				enableTime: true,
				minDate: new Date(),
				enableSeconds: true,
				time_24hr: true,
				dateFormat: "d-m-Y, H:i:S",
			});
			leaveTimePicker = flatpickr("#meetoffliner-leavetime", {
				enableTime: true,
				minDate: new Date(),
				enableSeconds: true,
				time_24hr: true,
				dateFormat: "d-m-Y, H:i:S",
			});
		},
		preConfirm: () => {
			const joinTime = joinTimePicker.selectedDates[0];
			const leaveTime = leaveTimePicker.selectedDates[0];
			if (joinTime === undefined || leaveTime === undefined) {
				Swal.showValidationMessage("Alle velden zijn verplicht");
				return;
			}
			if (leaveTime.getTime() <= joinTime.getTime()) {
				Swal.showValidationMessage("Deelnametijd kan niet gelijk/eerder zijn dan verlaattijd");
				return;
			}
			return {
				joinTime: joinTime,
				leaveTime: leaveTime,
			};
		},
	});
	if (!userInput.value) {
		throw new Error("canceled");
	}
	return {
		joinTime: userInput.value.joinTime,
		leaveTime: userInput.value.leaveTime,
	};
}

async function displayTimerStartedDialog(untilJoin, betweenJoinLeave) {
	await Swal.fire({
		title: "Geactiveerd!",
		html: `Je zult automatisch deelnemen aan de les over:<br/> ${untilJoin.hours} uur, ${untilJoin.minutes} minuten en ${untilJoin.seconds} seconden.<br/><br/>Je zult de les daarna automatisch verlaten over:<br/> ${betweenJoinLeave.hours} uur, ${betweenJoinLeave.minutes} minuten en ${betweenJoinLeave.seconds} seconden.<br/><br/>Je kan nu naar een ander tabblad gaan, zolang je dit tabblad niet sluit.`,
		icon: "success",
	});
}

async function displayTimerActiveJoinDialog(msUntilJoin, isAborted) {
	await Swal.fire({
		// eslint-disable-next-line quotes
		html: `<span style="width: 10px; display: inline-block;"></span><span>Meetoffliner is actief, je neemt automatisch deel aan de call</span>`,
		icon: "info",
		toast: true,
		timerProgressBar: true,
		timer: msUntilJoin,
		position: "top",
		allowOutsideClick: false,
		confirmButtonText: "Stoppen",
		confirmButtonColor: "#d93025",
		allowEnterKey: false,
		allowEscapeKey: false,
		preConfirm: () => {
			isAborted[0] = true;
		},
	});
	if (isAborted[0]) {
		throw new Error("canceled");
	}
}

async function displayTimerActiveLeaveDialog(msUntilLeave, isAborted) {
	await Swal.fire({
		// eslint-disable-next-line quotes
		html: `<span style="width: 10px; display: inline-block;"></span><span>Meetoffliner is actief, je verlaat automatisch de call</span>`,
		icon: "info",
		toast: true,
		timerProgressBar: true,
		timer: msUntilLeave,
		position: "top",
		confirmButtonText: "Stoppen",
		confirmButtonColor: "#d93025",
		allowOutsideClick: false,
		allowEnterKey: false,
		allowEscapeKey: false,
		preConfirm: () => {
			isAborted[0] = true;
		},
	});
	if (isAborted[0]) {
		location.reload();
		throw new Error("canceled");
	}
}

export default async function (joinFunc) {
	// Display popups and get user input.
	await displayStartedDialog();
	const userInput = await displayUserInputDialog();

	// Calculate ms until join and leave
	let msUntilJoin = userInput.joinTime.getTime() - new Date().getTime();
	let msUntilLeave = userInput.leaveTime.getTime() - new Date().getTime();

	// Convert ms to hours minutes and seconds for display to user.
	const msBetweenJoinLeave = msUntilLeave - msUntilJoin;
	const untilJoin = msToHrsMinsSecs(msUntilJoin);
	const betweenJoinLeave = msToHrsMinsSecs(msBetweenJoinLeave);

	let isAborted = [false]; // Array to make it a pointer.
	let joinLoopInterval, leaveLoopInterval;
	const joinLoop = () => {
		if (new Date().getTime() >= userInput.joinTime.getTime()) {
			joinFunc();
			clearInterval(joinLoopInterval);

			// We want to start the leave loop interval after the join loop
			// interval is finished.
			leaveLoopInterval = setInterval(leaveLoop, 500);
			msUntilLeave = userInput.leaveTime.getTime() - new Date().getTime();
			displayTimerActiveLeaveDialog(msUntilLeave, isAborted);
		}
		if (isAborted[0]) {
			clearInterval(joinLoopInterval);
		}
	};
	const leaveLoop = () => {
		if (new Date().getTime() >= userInput.leaveTime.getTime()) {
			window.location.replace("");
		}
		if (isAborted[0]) {
			clearInterval(leaveLoopInterval);
		}
	};

	// Start the join loop, the join loop will automatically trigger the leave
	// loop when finished.
	joinLoopInterval = setInterval(joinLoop, 500);

	// Display converted time to user.
	await displayTimerStartedDialog(untilJoin, betweenJoinLeave);

	// Create active popup with stop button to abort.
	msUntilJoin = userInput.joinTime.getTime() - new Date().getTime();
	displayTimerActiveJoinDialog(msUntilJoin, isAborted);
}
