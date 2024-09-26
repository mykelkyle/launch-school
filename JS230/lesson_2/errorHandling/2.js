function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .catch((e) => {
    console.log(`Error message: ${e.error}`);
  })
  .finally(() => {
    console.log("Fetching complete");
  });
