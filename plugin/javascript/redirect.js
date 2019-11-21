const title = document.querySelector('h1');

title.addEventListener('click', (event) => {
  window.open('https://still-lowlands-24985.herokuapp.com/', '_blank');
});

const signIn = document.querySelector('.sign-up');

signIn.addEventListener('click', (event) => {
	window.open('https://still-lowlands-24985.herokuapp.com', '_blank');
});

const showMaps = document.querySelector('#show-maps');

showMaps.addEventListener('click', (event) => {
	window.open('https://still-lowlands-24985.herokuapp.com/folders', '_blank');
});


