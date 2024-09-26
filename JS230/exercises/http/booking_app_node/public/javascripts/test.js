document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const DOMAIN = "http://localhost:3000";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData(form);

      if (!formData.get("name") || !formData.get("email")) {
        alert("Invalid email/name, please try again");
        return;
      }

      let response = await fetch(DOMAIN + "/api/staff_members", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        let result = await response.json();
        alert(`Successfully created staff with id: ${result.id}`);
        form.reset();
      } else {
        alert(await response.text());
      }
    } catch (error) {
      alert(error);
    }
  });
});
