// Student Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentID = document.getElementById('studentID').value;
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const room = document.getElementById('roomSelect').value;

    if (studentID && studentName && room) {
        const allocationList = document.getElementById('allocationList');

        // Create new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${studentID}</td>
            <td>${studentName}</td>
            <td>${room}</td>
        `;

        allocationList.appendChild(newRow);

        alert(`Student ${studentName} (ID: ${studentID}) registered successfully for Room ${room}!`);

        // Clear form fields
        this.reset();
    } else {
        alert('Please fill all the fields before submitting.');
    }
});
