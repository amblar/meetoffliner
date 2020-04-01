var checker = setInterval(function(){ 
	var containerdiv = document.querySelector("div.Sla0Yd > div > div.XCoPyb");
	if(containerdiv != null && containerdiv.childElementCount > 1) {
		var buttondiv = document.createElement("div");
		buttondiv.className = "UQuaGc Y5sE8d EWKsxe xKiqt";
		buttondiv.setAttribute("aria-disabled", "false");
		var buttontext = document.createElement("span");
		buttontext.className = "l4V7wb Fxmcue";
		buttontext.innerHTML = "<span class='NPEfkd RveJvd snByac'>Start Meetoffliner</span>";
		buttondiv.appendChild(buttontext);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "%MAIN%", true);
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.onload = function() {
			buttondiv.addEventListener('click', function(){
				eval(xhr.responseText);
			});
			containerdiv.appendChild(buttondiv);
		}
		xhr.send();
		clearInterval(checker);
	}
}, 10);