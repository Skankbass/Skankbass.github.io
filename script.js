window.addEventListener('load', () => {
    const image = document.getElementById('image');
    const comingSoon = document.getElementById('coming-soon');
    const imageSize = image.offsetWidth; // Get the width of the image

    // Calculate the font size based on the image width
    const fontSize = imageSize * 0.07; // Adjust the multiplier as needed

    // Set the font size dynamically
    comingSoon.style.fontSize = `${fontSize}px`;
});
