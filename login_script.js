document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate a login process (replace with actual authentication logic)
    if (email === "worker@example.com" && password === "worker123") {
        window.location.href = "./home.html"; // Redirect to worker page
    } else if (email === "user@example.com" && password === "user123") {
        window.location.href = "./users/user_home.html"; // Redirect to user page
    } else if (email === "admin@example.com" && password === "admin123") {
        window.location.href = "./Admin/admin_dashboard.html"; // Redirect to admin page
    } else {
        alert("Invalid credentials, please try again.");
    }
});




document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("❌ Invalid email or password");
    return;
  }

  // Set session
  localStorage.setItem("workerLoggedIn", "true");
  localStorage.setItem("workerName", user.name);
  localStorage.setItem("workerEmail", user.email);
  localStorage.setItem("workerRole", user.role);
  localStorage.setItem("jobsCount", "3"); // Sample static data
  localStorage.setItem("salaryStatus", "Not Received");

  alert("✅ Login successful!");

  // Redirect based on role
  if (user.role === "worker") {
    window.location.href = "../home.html";
  } else if (user.role === "admin") {
    window.location.href = "../admin-dashboard.html";
  } else {
    window.location.href = "../user-home.html";
  }
});



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        // Set user as logged in
        localStorage.setItem('workerLoggedIn', true);
        localStorage.setItem('workerName', storedUser.name);
        localStorage.setItem('workerEmail', storedUser.email);
        localStorage.setItem('workerRole', storedUser.role);
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

