let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let exams = [[], [], [], []];

  Object.values(scores).forEach((value) => {
    value.scores.exams.forEach((score, index) => exams[index].push(score));
    let examAvg = value.scores.exams.reduce((acc, score) => (acc += score)) / 4;
    let exerciseAvg = value.scores.exercises.reduce(
      (acc, score) => (acc += score)
    );

    studentGrades.push(calculateGrade(examAvg, exerciseAvg));
  });

  exams = exams.map((exam) => {
    return {
      average: calculateAvg(exam),
      minimum: calculateMin(exam),
      maximum: 100,
    };
  });

  return {
    studentGrades: studentGrades,
    exams: exams,
  };
}

function calculateAvg(examScores) {
  return examScores.reduce((acc, score) => (acc += score)) / examScores.length;
}

function calculateMin(examScores) {
  return examScores.reduce((acc, score) => (acc > score ? score : acc));
}

function calculateGrade(examAvg, exerciseAvg) {
  let finalGrade = Math.round(examAvg * 0.65 + exerciseAvg * 0.35);

  if (finalGrade < 60) {
    return `${finalGrade} (F)`;
  } else if (finalGrade < 69) {
    return `${finalGrade} (E)`;
  } else if (finalGrade < 77) {
    return `${finalGrade} (D)`;
  } else if (finalGrade < 85) {
    return `${finalGrade} (C)`;
  } else if (finalGrade < 93) {
    return `${finalGrade} (B)`;
  } else {
    return `${finalGrade} (A)`;
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
