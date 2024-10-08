// Définiiton de la variable endpoint
const endpoint = 'https://randomuser.me/api/?results=50';

// Fetch
fetch(endpoint)
.then(
    function(response) {
        console.log(response.status);

        // Si la requête est un succès
        if (response.status === 200) {
            
            response.json()
            .then(
                (data) => {
                    console.log(data.results);
                    displayDataInTable(data.results);
                }
            )
        }
    },
    function(error) {
        console.error('Erreur', error);
    }
);

// Fonction pour afficher les données dans le tableau
function displayDataInTable(data) {
    const tableBody = document.querySelector('#userTable tbody');
    data.forEach(user => {
        const row = document.createElement('tr');
        const genderImage = user.gender === 'male' 
            ? '<img src="img/1f468.png" alt="Male" style="width: 30px; height: 30px;">' 
            : '<img src="img/1f469.png" alt="Female" style="width: 30px; height: 30px;">' ;
        row.innerHTML = `
            <td>${user.login.username}</td>
            <td>${genderImage}</td>
            <td>${user.name.first} ${user.name.last}</td>
            <td><img src="${user.picture.thumbnail}"></td>
            <td>${user.location.city}</td>
            <td><img src="https://flagcdn.com/w40/${user.nat.toLowerCase()}.png" alt="${user.location.country} flag"></td>
        `;
        tableBody.appendChild(row);
    });
}
