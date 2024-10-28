let users = {
    0: {firstName: 'Yerkhan', lastName: 'Akhmet', email: 'yerkhan@gmail.com', password: '3319', role: 'admin'},
    1: {firstName: 'Bakhtiyar', lastName: 'Baizulla', email: 'bakhtiyar@gmail.com', password: '3319', role: 'admin'},
    2: {firstName: 'Ernar', lastName: 'Kassen', email: 'ernar@gmail.com', password: '3319', role: 'admin'}
};

function populateUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
    Object.keys(users).forEach(id => {
        const user = users[id];
        userTableBody.innerHTML += `
            <tr id="user-${id}">
                <td>${user.email}</td>
                <td contenteditable="true">${user.firstName}</td>
                <td contenteditable="true">${user.lastName}</td>
                <td contenteditable="true">${user.email}</td>
                <td contenteditable="true">${user.password}</td>
                <td>
                    <button class="edit-btn" onclick="editUser(${id})">Save</button>
                    <button class="delete-btn" onclick="deleteUser(${id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editUser(id) {
    const row = document.querySelector(`#user-${id}`).children;
    users[id].firstName = row[1].innerText.trim();
    users[id].lastName = row[2].innerText.trim();
    users[id].email = row[3].innerText.trim();
    users[id].password = row[4].innerText.trim();
    alert('User data updated successfully!');
    populateUsers();
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        delete users[id];
        populateUsers();
    }
}

window.onload = populateUsers;
