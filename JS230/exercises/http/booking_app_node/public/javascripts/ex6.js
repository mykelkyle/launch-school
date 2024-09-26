document.addEventListener("DOMContentLoaded", () => {
  const DOMAIN = "http://localhost:3000";
  const ul = document.getElementById("datesUl");

  function fetchJsonData(path) {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open("GET", DOMAIN + path);
      request.responseType = "json";
      request.addEventListener("load", () => {
        if (request.status >= 200 && request.status < 400) {
          res(request.response);
        } else {
          rej(request.response);
        }
      });

      request.send();
    });
  }

  function addDisplayEvent(element) {
    element.addEventListener("click", (e) => {
      if (e.target.tagName === "LI" && e.target.parentElement === ul) {
        e.target.firstElementChild.classList.toggle("hidden");
      }
    });
  }

  function appendBookingDetails(booking, schedule, staff) {
    let li = document.createElement("li");
    li.textContent = booking;
    ul.appendChild(li);
    let innerUl = document.createElement("ul");
    let innerLi = document.createElement("li");
    innerLi.textContent = `${staff.name} | ${schedule.student_email} | ${schedule.time}`;
    innerUl.appendChild(innerLi);
    li.appendChild(innerUl);
    innerUl.classList.add("hidden");
  }

  function renderBookings(bookings, schedules, staff) {
    addDisplayEvent(ul);

    bookings.forEach((booking) => {
      let currSchedule = schedules.find(
        (schedule) => schedule.date === booking
      );
      let currStaffName = staff.find(
        (person) => person.id === currSchedule.staff_id
      );

      appendBookingDetails(booking, currSchedule, currStaffName);
    });
  }

  async function init() {
    try {
      let bookings = await fetchJsonData("/api/bookings");
      let schedules = await fetchJsonData("/api/schedules");
      let staff = await fetchJsonData("/api/staff_members");
      renderBookings(bookings, schedules, staff);
    } catch (error) {
      alert(error);
    }
  }

  init();
});
