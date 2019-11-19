let tabUrl = new Object();
let tabUrlFin = []

  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabUrl = tabs;
    let fileContent = JSON.stringify(tabUrl);
    tabs.forEach(function(tab) {
        //collect all of the urls here, I will just log them instead
    const liste = document.getElementById('listeonglets');
    liste.insertAdjacentHTML("afterend", `<li>${tab.url}</li>`);
    });

});
