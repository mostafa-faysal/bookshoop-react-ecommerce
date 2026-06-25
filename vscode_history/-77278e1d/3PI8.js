document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInp = document.querySelector(".email");
    const passInp = document.querySelector(".password");
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
            if (data.token) {
                Cookies.set("token", data.token, { expires: 7 });
                window.location.href = "index.html";
            } else {
                alert("Login failed: " + (data.message || "Unknown error"));
            }       
 })       .catch((error) => {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
 })
