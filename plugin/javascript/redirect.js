// const urlsite5 =  'https://www.singletab.site'
// const urlsitetabs2 =  'https://www.singletab.site/folders'


const urlsite5 = 'http://localhost:3000/'
const urlsitetabs2 = 'http://localhost:3000/folders'



const title = document.querySelector('h1');

title.addEventListener('click', (event) => {
  window.open(urlsite5, '_blank');
});

const signIn = document.querySelector('.sign-up');

signIn.addEventListener('click', (event) => {
	window.open(urlsite5, '_blank');
});

const showMaps = document.querySelector('#show-maps');

showMaps.addEventListener('click', (event) => {
	window.open(urlsitetabs2, '_blank');
});
