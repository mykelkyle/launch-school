document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("select");
  const form = document.querySelector("form");
  const DOMAIN = "http://localhost:3000";
  let students;
  let newStudentFormContainer = document.getElementById(
    "new-student-form-container"
  );

  function populateSchedules(staffs) {
    let request = new XMLHttpRequest();
    request.open("GET", DOMAIN + "/api/schedules");
    request.responseType = "json";

    request.addEventListener("load", () => {
      let data = request.response;
      data.forEach((schedule) => {
        addOption(staffs, schedule);
      });
    });
    request.send();
  }

  function addOption(staffs, schedule) {
    const option = document.createElement("option");
    let staff = staffs.find((staff) => staff.id === schedule.staff_id);
    option.textContent = `${staff.name} | ${schedule.date} | ${schedule.time}`;
    option.value = schedule.id;
    select.appendChild(option);
  }

  function populateStudents() {
    let request = new XMLHttpRequest();
    request.open("GET", DOMAIN + "/api/students");
    request.responseType = "json";
    request.addEventListener("load", () => {
      students = request.response;
    });
    request.send();
  }

  function populateStaff() {
    let request = new XMLHttpRequest();
    request.open("GET", DOMAIN + "/api/staff_members");
    request.responseType = "json";
    request.addEventListener("load", () => {
      let staffs = request.response;
      populateSchedules(staffs);
    });
    request.send();
  }

  function postScheduleData() {
    populateStudents();
    let request = new XMLHttpRequest();
    request.open("POST", DOMAIN + "/api/bookings");
    request.setRequestHeader("Content-type", "application/json");
    let email = form.email.value;
    let scheduleId = select.value;
    let data = JSON.stringify({ student_email: email, id: scheduleId });

    request.addEventListener("load", () => {
      if (request.status === 204) {
        alert("Booking successful");
        newStudentFormContainer.remove();
        form.reset();
      } else {
        alert(request.response);
        if (request.responseText.includes("booking_sequence")) {
          document.body.appendChild(newStudentFormContainer);
          let bookingSequence = Number(request.response.split(":")[1]);
          let newStudentForm = newStudentFormContainer.querySelector("form");
          newStudentForm.querySelectorAll("input")[2].value = bookingSequence;
        }
      }
    });
    request.send(data);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    postScheduleData();
  });

  (function removeNewStudentForm() {
    let newStudentForm = newStudentFormContainer.querySelector("form");

    newStudentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = {
        email: newStudentForm.email.value,
        name: newStudentForm.name.value,
        booking_sequence: newStudentForm.querySelectorAll("input")[2].value,
      };

      let request = new XMLHttpRequest();
      request.open("POST", DOMAIN + "/api/students");
      request.setRequestHeader("Content-type", "application/json");

      request.addEventListener("load", () => {
        alert(request.response);
        postScheduleData();
      });

      request.send(JSON.stringify(data));
    });

    newStudentFormContainer.remove();
  })();

  populateStaff();
  populateStudents();
});
