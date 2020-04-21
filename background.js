// This will run when a new tab is opened.

chrome.tabs.onCreated.addListener(function(tab) {
  console.log("tab onCreate", tab)
  if (tab.pendingUrl === "chrome://newtab/") {
    let num = Math.floor(Math.random() * Math.floor(9));
    if (num <= 5) {
      chrome.tabs.query({'active': true}, function(tabs) {
        let motivationHTML = chrome.runtime.getURL("resources/motivation.html");
        chrome.tabs.update(tabs[0].id, {url: motivationHTML});
      });
    }
  }
});
