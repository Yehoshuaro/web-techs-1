function User(firstName, lastName, email, password, role = 'user') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
}

function loadUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

function saveUser(user) {
    const users = loadUsers();
    const userId = Object.keys(users).length;
    users[userId] = user;
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (firstName && lastName && email && password) {
        const newUser = new User(firstName, lastName, email, password);
        saveUser(newUser);

        alert(`User ${firstName} successfully registered`);
        window.location.href = 'properties-pavilion-en.html';
    } else {
        alert('Please fill out all fields');
    }
});



