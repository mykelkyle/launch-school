async function loadData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

loadData();
