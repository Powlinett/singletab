document.addEventListener('DOMContentLoaded', () => { //pour attendre creation de pages
 var button = document.getElementById('checkPage');
 button.addEventListener('click', (event) => {
    window.open('onglet.html','_blank') //ouvre view onglets#index
  // window.location.replace('onglets.html')
     });
   });