const school = {
  students: [],
  addStudent(name, year) {
    if (["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(student, courseName, grade) {
    const course = student
      .listCourses()
      .filter(({ name }) => name === courseName)[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(({ grade, name }) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`);
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({ name }) => name === courseName)[0];
    }

    const courseStudents = this.students
      .map((student) => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      })
      .filter(({ grade }) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average =
        courseStudents.reduce((total, { name, grade }) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

      console.log("---");
      console.log(`Course Average: ${String(average)}`);
    }
  },
};
// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

console.log(paul);
// {
//   name: 'paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
