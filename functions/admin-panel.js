let users = {
    0: {firstName: 'Yerkhan', lastName: 'Akhmet', email: 'yerkhan@gmail.com', password: '3319', role: 'admin'},
    1: {firstName: 'Bakhtiyar', lastName: 'Baizulla', email: 'bakhtiyar@gmail.com', password: '3319', role: 'admin'},
    2: {firstName: 'Ernar', lastName: 'Kassen', email: 'ernar@gmail.com', password: '3319', role: 'admin'}
};

function populateUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = '';
    for (let id in users) {
        const user = users[id];
        userTableBody.innerHTML += `
            <tr>
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
    }
}

function editUser(id) {
    const rows = document.querySelectorAll(`#userTableBody tr:nth-child(${id + 1}) td`);
    users[id].firstName = rows[1].innerText;
    users[id].lastName = rows[2].innerText;
    users[id].email = rows[3].innerText;
    users[id].password = rows[4].innerText;
    alert('User updated successfully');
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        delete users[id];
        populateUsers();  // Refresh the table
    }
}

window.onload = populateUsers;
