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
});