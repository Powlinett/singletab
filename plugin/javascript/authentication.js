const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const authentication = document.querySelector('#authentication').value;
  console.log(authentication);
})