document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    // Form validation
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        alert("Thank you for your message! We'll get back to you soon.");
    });
});