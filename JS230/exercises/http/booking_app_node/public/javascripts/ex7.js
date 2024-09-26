document.addEventListener("DOMContentLoaded", () => {
  const DOMAIN = "http://localhost:3000";

  function makeRequest(method, path) {
    return new Promise((res, rej) => {
      let request = new XMLHttpRequest();
      request.open(method, DOMAIN + path);
      request.addEventListener("load", () => {
        if (request.status >= 200 && request.status < 400) {
          res(request.response);
        } else {
          rej(`Error ${request.status}: ${request.response}`);
        }
      });
      request.send();
    });
  }

  // Cancel a booking

  async function cancelBooking(bookingId) {
    let response = await makeRequest("PUT", `/api/bookings/${bookingId}`);
    alert(response);
  }

  async function cancelSchedule(scheduleId) {
    let response = await makeRequest("DELETE", `/api/schedules/${scheduleId}`);
    alert(response);
  }

  let ps = document.getElementsByClassName("test");
  let form = document.querySelector("form");
});
