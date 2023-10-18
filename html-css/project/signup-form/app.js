const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

modalBtn.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();

	if (!email || !password) {
		alert('Please enter both email and password.');
	}

	if (!isValidEmail(email)) {
		showError(emailInput, 'Please enter a valid email address.');
	} else {
		hideError(emailInput);
	}

	if (!isValidPassword(password)) {
		showError(passwordInput, 'Password must be at least 8 characters long.');
	} else {
		hideError(passwordInput);
	}

	if (isValidEmail(email) && isValidPassword(password)) {
		alert('Login successful!');
		loginForm.reset();
		modal.style.display = 'none';
	}
});

/*function isValidEmail(email) {
	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\/;
}*/