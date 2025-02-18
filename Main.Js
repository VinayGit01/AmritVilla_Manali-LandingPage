const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target + '+'; // Add the + sign here
        }
    };

    updateCounter();
});

 // Initialize EmailJS
 emailjs.init("YOUR_USER_ID");

 // Handle form submission
 document.getElementById('bookingForm').addEventListener('submit', function(event) {
     event.preventDefault();

     // Collect form data
     var formData = {
         name: document.getElementById('name').value,
         contact: document.getElementById('contact').value,
         email: document.getElementById('email').value,
         address: document.getElementById('address').value,
         persons: document.getElementById('persons').value
     };

     // Use EmailJS to send the form data to the admin
     emailjs.send("service_tti26xe", "template_40zcgy3", formData)
         .then(function(response) {
             console.log("Success:", response);
             alert('Your booking request has been sent to the admin.');
             // Optionally close the modal
             $('#bookingModal').modal('hide');
         }, function(error) {
             console.log("Error:", error);
             alert('There was an error sending your request.');
         });
 });

  // Close navbar on toggle button click (if open)
  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
});

// Close navbar on link click (in mobile view)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});