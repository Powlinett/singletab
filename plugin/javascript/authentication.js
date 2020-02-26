// const url = 'https://www.singletab.site/auth'
// const logoutUrl = 'https://www.singletab.site/signout'

// const url = 'https://singletab-staging.herokuapp.com/auth'
// const logoutUrl = 'https://singletab-staging.herokuapp.com/signout'

const url = 'http://localhost:3000/auth'
const logoutUrl = 'http://localhost:3000/signout'

/////// LOGIN ///////////

const form = document.querySelector('.authentication-form');
const actions = document.querySelector('.action-container');
const logout = document.querySelector('.logout');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  console.log(email);
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
      actions.classList.remove('hidden');
      logout.classList.remove('hidden');
    } else {
      console.log('error')
    };
  });
});


////////// LOG OUT ///////////

logout.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(logoutUrl)
  .then((response) => { return (response.json()) })
  .then(data => {
    console.log(data["message"]);
    if (data["message"] === "User logged out") {
      form.classList.remove('hidden');
      actions.classList.add('hidden');
      logout.classList.add('hidden');
    } else {
      console.log('nooooo');
    };
  });
});
