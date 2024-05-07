// Get the "Coming Soon" text element
var comingSoonText = document.querySelector('.coming-soon');

// Set minimum and maximum font sizes
var minFontSize = 18; // Set your desired minimum font size here
var maxFontSize = 20; // Set your desired maximum font size here

// Function to adjust font size based on window width
function adjustFontSize() {
    // Get the current window width
    var windowWidth = window.innerWidth;
    
    // Calculate the desired font size based on the window width
    var fontSize = Math.min(Math.max(windowWidth, minFontSize), maxFontSize); // Ensure font size stays within range
    
    // Set the font size of the text element
    comingSoonText.style.fontSize = fontSize + 'px';
}

// Call the adjustFontSize function initially
adjustFontSize();

// Attach an event listener to adjust font size when the window is resized
window.addEventListener('resize', adjustFontSize);