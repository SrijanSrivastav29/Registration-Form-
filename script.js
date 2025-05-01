document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate Username
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 15) {
        showError('usernameError', 'Username must be between 3 and 15 characters');
        isValid = false;
    } else {
        hideError('usernameError');
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Invalid email address');
        isValid = false;
    } else {
        hideError('emailError');
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long');
        isValid = false;
    } else {
        hideError('passwordError');
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    } else {
        hideError('confirmPasswordError');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}