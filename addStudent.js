// Function to add a student
function addStudent() {
    // Get the values from the form fields
    const studentName = document.getElementById("Studentname").value.trim();
    const midtermScore = parseFloat(document.getElementById("MidtermScores").value);
    const finalScore = parseFloat(document.getElementById("FinalScores").value);

    // Check if all the fields are filled correctly and calculate the total & gpa& grade
    if (studentName && !isNaN(midtermScore) && !isNaN(finalScore)) {
        const totalScore = midtermScore + finalScore;
        const grade = getGrade(totalScore);
        const gpa = getGPA(totalScore);

        // Get the list of students from localStorage or create an empty list 
        const students = JSON.parse(localStorage.getItem("students")) || [];

        // Add the new student to the list and save the update list
        students.push({ studentName, midtermScore, finalScore, grade, gpa });
        localStorage.setItem("students", JSON.stringify(students));

        // alert the user to tel him know the student was successfully added
        alert("Student added successfully!");
    } else {
        // alert ask the user to fill in all fields
        alert("Please fill in all fields for the student.");
    }
}

//  function to calculate the grade
function getGrade(totalScore) {
    if (totalScore >= 90) return "AA";
    if (totalScore >= 85) return "BA";
    if (totalScore >= 80) return "BB";
    if (totalScore >= 70) return "CB";
    if (totalScore >= 65) return "CC";
    if (totalScore >= 60) return "D";
    return "F";
}

// function to calculate the GPA and  The GPA can't go over 4
function getGPA(totalScore) {
    return Math.min((totalScore / 100) * 4, 4); 
}
