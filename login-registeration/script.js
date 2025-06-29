function showRegister() {
    document.getElementById('register').style.display = 'block';
    document.querySelector('.form-container:first-of-type').style.display = 'none';
    document.getElementById('forgot').style.display = 'none';
}

function showLogin() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('forgot').style.display = 'none';
    document.querySelector('.form-container:first-of-type').style.display = 'block';
}

function showForgot() {
    document.getElementById('forgot').style.display = 'block';
    document.querySelector('.form-container:first-of-type').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}

// Login form redirect based on role
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('loginRole').value;

    if (role === "user") {
        window.location.href = "../users/user_home.html";
    } else if (role === "worker") {
        window.location.href = "../home.html";
    } else if (role === "admin") {
        window.location.href = "../admin.html";
    } else {
        alert("Please select a role.");
    }
});

// Registration form redirect based on role
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('registerRole').value;

    if (role === "user") {
        window.location.href = "../users/user_home.html";
    } else if (role === "worker") {
        window.location.href = "../home.html";
    } else if (role === "admin") {
        window.location.href = "../admin.html";
    } else {
        alert("Please select a role.");
    }
});

// Forgot form dummy handler
document.getElementById('forgotForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password reset functionality not implemented yet.');
});
