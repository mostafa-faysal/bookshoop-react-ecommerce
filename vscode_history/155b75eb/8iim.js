let back = Document.querySelector(".back-to-top");
back.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        back.style.display = "block";
    } else {
        
        back.style.display = "none";
    }
}