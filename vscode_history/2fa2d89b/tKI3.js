if (seePassBtn && passwordInput) {
    seePassBtn.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
}