document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("byo-intro-form");
    const main = document.querySelector("main");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Capture form data
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0];
        const personalBackground = document.getElementById("personal-background").value;
        const professionalBackground = document.getElementById("professional-background").value;
        const academicBackground = document.getElementById("academic-background").value;
        const webBackground = document.getElementById("web-background").value;
        const computerPlatform = document.getElementById("computer-platform").value;
        const courses = Array.from(document.querySelectorAll("input[name='courses[]']")).map((input) => input.value);
        const funnyThing = document.getElementById("funny-thing").value;
        const anythingElse = document.getElementById("anything-else").value;

        // Generate the output HTML
        const outputHTML = `
            <h2>${name}'s Introduction</h2>
            <img src="${URL.createObjectURL(image)}" alt="${mascot}" class="output-image">
            <ul>
                <li><span>Personal Background:</span> ${personalBackground}</li>
                <li><span>Professional Background:</span> ${professionalBackground}</li>
                <li><span>Academic Background:</span> ${academicBackground}</li>
                <li><span>Background in Web Development:</span> ${webBackground}</li>
                <li><span>Primary Computer Platform:</span> ${computerPlatform}</li>
                <li><span>Courses I'm Taking & Why:</span>
                    <ul>
                        ${courses.map((course) => `<li>${course}</li>`).join("")}
                    </ul>
                </li>
                <li><span>Funny/Interesting Item to Remember Me By:</span> ${funnyThing}</li>
                <li><span>I'd also like to share:</span> ${anythingElse}</li>
            </ul>
        `;

        // Clear the form and display the output
        form.reset();
        main.innerHTML = outputHTML;
    });

    // Add functionality to dynamically add more course inputs
    const addCourseButton = document.getElementById("add-course");
    const coursesContainer = document.getElementById("courses-container");

    addCourseButton.addEventListener("click", () => {
        const newCourseInput = document.createElement("input");
        newCourseInput.type = "text";
        newCourseInput.name = "courses[]";
        newCourseInput.placeholder = "Enter course name";
        newCourseInput.required = true;
        coursesContainer.appendChild(newCourseInput);
    });
});