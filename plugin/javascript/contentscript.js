let tabUrl = new Object();
let tabUrlFin = []

  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabUrl = tabs;
    let fileContent = JSON.stringify(tabUrl);
    console.log(fileContent);
});
