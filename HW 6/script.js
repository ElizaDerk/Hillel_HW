//Burger

const menu = document.querySelector(".menu");

const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

const hamburger= document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");

    } else {
        menu.classList.add("showMenu");
    }
}

// Slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Form
const userInput = document.getElementById("input");
const clear = document.querySelector('.clear');

function remove(){
    let el = document.querySelectorAll('.active');
    el.forEach(el => el.classList.remove('active'));
    userInput.value = '';
    removeBorder();
}

function removeBorder() {
    for (let element of clear) {
        element.classList.remove("active");
    }
}

clear.addEventListener('click', remove)



