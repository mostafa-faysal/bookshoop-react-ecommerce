const seePassBtn = document.querySelector("#see-pass, .see-pass");
const passwordInput = document.querySelector(".password");

if (seePassBtn && passwordInput) {
    seePassBtn.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
}