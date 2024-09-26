async function asyncDownloadFile() {
  console.log("Downloading file...");
  const message = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });

  console.log(message);
}

asyncDownloadFile();
