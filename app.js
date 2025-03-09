/* app.js */
function fetchGrades() {
    fetch('https://conjuntaweb.onrender.com/calculateGrade')
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(`Error ${response.status}: ${err.message || response.statusText}`);
                });
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#gradesTable tbody');
            tableBody.innerHTML = '';
            data.forEach(student => {
                const row = `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.first_name}</td>
                        <td>${student.last_name}</td>
                        <td>${student.subject}</td>
                        <td>${student.grade1}</td>
                        <td>${student.grade2}</td>
                        <td>${student.finalGrade}</td>
                    </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error('Error detallado:', error);
            alert(`Hubo un problema al cargar las notas: ${error.message}`);
        });
}
