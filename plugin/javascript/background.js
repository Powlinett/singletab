const ROOT_URL = "http://localhost:3000"
// const ROOT_URL = "https://singletab-staging.herokuapp.com"
// const ROOT_URL = "https://www.singletab.site"


// Create a array with all the tabs
function arraytabs() {
  let tabUrl = new Object();
  let tabUrlFin = [];
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      console.log(tab);
      chrome.tabs.executeScript(tab.id, { code: "document.body.innerText" }, function(response) {
        let body = response;
        tabUrlFin.push({ "title": tab.title, "icon": tab.favIconUrl, "url": tab.url, "body": body, "id": tab.id });
        removeTabs(tabUrlFin, blacklistedSitesArray);
      });
    });
  });
  return tabUrlFin;
};

function closeTabs(tabs) {
  tabs.forEach(function(tabId) {
    chrome.tabs.remove(tabId.id);
  });
};

//Create the hidden form to send the array of tabs
document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
  const button = document.querySelector('#checkPage');
  createResearchForm();

  button.addEventListener('click', (e) => {
  let folderOption = document.querySelector('#choices-single-default');
  const choices = new Choices(folderOption);

  let tabsInput = document.createElement("input");
  tabsInput.type = "text";
  tabsInput.name = "variable";
  tabsInput.value = JSON.stringify(tabs);
  let tabsForm = document.querySelector('#tabs-form');
  tabsForm.appendChild(tabsInput);

  const folderForm = document.querySelector('.research-choice');
  const buttons = document.querySelector('.button-container');
  folderForm.classList.remove('hidden');
  buttons.classList.add('hidden');

  const submit = document.querySelector('#submit-folder-selection');
  submit.addEventListener('click', (e) => {
    event.preventDefault();
    folderSelection.submit();
    setTimeout(openWindow, 800);
    setTimeout(closeTabs(tabs), 1000);
    });
  });
});

function openWindow() {
  window.open(ROOT_URL + "/folders");
};
