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
    `;
    document.head.appendChild(style);

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            // Dark theme styles
            document.body.style.backgroundColor = '#3e3e3e';
            document.body.style.color = '#ffffff';
            progressBar.style.backgroundColor = '#3e3e3e';
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

            // Update placeholder color for dark mode
            style.innerHTML = `
                input::placeholder,
                textarea::placeholder {
                    color: #ffffff; /* Dark mode placeholder color */
                    opacity: 1;
                }
            `;
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

            // Update placeholder color for light mode
            style.innerHTML = `
                input::placeholder,
                textarea::placeholder {
                    color: #888; /* Light mode placeholder color */
                    opacity: 1;
                }
            `;
        }
    });
});