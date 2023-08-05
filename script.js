// Get reference to the scrolling div
const scrollingDiv = document.getElementById('scrollingDiv');
const asset1 = document.getElementById('asset1');
const asset2 = document.getElementById('asset2');

// Variables to keep track of the background position and scrolling speed
let backgroundPositionX = 0;
const scrollingSpeed = 10; // Adjust the value to control the scrolling speed

// Function to handle keydown events
function handleKeyDown(event) {
  if (event.keyCode === 37) {
    // Left arrow key (scroll left)
    backgroundPositionX += scrollingSpeed;
  } else if (event.keyCode === 39) {
    // Right arrow key (scroll right)
    backgroundPositionX -= scrollingSpeed;
  }

  // Update the background position of the scrolling div
  scrollingDiv.style.backgroundPositionX = `${backgroundPositionX}px`;

   asset1.style.left = `${55 + backgroundPositionX /100 *5.13}%`;
  asset2.style.left = `${200 + backgroundPositionX /100 *5.13}%`;
}

// Attach the keydown event listener to the document
document.addEventListener('keydown', handleKeyDown);
