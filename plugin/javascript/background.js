let tabUrl = new Object();
let tabUrlFin = []

const bob = () => {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabUrl = tabs;
    let fileContent = JSON.stringify(tabUrl);
    console.log(fileContent);
    return fileContent;
});
}

document.addEventListener('DOMContentLoaded', () => { //pour attendre creation de pages
 let button = document.getElementById('checkPage');
 let test = bob();
 console.log(test);
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
      mapInput.value = test;

      // Add the input to the form
      mapForm.appendChild(mapInput);

      // Add the form to dom
      document.body.appendChild(mapForm);

      // Just submit
      mapForm.submit();
     });
   });
