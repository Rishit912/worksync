document.addEventListener('DOMContentLoaded', () => {
    loadJobListings();

    // Toggle profile visibility
    document.getElementById('profileButton').addEventListener('click', function() {
        toggleVisibility('profile');
        hidePayment();
        hideAppointment();
        loadProfile();
    });

    // Handle payment form submission
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Payment successful!');
        this.reset(); // Reset form after payment
        hidePayment();
        loadAppointmentHistory();
    });
});

// Toggle visibility function
function toggleVisibility(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Hide payment module
function hidePayment() {
    document.getElementById('paymentMethods').style.display = 'none';
}

// Hide appointment module
function hideAppointment() {
    document.getElementById('appointmentModule').style.display = 'none';
}

// Load job listings
function loadJobListings() {
    const jobListingsContainer = document.getElementById('jobListings');
    jobListingsContainer.innerHTML = '';

    // Example data for workers with images
    const workers = [
        { name: "John Doe", skill: "Plumber", rating: 4.5, image: "../images/plumber.jpg" },
        { name: "Jane Smith", skill: "Carpenter", rating: 4.7, image: "../images/carpenter.png" },
        { name: "Mike Johnson", skill: "Electrician", rating: 4.8, image: "../images/new/Electrician-Home.jpg" },
        { name: "Sara Williams", skill: "Chef", rating: 4.6, image: "../images/new/chef.jpg" },
        { name: "Tom Brown", skill: "Gardener", rating: 4.4, image: "../images/new/gardener.jpg" },
        { name: "Emily Davis", skill: "Painter", rating: 4.9, image: "../images/new/painter.png" },
    ];

    workers.forEach(worker => {
        const workerCard = document.createElement('div');
        workerCard.classList.add('job-card');
        workerCard.innerHTML = `
            <img src="${worker.image}" alt="${worker.name}">
            <h3>${worker.name}</h3>
            <p>Skill: ${worker.skill}</p>
            <p>Rating: ${worker.rating}</p>
            <button onclick="applyForAppointment('${worker.name}')">Apply for Appointment</button>
        `;
        jobListingsContainer.appendChild(workerCard);
    });
}

// Apply for appointment
function applyForAppointment(workerName) {
    document.getElementById('selectedWorker').innerHTML = `<h3>Selected Worker: ${workerName}</h3>`;
    toggleVisibility('appointmentModule');
}

// Confirm appointment and show payment
document.getElementById('confirmAppointmentButton').addEventListener('click', function() {
    const selectedWorker = document.getElementById('selectedWorker').innerText;
    if (selectedWorker) {
        alert(`Appointment confirmed with ${selectedWorker.replace('Selected Worker: ', '')}.`);
        hideAppointment();
        toggleVisibility('paymentMethods');
    } else {
        alert('Please select a worker first.');
    }
});

// Load user profile
function loadProfile() {
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <label for="username">Username:</label>
        <input type="text" id="username" value="john_doe" disabled>
        <label for="mobile">Mobile No:</label>
        <input type="text" id="mobile" value="123-456-7890" disabled>
        <label for="address">Address:</label>
        <input type="text" id="address" value="123 Main St, Anytown, USA" disabled>
    `;
}

// Load appointment history
function loadAppointmentHistory() {
    const appointmentHistory = document.getElementById('appointmentHistory');
    appointmentHistory.innerHTML = `
        <p>No appointment history available.</p>
    `;
}



function filterJobs() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');

    jobCards.forEach(card => {
        const skill = card.querySelector('p').innerText.toLowerCase(); // Assuming the first <p> contains the skill
        if (skill.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

  function logout() {
    localStorage.clear(); // Clear stored user data
    window.location.href = "../login-registeration/login.html"; // Redirect to login page
  }

