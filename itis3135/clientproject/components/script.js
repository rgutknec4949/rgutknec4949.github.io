let slideIndex = 0; // Initialize the slide index
showSlides(slideIndex); // Show the first slide

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slides"); // Get all slides
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "block"; // Show the current slide
}

// Add event listeners for navigation arrows
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));