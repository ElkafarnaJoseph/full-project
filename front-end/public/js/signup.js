// public/js/signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    // Add a submit event listener to the form
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const continent = document.getElementById('continent').value;

        // Display the form data in an alert (for testing purposes)
        alert(`Username: ${username}\nPassword: ${password}\nAge: ${age}\nGender: ${gender}\nContinent: ${continent}`);

        // TODO: Send the data to the backend or perform other actions
    });
});