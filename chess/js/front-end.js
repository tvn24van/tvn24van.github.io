
document.addEventListener("DOMContentLoaded", function(event){
    const footer = document.getElementsByTagName("footer")[0];
    const backToTopButton = document.createElement("a");
    backToTopButton.setAttribute("href", "#");
    backToTopButton.textContent="Zabierz mnie na górę ⇪";
    footer.appendChild(backToTopButton);
});
