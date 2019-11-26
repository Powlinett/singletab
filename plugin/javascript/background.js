fetch('http://localhost:3000/checkauth')
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
      chrome.tabs.executeScript(tab.id, { code: "document.body.innerHTML.innerText" }, function(response) {
        let body = response;
        tabUrlFin.push({ "title": tab.title, "icon": tab.favIconUrl, "url": tab.url, "body": body, "id": tab.id });
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
    }
    if (tab.title.includes("singletab")) {
      tabs.splice(index, 1);
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();


//pour attendre creation de pages
var button = document.getElementById('checkPage');
button.addEventListener('click', (e) => {
  tabs.forEach(function(tab, index) {
    removeTabs(tabs);
  });
  let mapForm = document.createElement("form");
  mapForm.target = "_blank";
  mapForm.method = "POST";
      // mapForm.action = "https://still-lowlands-24985.herokuapp.com/tabs"; //pour utiliser le plugin avec heroku
      mapForm.action = "http://localhost:3000/tabs";  //pour utiliser le plugin en local
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
      window.open("http://localhost:3000/tabs")
    });
});
