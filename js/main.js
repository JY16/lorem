function showMenu() {
    let menuToggle = document.querySelector(".menu-toggle");
    let nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "flex";
        }
    })
}

showMenu();