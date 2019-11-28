const urlsite5 =  'https://still-lowlands-24985.herokuapp.com'
const urlsitetabs2 =  'https://still-lowlands-24985.herokuapp.com/folders'


// const urlsite5 = 'http://localhost:3000/'
// const urlsitetabs2 = 'http://localhost:3000/folders'



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
