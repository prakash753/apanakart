document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const Password = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            // Here you can perform further actions like sending the data to a server
            // or storing it in local storage.
            alert('Signup successful');
        }
    });
});
