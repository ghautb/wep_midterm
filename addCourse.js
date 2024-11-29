// Function to add a new course
function addCourse() {
    // Get the course name and grading scale from the form
    const courseName = document.getElementById("courseName").value.trim();
    const gradingScale = document.getElementById("gradingScale").value.trim();

    // Check if both fields are filled in
    if (courseName && gradingScale) {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.push({ courseName, gradingScale });
        localStorage.setItem("courses", JSON.stringify(courses));

        // Notify the user that the course has been added or need to fill it 
        alert("Course added successfully!");
    } else {
        alert("Please fill in all fields for the course.");
    }
}