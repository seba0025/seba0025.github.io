function toggleMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("close-menu");
    const html = document.documentElement;
    
    menu.classList.toggle("active");
    hamburger.style.display = menu.classList.contains("active") ? "none" : "block";
    closeMenu.style.display = menu.classList.contains("active") ? "block" : "none";
    html.classList.toggle("no-scroll");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const closeMenu = document.getElementById("close-menu");
    const html = document.documentElement;

    menu.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    html.classList.remove("no-scroll");
}