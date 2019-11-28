//const urlsite =  'https://still-lowlands-24985.herokuapp.com'
//const urlsitetabs =  'https://still-lowlands-24985.herokuapp.com/folders'

const urlsite = 'http://localhost:3000/'
const urlsitetabs = 'http://localhost:3000/folders'



const title = document.querySelector('h1');

title.addEventListener('click', (event) => {
  window.open(urlsite, '_blank');
});

const signIn = document.querySelector('.sign-up');

signIn.addEventListener('click', (event) => {
	window.open(urlsite, '_blank');
});

const showMaps = document.querySelector('#show-maps');

showMaps.addEventListener('click', (event) => {
	window.open(urlsitetabs, '_blank');
});
