function setup() {
    // Create a canvas 600 pixels wide and 400 pixels high
    const canvas = createCanvas(600, 400);
    canvas.parent("canvas-container"); // Attach the canvas to the container
}

function draw() {
    // Sky blue background
    background(135, 206, 235);

    // Sun in top-right corner
    fill("yellow");
    circle(550, 50, 100);

    // Grass on bottom half
    fill("green");
    rect(0, 200, 600, 200);

    // Emojis
    textSize(75);
    text("🌸", 100, 250); // Flower
    text("🐞", mouseX, mouseY); // Ladybug
}