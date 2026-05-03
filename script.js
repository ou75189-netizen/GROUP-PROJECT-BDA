<<<<<<< HEAD
// ===========================
// [M4] TEACHER MODULE
// ===========================

const students = [
  { id: 1, name: "Awa Jallow" },
  { id: 2, name: "Lamin Touray" },
  { id: 3, name: "Mariama Bah" }
];

// -------------------
// ATTENDANCE
// -------------------
function initAttendance() {
  const list = document.getElementById("studentList");

  if (!list) return;

  list.innerHTML = "";

  students.forEach(s => {
    list.innerHTML += `
      <div class="student-item">
        <span>${s.name}</span>
        <select id="att-${s.id}">
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      </div>
    `;
  });
}

// -------------------
// GRADES
// -------------------
function saveGrade() {
  const subject = document.getElementById("subject").value;
  const student = document.getElementById("student").value;
  const score = document.getElementById("score").value;

  if (!subject || !student || !score) {
    alert("Fill all fields");
    return;
  }

  let grades = JSON.parse(localStorage.getItem("grades")) || [];

  grades.push({ subject, student, score });

  localStorage.setItem("grades", JSON.stringify(grades));

  alert("Grade saved!");
}

// -------------------
// ROUTER
// -------------------
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "teacher-attendance") initAttendance();
=======
// ===========================
// [M4] TEACHER MODULE
// ===========================

const students = [
  { id: 1, name: "Awa Jallow" },
  { id: 2, name: "Lamin Touray" },
  { id: 3, name: "Mariama Bah" }
];

// -------------------
// ATTENDANCE
// -------------------
function initAttendance() {
  const list = document.getElementById("studentList");

  if (!list) return;

  list.innerHTML = "";

  students.forEach(s => {
    list.innerHTML += `
      <div class="student-item">
        <span>${s.name}</span>
        <select id="att-${s.id}">
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>
      </div>
    `;
  });
}

// -------------------
// GRADES
// -------------------
function saveGrade() {
  const subject = document.getElementById("subject").value;
  const student = document.getElementById("student").value;
  const score = document.getElementById("score").value;

  if (!subject || !student || !score) {
    alert("Fill all fields");
    return;
  }

  let grades = JSON.parse(localStorage.getItem("grades")) || [];

  grades.push({ subject, student, score });

  localStorage.setItem("grades", JSON.stringify(grades));

  alert("Grade saved!");
}

// -------------------
// ROUTER
// -------------------
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "teacher-attendance") initAttendance();
>>>>>>> 0ef47a5d5b6ee55c84ef04476ac639ebd7c5149b
});