document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menuIcon');
    
    // Toggle menu open/close
    menu.classList.toggle('menu-open');
    menuIcon.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        var menuIcon = document.getElementById('menuIcon');

        // Close menu
        menu.classList.remove('menu-open');
        menuIcon.classList.remove('open');
    });
});





// code for the job card    


console.log('Script is running');

// Define jobs for different times of the day
const morningJobs = [
    { 
        title: "COOK & CHEF", 
        description: "A chef is a professional cook who is proficient or masterful at professional-level food preparation.",
        image: "./images/new/cook.jpg" 
    },
    { 
        title: "CHILD-CAREGIVER",
        description: "Responsible for the care and supervision of children in various settings.", 
        image: "./images/new/child caretaker.jpg"
     },
    {    
         title: "DRIVER",
         description: "Provides on-demand transportation to people who need to travel quickly and conveniently.", 
         image: "./images/new/taxi driver.jpg" 
    },
    {    
        title: "PAINTER", 
        description: "Applies various finishes to buildings, rooms, or other structures.", 
        image: "./images/new/painter 1.jpg" 
    },
    {   
        title: "GARDENER",
        description: "Maintains gardens and other green spaces by planting, trimming, and watering.", 
        image: "./images/new/gardener.jpg" 
    },
    {  
        title: "PLUMBER",
        description: "Installs and repairs pipes and fixtures that carry water, gas, or other fluids.",
         image: "./images/new/plumbing-at-home.jpg" 
    },
    { 
        title: "CARPENTER",
        description: "Builds, installs, and repairs structures made of wood and other materials.", 
        image: "./images/new/carpenter.png" 
    },
    {   
        title: "HOUSEKEEPER", 
        description: "Cleans and organizes residential or commercial spaces.", 
        image: "./images/new/housekeeping.jpg" 
    },
    {   
        title: "SECURITY GUARD", 
        description: "Protects property and ensures safety at various establishments.", 
        image: "./images/new/security guard.jpg" 
    }
];

const afternoonJobs = [
    { 
        title: "ELECTRICIAN", 
        description: "Installs and repairs electrical systems, including wiring and fixtures.", 
        image: "./images/new/electrician.jpg" 
    },
    {
         title: "GARDENER", 
         description: "Maintains gardens and other green spaces by planting, trimming, and watering.",
         image: "./images/new/gardener.jpg" 
    },
    {
        title: "PLUMBER", 
        description: "Installs and repairs pipes and fixtures that carry water, gas, or other fluids.",
         image: "./images/new/plumbing-at-home.jpg" 
     },
    { 
        title: "CONSTRUCTION WORKER", 
        description: "Performs tasks on construction sites, including building and repairing structures.",
         image: "./images/new/construction.jpg"
     },
    { 
        title: "CARPENTER", 
        description: "Builds, installs, and repairs structures made of wood and other materials.", 
        image: "./images/new/carpenter.png" 
    },
    { 
        title: "CAR & BIKE MECHANIC", 
        description: "Repairs and maintains vehicles and machinery.", 
        image: "./images/new/car-bike mech.jpeg" 
    },
    { 
        title: "PAINTER",
        description: "Applies various finishes to buildings, rooms, or other structures.", 
        image: "./images/new/painter.png" 
    },
    { 
        title: "CLEANER",
         description: "Cleans and maintains residential or commercial buildings.", 
         image: "./images/new/cleaner (2).jpg" 
    },
    { 
        title: "CHEF",
         description: "Prepares and cooks food in restaurants, hotels, or private homes.", 
         image: "./images/new/chef.jpg" 
    },
    {
         title: "HOUSEKEEPER",
          description: "Cleans and organizes residential or commercial spaces.", 
          image: "./images/job-images/housekeeping.jpg" 
    }
];

const eveningJobs = [
    { 
        title: "CARPENTER",
         description: "Builds, installs, and repairs structures made of wood and other materials.", 
         image: "./images/new/carpenter.png"
     },
    { 
        title: "ROAD CLEANER",
         description: "The Road cleaner is used to keep our surroundings clean.", 
         image: "./images/new/road%cleaner.jpg" 
    },
    { 
        title: "SECURITY GUARD", 
        description: "Protects property and ensures safety at various establishments.", 
        image: "./images/new/security.png" 
    },
    { 
        title: "MECHANIC",
         description: "Industrial machinery mechanics specialize in the maintenance, repair, and troubleshooting of machinery used in industrial settings.", 
         image: "./images/new/industrial mechanic.jpg" 
        },
    { 
        title: "ELECTRICIAN",
         description: "Installs and repairs electrical systems, including wiring and fixtures.",
          image: "./images/new/Electrician-home.jpg" 
    },
    { 
        title: "RECEPTIONIST", 
        description: "Handles guest check-ins, reservations, and provides information.", 
        image: "./images/new/receptionist.jpg"
     },
    { 
        title: "VALET", 
        description: "Parks and retrieves cars for guests at hotels or restaurants.", 
        image: "./images/new/valet-parking.jpg" 
    },
    { 
        title: "WAITRESS", 
        description: "Serves food and beverages to customers in restaurants or cafes.",
         image: "./images/new/waiter.jpg" 
    }
];

