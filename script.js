//your JS code here. If required.
// Initial angle of rotation
let angle = 0;

// Function to rotate the line
function rotateLine() {
    // Get the line element
    const line = document.getElementById('line');

    // Increase the angle by 2 degrees
    angle += 2;

    // Apply the rotation using transform property
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    // Call rotateLine every 20 milliseconds for smooth rotation
    setTimeout(rotateLine, 20);
}

// Start the rotation
rotateLine();

