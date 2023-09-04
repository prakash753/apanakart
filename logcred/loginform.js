const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateInputs();
});

function validateInputs() {
  // Reset error messages
  usernameError.innerText = '';
  passwordError.innerText = '';

  // Get input values
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  // Validate username
  if (usernameValue === '') {
    setError(username, usernameError, 'Username is required');
  } else if (usernameValue.length < 3) {
    setError(username, usernameError, 'Username must be at least 3 characters');
  } else {
    setSuccess(username, usernameError);
  }

  // Validate password
  if (passwordValue === '') {
    setError(password, passwordError, 'Password is required');
  } else if (passwordValue.length < 6) {
    setError(password, passwordError, 'Password must be at least 6 characters');
  } else {
    setSuccess(password, passwordError);
  }

  // Submit form if all inputs are valid
  if (usernameValue !== '' && passwordValue !== '' && usernameValue.length >= 3 && passwordValue.length >= 6) {
    form.submit();
  }
}

function setError(input, errorElement, errorMessage) {
  input.classList.add('error');
  errorElement.innerText = errorMessage;
}

function setSuccess(input, errorElement) {
  input.classList.remove('error');
  errorElement.innerText = '';
}
