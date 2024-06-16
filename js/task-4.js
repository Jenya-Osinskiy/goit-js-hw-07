const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', clickForm);
function clickForm(e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  if (password.length < 8) {
    return alert('Password must be at least 8 characters long');
  }
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  loginForm.reset();
}
