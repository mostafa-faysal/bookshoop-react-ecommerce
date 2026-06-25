const seePassBtn = document.querySelector(".see-pass");
const passwordInput = document.querySelector(".password");
const confirmPass = document.querySelector(".confirm-password");
const seeConfirmBtn = document.querySelector(".see-confirm-pass");
if (seePassBtn && passwordInput) {
  seePassBtn.addEventListener("click", () => {
    passwordInput.type =  passwordInput.type === "password" ? "text" : "password";
  });
}
if (seeConfirmBtn && confirmPass) {
  seeConfirmBtn.addEventListener("click", () => {
    confirmPass.type = confirmPass.type === "password" ? "text" : "password";
  });
}
