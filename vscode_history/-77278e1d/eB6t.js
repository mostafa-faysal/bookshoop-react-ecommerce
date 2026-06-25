document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInp = document.querySelector(".email");
    const passInp = document.querySelector(".password");
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
               Cookies.set("token", data.data.token, { expires: 1 });
               window.location.assign("index.html");     
 })       .catch((error) => {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
 })
});
document.addEventListener('click', function(e) {
    if (e.target.closest('.see-pass')) {
        const seePass = e.target.closest('.see-pass');
        const input = seePass.previousElementSibling;
        if (input && input.type === 'password') {
            input.type = input.type === 'password' ? 'text' : 'password';
        }
    }
});
