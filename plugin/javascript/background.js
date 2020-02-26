// const urlsite =  'https://www.singletab.site/checkauth'
// const urlsitetabs =  'https://www.singletab.site/tabs'
// const urlsitefolders = 'https://www.singletab.site/folders/folders_name'
// const urlsiteindex = 'https://www.singletab.site/folders'


const urlsite = 'http://localhost:3000/checkauth'
const urlsitetabs = 'http://localhost:3000/tabs'
const urlsitefolders = 'http://localhost:3000/folders/folders_name'
const urlsiteindex = 'http://localhost:3000/folders'

// const urlsite = 'https://singletab-staging.herokuapp.com/checkauth'
// const urlsitetabs =  'https://singletab-staging.herokuapp.com/tabs'
// const urlsitefolders = 'https://singletab-staging.herokuapp.com/folders/folders_name'
// const urlsiteindex = 'https://singletab-staging.herokuapp.com/folders'


// Check if the user is authenticated
fetch(urlsite)
.then((response) => { return (response.json()) })
.then(data => {
  console.log(data['statut']);
  if ( data['statut'] == 'Already logged' ) {
    form.classList.add('hidden');
    logout.classList.remove('hidden');
  } else {
    actions.classList.add('hidden');
  };
});


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
  tabs.forEach(function(tabId) {
    chrome.tabs.remove(tabId.id);
  });
};

function removeTabs(tabs) {
  tabs.forEach(function(tab, index) {
    if (tab.url.includes("google")) {
      tabs.splice(index, 1);
    } else if (tab.url.includes("SingleTab")) {
      tabs.splice(index, 1);
    } else if (tab.url.includes("localhost")) {
      tabs.splice(index, 1);
    } else if (tab.title.includes("google")) {
      tabs.splice(index, 1);
    } else if (tab.title.includes("SingleTab")) {
      tabs.splice(index, 1);
    } else if (tab.title.includes("localhost")) {
      tabs.splice(index, 1);
    }
  });
};


//Create the hidden form to send the array of tabs
document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
  const button = document.querySelector('#checkPage');

  button.addEventListener('click', (e) => {
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
    closeTabs(tabs);
    setTimeout(openWindow, 100);
    });
  });
});

function openWindow() {
  window.open(urlsiteindex);
};
