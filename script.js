<script>
    // Function to validate the form before submission
    function validateForm(event) {
        // Prevent form submission
        event.preventDefault();

        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Validate name
        if (name.value.trim() === "") {
            alert("Please enter your name.");
            name.focus();
            return false;
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            email.focus();
            return false;
        }

        // Validate message
        if (message.value.trim() === "") {
            alert("Please enter a message.");
            message.focus();
            return false;
        }

        // If all fields are valid, show a success message
        alert("Your message has been successfully sent!");

        // Normally, here you would submit the form data to the server.
        // Since we prevent the default behavior, you can submit it manually with AJAX or another method.
        // For now, we'll reset the form after successful validation:
        document.querySelector("form").reset();
    }

    // Attach the validation function to the form submission event
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", validateForm);
    });
</script>
