document.addEventListener('DOMContentLoaded', () => {
    const formFields = document.querySelectorAll('input[type="email"], input[type="tel"], input[type="text"], input[type="number"], input[type="radio"]');
    const progressBar = document.getElementById('progress-bar');

    function updateProgress() {
        let completedFields = 0;

        formFields.forEach(field => {
            if ((field.type === "radio" && field.checked) || (field.type !== "radio" && field.value.trim() !== "")) {
                completedFields++;
            }
        });

        const progress = (completedFields / (formFields.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.innerText = `${Math.round(progress)}%`;
    }

    formFields.forEach(field => {
        field.addEventListener('input', updateProgress);
    });

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });

    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.id = 'theme-toggle';
    themeToggleBtn.className = 'btn btn-outline-secondary';
    themeToggleBtn.innerText = 'Toggle Theme';
    document.querySelector('.navbar .container-fluid').appendChild(themeToggleBtn);

    // Create a new <style> element for placeholder color
    const style = document.createElement('style');
    style.innerHTML = `
        input::placeholder,
        textarea::placeholder {
            color: #888; /* Light mode placeholder color */
            opacity: 1; /* Ensures the placeholder is fully opaque */
        }
        .dark-theme input::placeholder,
        .dark-theme textarea::placeholder {
            color: #ffffff; /* Dark mode placeholder color */
        }
        .dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000; /* Ensure it's above other elements */
        }
        .dialog-content {
            background: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            max-width: 400px; /* Limit the width */
            width: 100%; /* Responsive width */
        }
        .dark-theme .dialog-content {
            background: #444; /* Dark theme background */
            color: #fff; /* Dark theme text color */
        }
        .dark-theme .dialog-content button {
            background-color: #666; /* Dark theme button background */
            color: #fff; /* Dark theme button text color */
        }
    `;
    document.head.appendChild(style);

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            // Dark theme styles
            document.body.style.backgroundColor = '#3e3e3e';
            document.body.style.color = '#ffffff';
            progressBar .style.backgroundColor = '#3e3e3e';
            progressBar.style.color = '#ffffff';
            document.querySelectorAll('input, textarea, select').forEach(input => {
                input.style.backgroundColor = '#1e1e1e';
                input.style.color = '#ffffff';
                input.style.borderColor = '#444444';
            });
            document.querySelectorAll('label').forEach(label => {
                label.style.color = '#ffffff';
            });
            document.querySelectorAll('a').forEach(a => {
                a.style.color = '#ffffff';
            });
            document.querySelectorAll('h2').forEach(a => {
                a.style.color = '#ffffff';
            });
            document.querySelector('footer').style.backgroundColor = '#1e1e1e';
            document.querySelector('footer').style.color = '#ffffff';
            document.querySelector('header').style.backgroundColor = '#1e1e1e';
            document.querySelector('nav').style.backgroundColor = '#1e1e1e';
            document.querySelector('form').style.backgroundColor = '#1e1e1e';
            document.querySelector('.container').style.backgroundColor = '#1e1e1e';
            document.querySelector('h1').style.color = '#ffffff';
            document.querySelector('.sell-form').style.backgroundColor = '#3e3e3e';
            themeToggleBtn.innerText = 'Light Theme'; // Change button text
        } else {
            // Light theme styles
            document.body.style.backgroundColor = '';
            document.body.style.color = '#333';
            progressBar.style.backgroundColor = '#007bff';
            progressBar.style.color = '#000';
            document.querySelectorAll('input, textarea, select').forEach(input => {
                input.style.backgroundColor = '#fff';
                input.style.color = '#000';
                input.style.borderColor = '#ccc';
            });
            document.querySelectorAll('label').forEach(label => {
                label.style.color = '#000';
            });
            document.querySelectorAll('a').forEach(a => {
                a.style.color = '#000';
            });
            document.querySelectorAll('h2').forEach(a => {
                a.style.color = '#000';
            });
            document.querySelector('footer').style.backgroundColor = '#fff';
            document.querySelector('footer').style.color = '#000';
            document.querySelector('header').style.backgroundColor = '#fff';
            document.querySelector('nav').style.backgroundColor = '#fff';
            document.querySelector('form').style.backgroundColor = '#fff';
            document.querySelector('.container').style.backgroundColor = '#fff';
            document.querySelector('h1').style.color = '#000';
            document.querySelector('.sell-form').style.backgroundColor = '#fff';
            themeToggleBtn.innerText = 'Toggle Theme'; // Change button text back
        }
    });

    // Create the dialog window dynamically
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    document.body.appendChild(dialog);

    const dialogContent = document.createElement('div');
    dialogContent.className = 'dialog-content';
    dialog.appendChild(dialogContent);

    const confirmMessage = document.createElement('h2');
    confirmMessage.innerText = 'Confirm Submission';
    dialogContent.appendChild(confirmMessage);

    const confirmText = document.createElement('p');
    confirmText.innerText = 'Are you sure all data is entered properly?';
    dialogContent.appendChild(confirmText);

    const confirmBtn = document.createElement('button');
    confirmBtn.id = 'confirm-btn';
    confirmBtn.className = 'btn btn-primary';
    confirmBtn.innerText = 'Confirm';
    dialogContent.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancel-btn';
    cancelBtn.className = 'btn btn-secondary';
    cancelBtn.innerText = 'Cancel';
    dialogContent.appendChild(cancelBtn);

    // Add event listeners for the buttons
    confirmBtn.addEventListener('click', () => {
        // Clear any previous success messages
        const existingSuccessMessage = dialogContent.querySelector('p.success-message');
        if (existingSuccessMessage) {
            existingSuccessMessage.remove();
        }

        // Hide the dialog
        dialog.style.display = 'none';

        // Create and display the success message
        const successMessage = document.createElement('p');
        successMessage.className = 'success-message'; // Add a class for potential styling
        successMessage.style.color = 'green';
        successMessage.innerText = 'Request created successfully!';
        dialogContent.appendChild(successMessage);

        // Show the dialog again to display the success message
        dialog.style.display = 'flex';

        // Redirect to the home page after 2 seconds
        setTimeout(() => {
            window.location.href = 'properties-pavilion-en.html'; // Redirect to home page
        }, 2000);
    });

    cancelBtn.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    // Listen for the form submission
    document.querySelector('form.sell-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        dialog.style.display = 'flex'; // Show the dialog
    });
});