function summarizeStudents() {
  return students.map((student) => {
    let grade;
    switch (true) {
      case student.score >= 70 && student.score <= 100:
        grade = "A";
        break;
      case student.score >= 60 && student.score <= 69:
        grade = "B";
        break;
      case student.score >= 50 && student.score <= 59:
        grade = "C";
        break;
      case student.score >= 40 && student.score <= 49:
        grade = "D";
        break;

      default:
        grade = "F";
    }
    return `${student.name} scored ${student.score} -Grade:${grade}`;
  });
}
const students = [
  { name: "Amara", score: 88 },
  { name: "Yayi", score: 55 },
  { name: "Nasir", score: 34 },
];
console.log(summarizeStudents(students));
