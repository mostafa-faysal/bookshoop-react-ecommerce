let back = document.querySelector(".back-to-top");
window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 700) {
        back.style.display = "flex";
    }
};
back.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}