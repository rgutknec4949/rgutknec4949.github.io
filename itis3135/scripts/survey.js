document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("byo-intro-form");
    const coursesContainer = document.getElementById("courses-container");
    const addCourseButton = document.getElementById("add-course");

    // Function to add a new course text box
    const addCourseField = () => {
        const courseField = document.createElement("div");
        courseField.innerHTML = `
            <input type="text" name="courses[]" required placeholder="Enter course name">
            <button type="button" class="remove-course">Remove</button>
        `;
        coursesContainer.appendChild(courseField);

        // Add functionality to remove the course field
        courseField.querySelector(".remove-course").addEventListener("click", () => {
            coursesContainer.removeChild(courseField);
        });
    };

    addCourseButton.addEventListener("click", addCourseField);

    // Function to validate required fields
    const validateFields = () => {
        const requiredFields = form.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.border = "2px solid red"; // Highlight missing fields
                if (!field.nextElementSibling || !field.nextElementSibling.classList.contains("error-message")) {
                    const errorMessage = document.createElement("span");
                    errorMessage.textContent = "This field is required.";
                    errorMessage.classList.add("error-message");
                    errorMessage.style.color = "red";
                    errorMessage.style.fontSize = "12px";
                    field.insertAdjacentElement("afterend", errorMessage);
                }
            } else {
                field.style.border = ""; // Reset border if valid
                if (field.nextElementSibling && field.nextElementSibling.classList.contains("error-message")) {
                    field.nextElementSibling.remove(); // Remove error message
                }
            }
        });

        return isValid;
    };

    // Function to handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Validate required fields
        if (!validateFields()) {
            alert("Please fill out all required fields.");
            return;
        }

        // Gather form data and replace the form with the content
        const formData = new FormData(form);
        const output = document.createElement("div");
        const imageFile = formData.get("image");

        // Create an image element if a file is uploaded
        let imageHTML = "";
        if (imageFile && (imageFile.type === "image/png" || imageFile.type === "image/jpeg")) {
            const imageURL = URL.createObjectURL(imageFile);
            imageHTML = `<img src="${imageURL}" alt="${formData.get("image-caption")}" style="max-width: 300px; display: block; margin: 1em auto;">`;
        } else if (imageFile) {
            alert("Unsupported file type. Please upload a PNG or JPEG image.");
            return;
        }

        output.innerHTML = `
            <h3>Your Intro Page</h3>
            <p><strong>Name:</strong> ${formData.get("name")}</p>
            <p><strong>Mascot:</strong> ${formData.get("mascot")}</p>
            ${imageHTML}
            <p><strong>Image Caption:</strong> ${formData.get("image-caption")}</p>
            <p><strong>Personal Background:</strong> ${formData.get("personal-background")}</p>
            <p><strong>Professional Background:</strong> ${formData.get("professional-background")}</p>
            <p><strong>Academic Background:</strong> ${formData.get("academic-background")}</p>
            <p><strong>Background in Web Development:</strong> ${formData.get("web-background")}</p>
            <p><strong>Primary Computer Platform:</strong> ${formData.get("computer-platform")}</p>
            <p><strong>Courses Currently Taking:</strong> ${formData.getAll("courses[]").join(", ")}</p>
            <p><strong>Funny Thing:</strong> ${formData.get("funny-thing")}</p>
            <p><strong>Anything Else:</strong> ${formData.get("anything-else")}</p>
            <button id="reset-form">Reset</button>
        `;
        form.replaceWith(output);

        // Add reset functionality
        document.getElementById("reset-form").addEventListener("click", () => {
            location.reload(); // Reload the page to reset the form
        });
    });

    // Function to reset the form and clear validation styles
    form.addEventListener("reset", () => {
        const requiredFields = form.querySelectorAll("[required]");
        requiredFields.forEach((field) => {
            field.style.border = ""; // Reset border styles
            if (field.nextElementSibling && field.nextElementSibling.classList.contains("error-message")) {
                field.nextElementSibling.remove(); // Remove error messages
            }
        });
    });
});