
//const urlsite =  'https://still-lowlands-24985.herokuapp.com/checkauth'
//const urlsitetabs =  'https://still-lowlands-24985.herokuapp.com/tabs'

const urlsite = 'http://localhost:3000/checkauth'
const urlsitetabs = 'http://localhost:3000/tabs'

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

document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
//pour attendre creation de pages
var button = document.getElementById('checkPage');
button.addEventListener('click', (e) => {

  let mapForm = document.createElement("form");
  mapForm.target = "_blank";
  mapForm.method = "POST";
      // mapForm.action = "https://still-lowlands-24985.herokuapp.com/tabs"; //pour utiliser le plugin avec heroku
      mapForm.action = urlsitetabs;  //pour utiliser le plugin en local
      // Create an input
      let mapInput = document.createElement("input");
      mapInput.type = "text";
      mapInput.name = "variable";
      mapInput.value = JSON.stringify(tabs);
      // Add the input to the form
      mapForm.appendChild(mapInput);
      // Add the form to dom
      document.body.appendChild(mapForm);
      // Just submit
      mapForm.submit();
      closeTabs(tabs);
      window.open(urlsitetabs)
    });
});
