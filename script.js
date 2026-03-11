// JavaScript functionality for the dental clinic website

// Example function to show current date and time
function showCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    console.log('Current Date and Time (UTC):', utcDateTime);
}

// Example function to initialize website functionality
function initializeWebsite() {
    showCurrentDateTime();
    // Other initialization code here
}

// Call the initialize function when the page loads
window.onload = initializeWebsite;