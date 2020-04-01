import openPopup from "./open_popup";

function findJoinBtn() {
	// eslint-disable-next-line quotes
	const possibleJoinBtns = document.querySelectorAll(`div > div[role="button"] > span > span`);
	if (!possibleJoinBtns) {
		return;
	}

	for (let i = 0; i < possibleJoinBtns.length; i++) {
		if (possibleJoinBtns[i].innerHTML === "Meetoffliner") {
			throw new Error("already active");
		}
	}

	for (let i = 0; i < possibleJoinBtns.length; i++) {
		if ("Join now Nu deelnemen".includes(possibleJoinBtns[i].innerHTML)) {
			return possibleJoinBtns[i];
		}
	}
	return undefined;
}

function createMeetofflinerBtn(joinBtn, btnsContainer) {
	// We want to include all the padding and other bells and whistles of the
	// actual joinBtn, not just the clickable part. Hence the parentNodes.
	const joinBtnFull = joinBtn.parentNode.parentNode;
	const meetofflinerBtn = joinBtnFull.cloneNode(true);

	meetofflinerBtn.childNodes[2].childNodes[0].innerHTML = "Meetoffliner";
	btnsContainer.appendChild(meetofflinerBtn).addEventListener("click", () => {
		openPopup(() => {
			joinBtn.click();
		});
	});

	meetofflinerBtn.removeAttribute("jsaction");
	meetofflinerBtn.removeAttribute("jscontroller");
	meetofflinerBtn.removeAttribute("jsname");
}

async function main() {
	// Because we are dealing with an SPA, we need to wait until everyting has
	// been loaded. This query is a good indicator of that.
	const checkLoadedLoop = setInterval(() => {
		// eslint-disable-next-line quotes
		if (!document.querySelector(`body > div[aria-live="polite"]`)) {
			return;
		}
		clearInterval(checkLoadedLoop);

		// Find join button and create new meetoffliner start button.
		const initLoop = setInterval(() => {
			const joinBtn = findJoinBtn();
			if (!joinBtn) {
				return;
			}

			const btnsContainer = joinBtn.parentNode.parentNode.parentNode;
			if (!btnsContainer) {
				return;
			}

			createMeetofflinerBtn(joinBtn, btnsContainer);
			clearInterval(initLoop);
		}, 500);
	});

}

main();