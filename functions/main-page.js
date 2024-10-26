const form = document.createElement('form');

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name: ';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';

const loginLabel = document.createElement('label');
loginLabel.textContent = 'Login: ';
const loginInput = document.createElement('input');
loginInput.type = 'text';
loginInput.id = 'login';

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password: ';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';

const submitButton = document.createElement('button');
submitButton.textContent = 'Register: ';
submitButton.id = 'submit';

const loginButton = document.createElement('button');
loginButton.textContent = 'Sign In';
loginButton.id = 'loginButton';

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement('br'));

form.appendChild(loginLabel);
form.appendChild(loginInput);
form.appendChild(document.createElement('br'));

form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));

form.appendChild(submitButton);
form.appendChild(loginButton);
document.body.appendChild(form);

let users = {
    0: {name: 'Admin', login: 'admin', password: 'admin123', role: 'admin'},
};

function User(name, login, password, role = 'user') {
    this.name = name;
    this.login = login;
    this.password = password;
    this.role = role;
}

function createId(users) {
    return Object.keys(users).length;
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameUser = nameInput.value;
    const loginUser = loginInput.value;
    const passwordUser = passwordInput.value;

    const user = new User(nameUser, loginUser, passwordUser);

    const userId = createId(users);
    users[userId] = user;

    alert(`User ${nameUser} successfully registered`);
    console.log(users);
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const loginUser = loginInput.value;
    const passwordUser = passwordInput.value;

    const user = Object.values(users).find(u => u.login === loginUser && u.password === passwordUser);

    if (user) {
        alert(`Welcome, ${user.name}!`);

        if (user.role === 'admin') {
            alert('Welcome to admin-panel');
        }
        else {
            alert("You don't have access to admin-panel");
        }
    } else {
        alert('Invalid login or password');
    }
});
