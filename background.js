chrome.tabs.onUpdated.addListener((id, _, tab) => {
	if (!tab.url.match(/meet\.google\.[a-z]+\/[a-z]{3}-[a-z]{4}-[a-z]{3}/g)) {
		return;
	}
	chrome.tabs.executeScript(id, {
		file: "main.js",
	});
});
