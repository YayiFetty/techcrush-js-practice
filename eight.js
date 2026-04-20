const gradeScore = (score) => {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else {
    return "F";
  }
};
console.log(gradeScore(82));
console.log(gradeScore(65));

console.log(gradeScore(55));

console.log(gradeScore(45));

console.log(gradeScore(30));
