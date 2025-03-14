async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        let container = document.getElementById('user-container');

    users.forEach(user => {
        let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h1>${user.name}</h1>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>`;
    container.appendChild(card);
    });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

    fetchUsers();