async function fetchResource(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to load resource");
  } finally {
    console.log("Resource fetch attempt made");
  }
}

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
fetchResource("invalidUrl");
// Logs "Failed to load resource", then "Resource fetch attempt made"
