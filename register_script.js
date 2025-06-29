document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulate registration process (replace with actual logic)
    alert(`Registered successfully as ${role}: ${name}`);
    window.location.href = "login.html"; // Redirect to login page after registration
});





document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  if (users.some(u => u.email === email)) {
    alert("❌ User already registered with this email.");
    return;
  }

  users.push({ name, email, password, role });
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Registered successfully! Please login.");
  window.location.href = "login.html";
});



document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Check if the user already exists
    if (localStorage.getItem(email)) {
        alert('This email is already registered. Please log in or use a different email.');
        return;
    }

    // Store user data
    const userData = {
        name: name,
        email: email,
        password: password,
        role: role
    };
    
    localStorage.setItem(email, JSON.stringify(userData));
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});
