const DOMAIN = "http://localhost:3000";

function addSchedule(num = 1, staff) {
  let outerDiv = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = `Schedule ${num}`;
  let innerDiv = document.createElement("div");

  let form = document.createElement("form");
  form.setAttribute("action", DOMAIN + "/api/schedules");

  let selectLabel = document.createElement("label");
  selectLabel.textContent = "Staff Name:";

  let select = document.createElement("select");
  select.setAttribute("name", "staff");
  staff.forEach(({ id, name }) => {
    let option = document.createElement("option");
    option.setAttribute("value", id);
    option.textContent = name;
    select.appendChild(option);
  });

  let dateLabel = document.createElement("label");
  dateLabel.textContent = "Date:";
  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");

  let timeLabel = document.createElement("label");
  timeLabel.textContent = "Time:";
  let timeInput = document.createElement("input");
  timeInput.setAttribute("type", "time");
  timeInput.setAttribute("name", "time");

  form.appendChild(selectLabel);
  form.appendChild(select);
  form.appendChild(document.createElement("br"));
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(timeLabel);
  form.appendChild(timeInput);

  innerDiv.appendChild(form);
  outerDiv.appendChild(h1);
  outerDiv.appendChild(innerDiv);

  document.querySelector("div").appendChild(outerDiv);
}

function collectFormData() {
  const data = {
    schedules: [],
  };

  let forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    let formData = {
      staff_id: form.staff.value,
      date: form.date.value,
      time: form.time.value,
    };
    data.schedules.push(formData);
  });

  return data;
}

async function getStaffData() {
  const staff = [];
  let response = await fetch(DOMAIN + "/api/staff_members");
  let data = await response.json();
  data.forEach((obj) => staff.push({ id: obj.id, name: obj.name }));
  return staff;
}

document.addEventListener("DOMContentLoaded", async () => {
  let numOfSchedules = 1;
  let staff = await getStaffData();
  let addBtn = document.getElementById("add");
  let submitBtn = document.getElementById("submit");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addSchedule(numOfSchedules, staff);
    numOfSchedules++;
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const data = collectFormData();

    (async () => {
      let response = await fetch(DOMAIN + "/api/schedules", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const message = await response.text();
      alert(message);
    })();
  });
});
