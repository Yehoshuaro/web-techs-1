document.addEventListener('DOMContentLoaded', function () {
    const toggleSnowButton = document.getElementById('toggle-snow');
    let snowInterval;

    function createSnowflake() {
        const snowflake = document.createElement('i');
        snowflake.classList.add('snowflake', 'fas', 'fa-snowflake');
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        snowflake.style.animationDuration = `${(Math.random() * 3 + 2) * 2.5}s`;
        snowflake.style.opacity = Math.random();

        document.body.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    toggleSnowButton.addEventListener('click', () => {
        if (snowInterval) {
            clearInterval(snowInterval);
            snowInterval = null;
            toggleSnowButton.textContent = 'Snow';
        } else {
            snowInterval = setInterval(createSnowflake, 150);
            toggleSnowButton.textContent = 'Stop Snow';
        }
    });

    const toggleThemeButton = document.getElementById('toggle-theme');

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        toggleThemeButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
    });
});
