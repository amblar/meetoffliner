chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if (info.status !== "complete" || !tab.url.includes("meet.google.com")) {
    return;
  }
  console.log("ran", info.status);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", chrome.extension.getURL("loader.js"), true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function() {
      let code = xhr.responseText.replace("%MAIN%", chrome.extension.getURL('main.js'));
      chrome.tabs.executeScript(tabId, {code: code});
  }
  xhr.send();
});