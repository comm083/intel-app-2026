// [user, setUser] = useState({})
let loading = false;
async function getUserPosts() {
  loading = true;
  try {
    const userRespons = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(userRespons);
    const user = await userRespons.json();
    console.log(user);
  } catch (err) {
    console.error("에러발생", err.message);
  } finally {
    loading = false;
  }
}

getUserPosts();
