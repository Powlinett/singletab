// const url = 'https://still-lowlands-24985.herokuapp.com/auth'
const url = 'http://localhost:3000/auth'

/////// LOGIN ///////////

const form = document.querySelector('.form');
const buttons = document.querySelector('.button-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  console.log(email);
  console.log(password);
  fetch(url, {
	method: 'POST',
	body: JSON.stringify({ "email": email, "password": password }),
	headers: { 'Content-Type': 'application/json',
             'Accept': 'application/json' }
})
  .then((response) => { return (response.json()) })
	.then(data => {
    if (typeof data['token'] !== "undefined") {
      form.classList.add('hidden');
      buttons.classList.toggle('hidden');
    } else {
      console.log('hello')
    };
  });
});


////////// LOG OUT ///////////

