let back = document.querySelector(".back-to-top");
window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 700) {
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }
};