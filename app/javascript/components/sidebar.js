const sidenavBarsButton = document.querySelector('.sidenav-button .fa-bars');
const sidenavHidden = document.querySelector('.sidenav-hidden');
const sidenavCrossButton = document.querySelector('.fa-times');

sidenavBarsButton.addEventListener('mouseover', (event) => {
  sidenavBarsButton.classList.add('fa-hidden');
  sidenavHidden.classList.replace('sidenav-hidden', 'sidenav');
  sidenavCrossButton.classList.remove('fa-hidden');
});

sidenavCrossButton.addEventListener('click', (event) => {
  sidenavBarsButton.classList.remove('fa-hidden');
  sidenavHidden.classList.replace('sidenav', 'sidenav-hidden');
  sidenavCrossButton.classList.add('fa-hidden');
});