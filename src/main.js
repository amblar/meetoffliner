import start from "./start";
import flatpickrCss from "./flatpickrcss";

function findJoinBtn() {
	// eslint-disable-next-line quotes
	const possibleJoinBtns = document.querySelectorAll(`div > div[role="button"] > span > span`);
	if (!possibleJoinBtns) {
		return;
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
	console.log(meetofflinerBtn);

	meetofflinerBtn.childNodes[2].childNodes[0].innerHTML = "Meetoffliner";
	btnsContainer.appendChild(meetofflinerBtn);

	meetofflinerBtn.addEventListener("click", () => {
		start(() => {
			joinBtn.click();
		});
	});
	meetofflinerBtn.setAttribute("id", "meetoffliner-btn");
	meetofflinerBtn.removeAttribute("jsaction");
	meetofflinerBtn.removeAttribute("jscontroller");
	meetofflinerBtn.removeAttribute("jsname");
	meetofflinerBtn.removeAttribute("tabindex");
	meetofflinerBtn.removeAttribute("aria-disabled");
	meetofflinerBtn.removeAttribute("jsshadow");
}

async function main() {
	// Check if flatpickr CSS already exists, this is used to indicate whether
	// or not the script has already been injected on the page.
	if (document.getElementById("flatpickr")) {
		return;
	}

	// Add flatpickr CSS
	const flatpickrStyle = document.createElement("style");
	flatpickrStyle.innerText = flatpickrCss;
	flatpickrStyle.setAttribute("id", "flatpickr");
	document.head.appendChild(flatpickrStyle);

	const initLoop = setInterval(() => {
		const joinBtn = findJoinBtn();
		if (!joinBtn) {
			return;
		}

		const btnsContainer = joinBtn.parentNode.parentNode.parentNode;
		if (!btnsContainer) {
			return;
		}
		clearInterval(initLoop);

		// There have been issues where the button would not appear, therefore
		// we now check whether is has.
		const createLoop = setInterval(() => {
			if (!joinBtn || !btnsContainer) {
				clearInterval(createLoop);
			}
			if (!document.getElementById("meetoffliner-btn")) {
				createMeetofflinerBtn(joinBtn, btnsContainer);
			}
		}, 500);

	}, 100);

}

main();