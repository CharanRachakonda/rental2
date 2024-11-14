// Signup function
// Signup function
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === newEmail);

    if (existingUser) {
        alert("Email already registered. Please use a different email.");
    } else {
        users.push({ email: newEmail, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
    }
});


// Login function
// Login function
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});


// Logout function
document.getElementById('logoutButton')?.addEventListener('click', function () {
    alert("Logged out successfully");
    window.location.href = "login.html";
});
// Forgot Password function
document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const recoveryEmail = document.getElementById('recoveryEmail').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === recoveryEmail);

    if (user) {
        alert("Password reset instructions sent to your email.");
        
        // Additional email logic could be implemented here
    } else {
        alert("Email not found.");
    }
});
