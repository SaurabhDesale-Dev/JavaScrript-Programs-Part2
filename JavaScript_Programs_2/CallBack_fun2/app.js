const getGrade = (score, callback) => {
  let grades;
  switch (true) {
    case score >= 90:
      grades = "A";
      break;
    case score >= 80:
      grades = "B";
      break;
    case score >= 70:
      grades = "C";
      break;
    case score >= 60:
      grades = "D";
      break;
    default:
      grades = "F";
  }
  return callback(grades); // judge('B')
};

const judge = (grade) => {
  switch (true) {
    case grade == "A":
      console.log(`You got an ${grade} : Amazing`);
      break;
    case grade == "B":
      console.log(`You got an ${grade} : Well done`);
      break;
    case grade == "C":
      console.log(`You got an ${grade} : Alright`);
      break;
    case grade == "D":
      console.log(`You got an ${grade} : Hmm`);
      break;
    default:
      console.log(`An ${grade} : What?!`);
  }
};

getGrade(85, judge);
