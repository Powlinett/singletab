/////// CHECK-AUTH ///////////

fetch(ROOT_URL + "/checkauth")
.then((response) => { return (response.json()) })
.then(data => {
  if ( data['statut'] == 'Already logged' ) {
    form.classList.add('hidden');
    logout.classList.remove('hidden');
  } else {
    actions.classList.add('hidden');
  };
});


/////// LOGIN ///////////

const form = document.querySelector('.authentication-form');
const actions = document.querySelector('.action-container');
const logout = document.querySelector('.logout');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  fetch(ROOT_URL + "/auth", {
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
    };
  });
});


////////// LOG OUT ///////////

logout.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(ROOT_URL + "/signout")
  .then((response) => { return (response.json()) })
  .then(data => {
    if (data["message"] === "User logged out") {
      form.classList.remove('hidden');
      actions.classList.add('hidden');
      logout.classList.add('hidden');
    };
  });
});
