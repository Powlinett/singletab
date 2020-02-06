// const urlsite =  'https://www.singletab.site/checkauth'
// const urlsitetabs =  'https://www.singletab.site/tabs'
// const urlsitefolders = 'https://www.singletab.site/tabs'
// const urlsiteresearch = 'https://www.singletab.site/tabs/assign_folder'
// const urlsiteindex = 'https://www.singletab.site/folders'


const urlsite = 'http://localhost:3000/checkauth'
const urlsitetabs = 'http://localhost:3000/tabs'
const urlsitefolders = 'http://localhost:3000/folders/folders_name'
const urlsiteindex = 'http://localhost:3000/folders'


fetch(urlsite)
.then((response) => { return (response.json()) })
.then(data => {
  console.log(data['statut']);
  if ( data['statut'] == 'Already logged' ) {
    form.classList.add('hidden');
    logout.classList.remove('hidden');
  } else {
    buttons.classList.add('hidden');
  };
});

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

const folderSelection = document.querySelector('#select-folder');

function createResearchForm() {
  const folderOption = document.querySelector('#folders-selection');
  // folderSelection.target = "_blank";
  folderSelection.method = "POST";
  folderSelection.action = urlsitetabs;
  fetch(urlsitefolders)
    .then((response) => { return response.json() })
    .then(data => {
      data.forEach(folder => {
        const option = document.createElement("option");
        option.value = folder['id'];
        option.innerText = folder['name'];
        folderOption.appendChild(option)
      });
    });
};

document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
//pour attendre creation de pages
  const button = document.getElementById('checkPage');
  button.addEventListener('click', (e) => {
  createResearchForm();
// Create an input pour les tabs
  let tabsInput = document.createElement("input");
  tabsInput.type = "text";
  tabsInput.name = "variable";
  tabsInput.value = JSON.stringify(tabs);
// Add the input to the form
  let tabsForm = document.querySelector('#tabs-form');
  tabsForm.appendChild(tabsInput);
  
  const submit = document.querySelector('#submit-folders-selection');
  submit.addEventListener('click', (e) => {
    event.preventDefault();
    folderSelection.submit();
    closeTabs(tabs);
    setTimeout(openWindow, 50);
    });
  });
});

function openWindow() {
  window.open(urlsiteindex);
};
