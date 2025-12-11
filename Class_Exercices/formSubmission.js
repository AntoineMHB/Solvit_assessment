let tempData = {};

document.getElementById("coursesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  tempData = {
    courseName: document.getElementById("courseName").value,
    courseCode: document.getElementById("courseCode").value,
    courseDescription: document.getElementById("courseDescription").value,
    courseCredits: document.getElementById("courseCredits").value,
  };

  document.getElementById("courses").innerHTML = `
Course name: ${tempData.courseName} <br>
Course code: ${tempData.courseCode} <br>
Course description: ${tempData.courseDescription} <br>
Course credits: ${tempData.courseCredits}`;

  document.getElementById("saveBtn").style.display = "inline-block";
});

document.getElementById("saveBtn").addEventListener("click", function (e) {
  let courses = JSON.parse(localStorage.getItem("courses")) || [];
  courses.push(tempData);
  let stringifiedCourses = JSON.stringify(courses);
  localStorage.setItem("courses", stringifiedCourses);
});
