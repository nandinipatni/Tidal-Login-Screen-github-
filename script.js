document.addEventListener('DOMContentLoaded', function () {
    // Redirect from login to account creation page
    const loginForm = document.getElementById('loginForm');
    const continueBtn = document.getElementById('continueBtn');
    const loginOptions = document.querySelectorAll('.login-option');

    // Redirect to account creation page when clicking "Email or username"
    const emailLabel = document.getElementById('toggleToSignup');
    if (emailLabel) {
        emailLabel.addEventListener('click', function () {
            window.location.href = 'create-account.html'; // Change to your create account page path
        });
    }

    if (loginForm && continueBtn) {
        continueBtn.addEventListener('click', function () {
            const email = document.getElementById('email').value;
            if (email) {
                localStorage.setItem('email', email); // Store email for later use
                window.location.href = 'create-account.html'; // Redirect to create account page
            } else {
                alert('Please enter a valid email or username.');
            }
        });
    }

    // Add event listeners to social login buttons
    if (loginOptions) {
        loginOptions.forEach(option => {
            option.addEventListener('click', function () {
                // Redirect to the new login page for email and password
                window.location.href = 'login-with-email.html'; // New page for email and password
            });
        });
    }

    // Pre-fill the email on the create-account page
    const userEmail = document.getElementById('userEmail');
    if (userEmail) {
        userEmail.textContent = localStorage.getItem('email');
    }

    // Validate the create-account form
    const signUpBtn = document.getElementById('signUpBtn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function () {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();

            const age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
            } else if (age < 18) {
                alert('You must be at least 18 years old to sign up.');
            } else {
                window.location.href = 'welcome.html'; // Redirect to welcome page
            }
        });
    }
});
