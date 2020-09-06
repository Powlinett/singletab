// const ROOT_URL = "http://localhost:3000"
// const ROOT_URL = "https://singletab-staging.herokuapp.com"
const ROOT_URL = "https://www.singletab.site"


// Create a array with all the tabs
function arraytabs() {
  let tabUrl = new Object();
  let tabUrlFin = [];
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      chrome.tabs.executeScript(tab.id, { code: "document.body.innerText" }, function(response) {
        let body = response;
        tabUrlFin.push({ "title": tab.title, "icon": tab.favIconUrl, "url": tab.url, "body": body, "id": tab.id });
        removeTabs(tabUrlFin);
      });
    });
  });
  return tabUrlFin;
};

function closeTabs(tabs) {
  const tabIds = [];
  tabs.forEach(tab => {
    tabIds.push(tab.id);
  });
  chrome.tabs.remove(tabIds);
};

//Create the hidden form to send the array of tabs
document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
  console.log(tabs);
  const button = document.querySelector('#checkPage');
  createResearchForm();

  if (button) {
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
      const folderSelection = document.querySelector('#select-folder');
      event.preventDefault();
      folderSelection.submit();
      setTimeout(openWindow, 1000, tabs);
      });
    });
  }

});

function openWindow(tabs) {
  let newWindow = window.open(ROOT_URL + "/folders");
    if(!newWindow) {
      alert("Please allow pop-ups for Singletab :)");
    };
  closeTabs(tabs);
};

