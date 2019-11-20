function arraytabs() {
  let tabUrl = new Object();
  let tabUrlFin = [];
  chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function(tab) {
    chrome.tabs.executeScript(tab.id, { code: "document.body.innerText" }, function(response) {
      let body = response;
              tabUrlFin.push({ "title": tab.title, "icon": tab.favIconUrl, "url": tab.url, "body": body });
    });
    });
    });
  console.log(tabUrlFin);
  return tabUrlFin;
}

document.addEventListener('DOMContentLoaded', () => {
  let tabs = arraytabs();
//pour attendre creation de pages
 var button = document.getElementById('checkPage');
 button.addEventListener('click', (event) => {

    //window.open('onglets.html','_blank')
     let mapForm = document.createElement("form");
      mapForm.target = "_blank";
      mapForm.method = "POST";
      mapForm.action = "https://still-lowlands-24985.herokuapp.com/tabs";
   
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
     });
   });
