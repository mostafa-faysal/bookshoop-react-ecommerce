document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
const emailInp = document.querySelector(".email");
    const passInp = document.querySelector(".password");
    console.log('Login attempt:', emailInp.value, passInp.value);
    console.log(emailInp)
    console.log(passInp)
    let userAccount = {
        email: emailInp.value,
        password: passInp.value,
    };
    fetch("https://api.codingarabic.online/api/auth/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userAccount),
    })
        .then((res) => res.json())
.then((data) => {
    console.log('API Response:', data);
    if (data.data && data.data.token) {
      Cookies.set("token", data.data.token, { expires: 1 });
      console.log('Token set:', data.data.token);
      setTimeout(() => window.location.assign("index.html"), 500);
    } else {
      console.error('No token in API response:', data);
      alert('Login failed - no token received');
    }
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
 })
});