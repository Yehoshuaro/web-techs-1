function loadUsers() {
    return JSON.parse(localStorage.getItem('users')) || {};
}

function populateUsers() {
    const users = loadUsers();
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
                <td contenteditable="true">${user.role}</td>
                <td>
                    <button class="edit-btn" onclick="editUser(${id})">Edit</button>
                    <button class="delete-btn" onclick="deleteUser(${id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editUser(id) {
    const users = loadUsers();
    const row = document.querySelector(`#user-${id}`).children;
    users[id].firstName = row[1].innerText.trim();
    users[id].lastName = row[2].innerText.trim();
    users[id].email = row[3].innerText.trim();
    users[id].password = row[4].innerText.trim();
    users[id].role = row[5].innerText.trim();

    localStorage.setItem('users', JSON.stringify(users));
    alert('User updated successfully!');
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        const users = loadUsers();
        delete users[id];
        localStorage.setItem('users', JSON.stringify(users));
        populateUsers();
        alert('User deleted successfully!');
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    Array.from(document.getElementById('userTableBody').rows).forEach(row => {
        const [emailCell, firstNameCell, lastNameCell] = row.getElementsByTagName('td');
        const email = emailCell.innerText.toLowerCase();
        const firstName = firstNameCell.innerText.toLowerCase();
        const lastName = lastNameCell.innerText.toLowerCase();
        row.style.display = (email.includes(searchValue) || firstName.includes(searchValue) || lastName.includes(searchValue)) ? '' : 'none';
    });
});

window.onload = populateUsers;


