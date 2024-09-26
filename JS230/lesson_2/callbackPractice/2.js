function downloadFile(cb) {
  console.log("Downloading file...");

  setTimeout(() => {
    cb("Download complete!");
  }, 1500);
}

downloadFile((msg) => {
  console.log(msg);
});
