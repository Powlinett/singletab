// document.addEventListener('DOMContentLoaded', () => { //pour attendre creation de pages
//  var button = document.getElementById('checkPage');
//  button.addEventListener('click', (event) => {
//    // window.open('http://localhost:3000/','_blank') //ouvre view onglets#index
//   // window.location.replace('onglets.html')
//   //john : methode post sur folder index
//       // Create a form

//       let mapForm = document.createElement("form");
//       mapForm.target = "_blank";
//       mapForm.method = "POST";
//       mapForm.action = "http://localhost:3000/tabs";

//       // Create an input
//       let mapInput = document.createElement("input");
//       mapInput.type = "text";
//       mapInput.name = "variable";
//       mapInput.value = fileContent;

//       // Add the input to the form
//       mapForm.appendChild(mapInput);

//       // Add the form to dom
//       document.body.appendChild(mapForm);

//       // Just submit
//       mapForm.submit();
// //stop code jojo

//      });
//    });

document.addEventListener('DOMContentLoaded', () => { //pour attendre creation de pages
 var button = document.getElementById('checkPage');
 button.addEventListener('click', (event) => {
    //window.open('onglets.html','_blank')
     let mapForm = document.createElement("form");
      mapForm.target = "_blank";
      mapForm.method = "POST";
      mapForm.action = "http://localhost:3000/tabs";

      // Create an input
      let mapInput = document.createElement("input");
      mapInput.type = "text";
      mapInput.name = "variable";
      mapInput.value = "fileContent";

      // Add the input to the form
      mapForm.appendChild(mapInput);

      // Add the form to dom
      document.body.appendChild(mapForm);

      // Just submit
      mapForm.submit();
     });
   });
