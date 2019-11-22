const form = document.querySelector('.form');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  console.log(email);
  console.log(password);
  fetch('https://still-lowlands-24985.herokuapp.com/auth', {
	method: 'POST',
	body: JSON.stringify({ "email": email, "password": password }),
	headers: { 'Content-Type': 'application/json',
             'Accept': 'application/json' }
})
  .then((response) => { return (response.json()) })
	.then(data => { console.log(data) })
});
