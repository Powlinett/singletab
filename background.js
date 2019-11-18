document.addEventListener('DOMContentLoaded', () => { //pour attendre creation de pages
  var button = document.getElementById('checkPage');
  button.addEventListener('click', (event) => {

     window.open('onglets.html','_blank') //ouvre view onglets#index
  });
})
