let currentStrokeWeight = 4; // Default stroke weight

function setup() {
    // Create a canvas 600 pixels wide and 400 pixels high
    const canvas = createCanvas(600, 400);
    canvas.parent("canvas-container"); // Attach the canvas to the container
    background(0); // Set the background to black
}

function draw() {
    // Check if the mouse is pressed
    if (mouseIsPressed) {
        strokeWeight(currentStrokeWeight); // Use the current stroke weight
        line(mouseX, mouseY, pmouseX, pmouseY); // Draw a line following the mouse
    }
}

function keyPressed() {
    // Change stroke color based on key press
    if (key === 'r') stroke(255, 0, 0); // Red
    if (key === 'g') stroke(0, 255, 0); // Green
    if (key === 'b') stroke(0, 0, 255); // Blue
    if (key === 'w') stroke(255); // White
    if (key === 'c') background(0); // Clear the canvas when 'c' is pressed
}

function mouseWheel(event) {
    // Adjust stroke weight dynamically with the mouse wheel
    currentStrokeWeight = constrain(currentStrokeWeight + event.delta / 100, 1, 10);
}