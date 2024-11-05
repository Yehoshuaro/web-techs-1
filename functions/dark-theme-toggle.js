document.getElementById("toggle-theme").addEventListener("click", function () {
    // Переключаем класс для включения темной темы
    document.body.classList.toggle("dark-theme");

    // Меняем лого в зависимости от темы
    const logo = document.querySelector(".navbar-brand img");
    if (document.body.classList.contains("dark-theme")) {
        logo.src = "../images/dark-logo.png"; // Замените на чёрное лого
    } else {
        logo.src = "../images/light-logo.png"; // Замените на светлое лого
    }
});
