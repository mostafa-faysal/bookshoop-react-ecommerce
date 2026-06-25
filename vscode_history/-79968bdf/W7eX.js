document.querySelectorAll(".toggle-password").forEach(function (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        var targetId = this.getAttribute("data-target");
        var input = document.getElementById(targetId);

        if (!input) return;

        var isPassword = input.getAttribute("type") === "password";
        input.setAttribute("type", isPassword ? "text" : "password");
        this.textContent = isPassword ? "Hide" : "Show";
    });
});

var signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        var password = document.getElementById("signupPassword");
        var confirm = document.getElementById("confirmPassword");

        if (password && confirm && password.value !== confirm.value) {
            event.preventDefault();
            confirm.setCustomValidity("Passwords do not match.");
            confirm.reportValidity();
            return;
        }

        if (confirm) {
            confirm.setCustomValidity("");
        }
    });
}
const token = Cookies.get("token");
if (token) {
  window.location.href = "index.html";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInp = document.querySelector(".name-input");
  const emailInp = document.querySelector(".email");
  const passInp = document.querySelector(".password");
  const conPassInp = document.querySelector(".confirm-password");

  let userAccount = {
    name: nameInp.value,
    email: emailInp.value,
    password: passInp.value,
    password_confirmation: conPassInp.value,
  };

  fetch("https://api.codingarabic.online/api/auth/register", {
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
    })
    .catch((x) => console.log(x));
});
const seePassBtn = document.querySelector("#see-pass, .see-pass");
const passwordInput = document.querySelector(".password");
if (seePassBtn && passwordInput) {
  seePassBtn.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  });
}

