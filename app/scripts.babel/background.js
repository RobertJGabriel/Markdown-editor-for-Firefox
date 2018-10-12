chrome.browserAction.onClicked.addListener(activeTab => {
  chrome.tabs.create({
    url: chrome.extension.getURL('popup.html')
  });
});
