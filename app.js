

// ======================STICKY MENU======================

let stickyMenu = document.querySelector(".sticky-menu");
let scrollParam = document.documentElement.scrollHeight / 10;

window.addEventListener("scroll", scrollFunc)

function scrollFunc () {
    let scroll = window.pageYOffset
    if(scroll >= scrollParam) {
        stickyMenu.classList.add("activate-el"); 
        stickyMenu.classList.remove("deactivate-el"); 
    } else {
        stickyMenu.classList.add("deactivate-el"); 
        stickyMenu.classList.remove("activate-el");
    }
}


// ======================MOBILE MENU======================

let mobileMenu = document.querySelector(".nav-mobile-menu");
let menu = document.querySelector(".navigation");
let menuBtn = document.querySelectorAll(".navigation a");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        menu.classList.add("active-menu")
    } else {
        menu.classList.remove("active-menu")
    }
})

menuBtn.forEach(btn => 
    btn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active-menu");
        menu.classList.remove("active-menu");
    })
)