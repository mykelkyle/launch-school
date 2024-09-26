function loadResource(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(() => "Failed to fetch");
}

loadResource("https://jsonplaceholder.typicode.com/todos/1").then(console.log);
// Success response

loadResource("badUrl.xyz").then((result) => {
  console.log(result);
});
// Failed to fetch
