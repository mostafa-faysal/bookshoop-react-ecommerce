let back = Document.querySelector(".back-to-top");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 700) {
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }