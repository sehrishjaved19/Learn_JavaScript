// Access HTML Element
const alert_button = document.getElementById("alertButton");
const open_window_button = document.getElementById("openWindowButton");
const navigator_back_button = document.getElementById("navigateBackButton");
const change_URL_button = document.getElementById("changeURLButton");

// Attach event listeners
alert_button.addEventListener('click', () => {
    window.alert('Hello, this is an alert!');
});
open_window_button.addEventListener('click', () => {
    window.open('https://www.google.com/', '_blank');
});
navigator_back_button.addEventListener('click', () => {
    history.back(); // Navigates back one page in the user's browsing history.
});
change_URL_button.addEventListener('click', () => {
    location.href = "https://www.google.com/"; // Redirects the user to a new URL
});