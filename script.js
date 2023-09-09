let currentServiceIndex = 0; // Initialize the current service index
// JavaScript for the mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');
// Get references to the service cards and navigation buttons
const serviceCards = document.querySelectorAll('.service-card');
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


const testimonials = document.querySelectorAll('.testimonial');
const leftTestimonialButton = document.querySelector('.left-testimonial');
const rightTestimonialButton = document.querySelector('.right-testimonial');

let currentTestimonialIndex = 0; // Initialize the current testimonial index

// Function to show the current testimonial
function showTestimonial(index) {
  // Hide all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });

  // Show the testimonial at the specified index
  testimonials[index].style.display = 'block';
}

// Function to show the previous testimonial
function showPreviousTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

// Function to show the next testimonial
function showNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

// Initial display of the first testimonial
showTestimonial(currentTestimonialIndex);

// Add click event listeners to the navigation buttons
leftTestimonialButton.addEventListener('click', showPreviousTestimonial);
rightTestimonialButton.addEventListener('click', showNextTestimonial);



// Function to show the current service
function showService(index) {
  // Remove the 'active' class from all service cards
  serviceCards.forEach((card) => {
    card.classList.remove('active');
  });

  // Add the 'active' class to the service card at the specified index
  serviceCards[index].classList.add('active');
}

// Function to show the previous service
function showPreviousService() {
  currentServiceIndex = (currentServiceIndex - 1 + serviceCards.length) % serviceCards.length;
  showService(currentServiceIndex);
}

// Function to show the next service
function showNextService() {
  currentServiceIndex = (currentServiceIndex + 1) % serviceCards.length;
  showService(currentServiceIndex);
}

// Initial display of the first service
showService(currentServiceIndex);

// Add click event listeners to the navigation buttons
leftArrowButton.addEventListener('click', showPreviousService);
rightArrowButton.addEventListener('click', showNextService);

// Function to hide navigation buttons on larger screens
function hideNavigationButtons() {
  leftArrowButton.style.display = 'none';
  rightArrowButton.style.display = 'none';
}

// Function to show navigation buttons on mobile
function showNavigationButtons() {
  leftArrowButton.style.display = 'block';
  rightArrowButton.style.display = 'block';
}

// Initial display based on screen width
if (window.innerWidth <= 768) {
  showNavigationButtons(); // Show buttons on mobile
} else {
  hideNavigationButtons(); // Hide buttons on larger screens
}

// Update display when the window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    showNavigationButtons();
    showService(currentServiceIndex);
  } else {
    hideNavigationButtons();
    serviceCards.forEach((card, index) => {
      card.style.display = 'block';
    });
  }
});