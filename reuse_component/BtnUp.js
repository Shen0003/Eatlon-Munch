// When the user clicks on the button, scroll to the top of the document
let topBtn = document.getElementById("topBtn");
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
topBtn.onclick = topFunction;
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
window.onscroll = scrollFunction;