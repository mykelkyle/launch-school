function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log("Downloading...");

    setTimeout(() => {
      resolve("Download complete!");
    }, 2000);
  });
}
