// Function to search for a student
function searchStudent() {
    const searchName = document.getElementById("studentname").value.trim(); 
    const tableBody = document.querySelector("tbody"); 
    tableBody.innerHTML = ""; 

    // Retrieve the list of students from local storage and filteer student
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const results = students.filter((student) => student.studentName.toLowerCase().includes(searchName.toLowerCase()));

    // Check if there are any matching students
    if (results.length > 0) {
        results.forEach((student) => {
            // Create a new row for every student
            const row = `<tr>
                <td>${student.studentName}</td>
                <td>${student.midtermScore}</td>
                <td>${student.finalScore}</td>
                <td>${student.grade}</td>
                <td>${student.gpa}</td>
            </tr>`;
            tableBody.innerHTML += row; 
        });
    } else {
        alert("No student found."); // Alert if there is no student is found 
    }
}
