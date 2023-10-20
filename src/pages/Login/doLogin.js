const doLogin = async (username, password) => {
  try {
    // Step 1: Make a GET request to retrieve user data
    const response = await fetch("http://localhost:3004/users");
    const userData = await response.json();

    // Step 2: Check if the provided username and password match any user
    const user = userData.find((user) => user.id === username && user.password === password);

    if (user === undefined) return false;

    // Step 3: Return a boolean value indicating login success
    return !!user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default doLogin;
