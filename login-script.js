document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const emailLoginForm = document.getElementById('emailLoginForm');

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            const email = document.getElementById('userEmail').value;
            const password = document.getElementById('password').value;

            // Basic validation (you can enhance this)
            if (email && password) {
                // Here, you can perform any authentication logic
                // For now, we'll just redirect to the welcome page
                localStorage.setItem('email', email); // Store email for later use
                window.location.href = 'welcome.html'; // Redirect to welcome page
            } else {
                alert('Please enter both email and password.');
            }
        });
    }
});
