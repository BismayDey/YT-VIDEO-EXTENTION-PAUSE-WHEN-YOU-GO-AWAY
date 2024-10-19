chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log(`Tab activated: ${activeInfo.tabId}`);
});
