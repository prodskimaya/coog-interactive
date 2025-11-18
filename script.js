const NAVBAR_ITEMS = document.getElementsByClassName("expand")
let navbarExpanded = false;

function toggleNavbar() {
    if (!navbarExpanded) {
        for (let i = 0; i < NAVBAR_ITEMS.length; i++) {
            NAVBAR_ITEMS.item(i).style.display = "block";
        }
        navbarExpanded = true;
    }
    else {
        for (let i = 0; i < NAVBAR_ITEMS.length; i++) {
            NAVBAR_ITEMS.item(i).style.display = "none";
        }
        navbarExpanded = false;
    }
}

// Navbar breaks when window is resized outside of mobile-mode. This code fixes it.
window.onresize = () => {
    if (window.innerWidth > 800) {
        navbarExpanded = false;
        toggleNavbar();
    }
    else {
        navbarExpanded = true;
        toggleNavbar();
    }
}