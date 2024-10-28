let users = {
    0: {firstName: 'Yerkhan', lastName: 'Akhmet', email: 'yerkhan@gmail.com', password: '3319', role: 'admin'},
    1: {firstName: 'Bakhtiyar', lastName: 'Baizulla', email: 'bakhtiyar@gmail.com', password: '3319', role: 'admin'},
    2: {firstName: 'Ernar', lastName: 'Kassen', email: 'ernar@gmail.com', password: '3319', role: 'admin'}
};

document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const emailUser = document.getElementById('email').value;
    const passwordUser = document.getElementById('password').value;

    const user = Object.values(users).find(u => u.email === emailUser && u.password === passwordUser);

    if (user) {
        alert(`Welcome, ${user.firstName}!`);

        if (user.role === 'admin') {
            window.location.href = 'admin-panel.html';  // Перенаправление на админ панель
        } else {
            alert("You don't have access to the admin panel");
        }
    } else {
        alert('Invalid email or password');
    }
});
