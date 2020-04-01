import Swal from "sweetalert2";
import flatpickr from "flatpickr";

const flatpickrCss = `.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*
	/*rtl:begin:ignore*/left:0;/*
	/*rtl:end:ignore*/}/*
	/*rtl:begin:ignore*/
/*
	/*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*
	/*rtl:begin:ignore*/right:0;/*
	/*rtl:end:ignore*/}/*
	/*rtl:begin:ignore*/
/*
	/*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05);}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto;}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}`;

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
				</div><br/>
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

// Aborted is set to true to cancel active timers, as they are asynchronous.
let aborted = false;

async function displayTimerStartedDialog(untilJoin, betweenJoinLeave) {
	await Swal.fire({
		title: "Geactiveerd!",
		html: `Je zult automatisch deelnemen aan de les over:<br/> ${untilJoin.hours} uur, ${untilJoin.minutes} minuten en ${untilJoin.seconds} seconden.<br/><br/>Je zult de les daarna automatisch verlaten over:<br/> ${betweenJoinLeave.hours} uur, ${betweenJoinLeave.minutes} minuten en ${betweenJoinLeave.seconds} seconden.<br/><br/>Je kan nu naar een ander tabblad gaan, zolang je dit tabblad niet sluit.`,
		icon: "success",
	});
}

async function displayTimerActiveJoinDialog(msUntilJoin) {
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
			aborted = true;
		},
	});
	if (aborted) {
		throw new Error("canceled");
	}
}

async function displayTimerActiveLeaveDialog(msUntilLeave) {
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
			aborted = true;
		},
	});
	if (aborted) {
		location.reload();
		throw new Error("canceled");
	}
}

async function main() {
	const flatpickrStyle = document.createElement("style");
	flatpickrStyle.innerText = flatpickrCss;
	document.head.appendChild(flatpickrStyle);

	const createButtonLoop = () => {
		// eslint-disable-next-line quotes
		const possibleJoinButtonsText = document.querySelectorAll(`div > div[role="button"] > span > span`);
		if (!possibleJoinButtonsText) {
			console.log("buttons not found");
			requestAnimationFrame(createButtonLoop);
		}

		let joinButtonsContainer, joinNowButton;
		for (let i = 0; i < possibleJoinButtonsText.length; i++) {
			if ("Join nowNu deelnemen".includes(possibleJoinButtonsText[i].innerHTML)) {
				joinButtonsContainer = possibleJoinButtonsText[i]
					.parentElement
					.parentElement
					.parentElement;
				joinNowButton = possibleJoinButtonsText[i]
					.parentElement
					.parentElement;
			}
		}

		const meetofflinerButton = joinNowButton.cloneNode(true);
		meetofflinerButton.childNodes[2].childNodes[0].innerHTML = "Meetoffliner";
		joinButtonsContainer.appendChild(meetofflinerButton).addEventListener("click", () => {
			open();
		});
		meetofflinerButton.removeAttribute("jsaction");
		meetofflinerButton.removeAttribute("jscontroller");
		meetofflinerButton.removeAttribute("jsname");
	};
	requestAnimationFrame(createButtonLoop);
}

async function open() {
	await displayStartedDialog();
	const userInput = await displayUserInputDialog();

	let msUntilJoin = userInput.joinTime.getTime() - new Date().getTime();
	let msUntilLeave = userInput.leaveTime.getTime() - new Date().getTime();
	const msBetweenJoinLeave = msUntilLeave - msUntilJoin;

	const untilJoin = msToHrsMinsSecs(msUntilJoin);
	const betweenJoinLeave = msToHrsMinsSecs(msBetweenJoinLeave);
	displayTimerStartedDialog(untilJoin, betweenJoinLeave).then(() => {
		msUntilJoin = userInput.joinTime.getTime() - new Date().getTime();
		displayTimerActiveJoinDialog(msUntilJoin);
	});

	document.getElementById("meetoffliner").parentElement.removeChild(document.getElementById("meetoffliner"));
	let joinLoopInterval, leaveLoopInterval;
	const joinLoop = () => {
		if (new Date().getTime() >= userInput.joinTime.getTime()) {
			document.querySelector(".e19J0b.CeoRYc").click();
			clearInterval(joinLoopInterval);

			// We want to start the leave loop interval after the join loop
			// interval is finished.
			leaveLoopInterval = setInterval(leaveLoop, 500);
			msUntilLeave = userInput.leaveTime.getTime() - new Date().getTime();
			displayTimerActiveLeaveDialog(msUntilLeave);
		}
		if (aborted) {
			clearInterval(joinLoopInterval);
		}
	};
	const leaveLoop = () => {
		if (new Date().getTime() >= userInput.leaveTime.getTime()) {
			window.location.replace("");
		}
		if (aborted) {
			clearInterval(leaveLoopInterval);
		}
	};
	joinLoopInterval = setInterval(joinLoop, 500);
}

main();
