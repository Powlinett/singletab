const title = document.querySelector('h1');
console.log(title);
title.addEventListener('click', (event) => {
  window.open('https://still-lowlands-24985.herokuapp.com/', '_blank');
});