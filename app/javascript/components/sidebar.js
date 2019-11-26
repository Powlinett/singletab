const sidenavBarsButton = document.querySelector('.sidenav-button .fa-bars');
const sidenavHidden = document.querySelector('.sidenav-hidden');
const sidenavCrossButton = document.querySelector('.fa-times');

sidenavBarsButton.addEventListener('click', (event) => {
  sidenavBarsButton.classList.add('fa-hidden');
  sidenavHidden.classList.remove('sidenav-hidden');
  sidenavCrossButton.classList.remove('fa-hidden');
});

sidenavCrossButton.addEventListener('click', (event) => {
  sidenavBarsButton.classList.remove('fa-hidden');
  sidenavHidden.classList.add('sidenav-hidden');
  sidenavCrossButton.classList.add('fa-hidden');
});