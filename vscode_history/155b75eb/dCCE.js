let back = Document.querySelector(".back-to-top");
back.onscroll = function () {
    if (document.documentElement.scrollTop > 700) {
        back.style.display = "block";
    } else {
        
        back.style.display = "none";
    }
}