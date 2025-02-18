// public/js/main.js


document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signup-button');

    // Add a click event listener to the button
    signupButton.addEventListener('click', () => {
        // Redirect to the signup page
        window.location.href = 'signup.html'; // Update this URL to match your setup
    });
});