async function fetchUserProfile(userId) {
  try {
    let profile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    console.log("User Profile", profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    let posts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then((res) => res.json());
    console.log("User Posts", posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    let todos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    ).then((res) => res.json());
    console.log("User Todos", userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}
