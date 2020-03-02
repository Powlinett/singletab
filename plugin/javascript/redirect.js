const title = document.querySelector('h1');

title.addEventListener('click', (event) => {
  window.open(ROOT_URL, '_blank');
});

const signUp = document.querySelector('.sign-up');

signUp.addEventListener('click', (event) => {
	window.open(ROOT_URL, '_blank');
});

const showMaps = document.querySelector('#show-maps');

showMaps.addEventListener('click', (event) => {
	window.open(ROOT_URL + "/folders", '_blank');
});