// Function to get a random subset of jobs
function getRandomJobs(jobArray, num) {
    const shuffled = jobArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
} 

document.addEventListener('DOMContentLoaded', (event) => {
    loadJobsFromStorage();
});


// Load random jobs based on time of day
function loadTimeBasedJobs() {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = '';

    const currentHour = new Date().getHours();
    let selectedJobs;

    // Select job set based on the current hour
    if (currentHour >= 8 && currentHour < 12) {
        selectedJobs = morningJobs; // Morning jobs
    } else if (currentHour >= 12 && currentHour < 18) {
        selectedJobs = afternoonJobs; // Afternoon jobs
    } else {
        selectedJobs = eveningJobs; // Evening jobs
    }
    
    // Get a random set of 4 jobs
    const randomJobs = getRandomJobs(selectedJobs, 4);
     
    // Display the selected jobs
    randomJobs.forEach(job => {
        console.log(`Image path:"C:/Users/Admin/Desktop/labour/final_project/images/job-images" ${job.image}`);
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
    
        jobCard.innerHTML = `
            <img class="job-image" src="${job.image}" alt="${job.title}" height="200" width="200">
            <h3 class="job-title">${job.title}</h3>
            <p class="job-description">${job.description}</p>
            <button class="apply-button">Apply Now</button>
        `;
        
        jobsContainer.appendChild(jobCard);
    });
}

// Load jobs on page load
window.onload = loadTimeBasedJobs;



// profile 
// Function to handle job searching
function searchJobs() {
    const query = document.getElementById('jobSearch').value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        const title = card.querySelector('.job-title').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
}

// Function to edit user profile (placeholder)
function editProfile() {
    alert("Profile editing functionality is not yet implemented.");
}

// Function to upload resume (placeholder)
function uploadResume() {
    const fileInput = document.getElementById('resumeUpload');
    if (fileInput.files.length > 0) {
        alert("Resume uploaded successfully!");
    } else {
        alert("Please select a file to upload.");
    }
}

// Function to subscribe to job alerts

function subscribeAlerts() {
    const email = document.getElementById('alertEmail').value;
    const jobType = document.getElementById('jobType').value;
    const frequency = document.getElementById('frequency').value;

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        console.log(`Subscribed with Email: ${email}, Job Type: ${jobType}, Frequency: ${frequency}`);
        alert(`Thank you for subscribing!\nEmail: ${email}\nJob Type: ${jobType}\nFrequency: ${frequency}`);
        document.getElementById('alertEmail').value = '';
        document.getElementById('jobType').value = 'all';
        document.getElementById('frequency').value = 'daily';
    } else {
        alert('Please enter a valid email address.');
    }
}
// Toggle FAQ answers
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});


// Function to edit user profile (placeholder)
function editProfile() {
    alert("Profile editing functionality is not yet implemented.");
}



// EmailJS integration
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("dUx0kHekaic6WXHUU"); // Replace with your actual EmailJS User ID

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Send email using EmailJS
        emailjs.send("service_xekcl78", "template_82jxrwe", formData)
            .then(function (response) {
                alert("✅ Message sent successfully!");
                console.log("EmailJS Response:", response);
                document.querySelector("form").reset(); // Clear the form after success
            }, function (error) {
                alert("❌ Failed to send message. Try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});


// this is for the user profile 


document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('workerLoggedIn') === 'true';
  const role = localStorage.getItem('workerRole');
  const profileLink = document.getElementById('profileLink');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (isLoggedIn && role === 'worker') {
    profileLink.style.display = 'inline-block';
    logoutBtn.style.display = 'inline-block';
    loginBtn.style.display = 'none';

    // Fill profile info
    document.getElementById('workerName').textContent = localStorage.getItem('workerName') || 'Worker';
    document.getElementById('jobsCount').textContent = localStorage.getItem('jobsCount') || '0';
    document.getElementById('salaryStatus').textContent = localStorage.getItem('salaryStatus') || 'Pending';
  } else {
    profileLink.style.display = 'none';
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'inline-block';
  }

  // Toggle profile panel
  profileLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('profilePanel').style.display = 'block';
  });

  document.getElementById('closeProfile').addEventListener('click', function () {
    document.getElementById('profilePanel').style.display = 'none';
  });

  // Save bank details
  document.getElementById('bankDetailsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('accountName').value;
    const number = document.getElementById('accountNumber').value;
    const ifsc = document.getElementById('ifsc').value;

    alert(`✅ Bank details saved!\nName: ${name}\nAccount: ${number}\nIFSC: ${ifsc}`);
    this.reset();
  });
});
