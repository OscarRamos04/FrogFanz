//Frog Fanatics java Script file for functions

//Hamburger Menu 
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ff-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}