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

        const progress = (completedFields / (formFields.length-1)) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.innerText = `${Math.round(progress)}%`;
    }

    formFields.forEach(field => {
        field.addEventListener('input', updateProgress);
    });

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });
});