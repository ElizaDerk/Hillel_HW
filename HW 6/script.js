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

let all = document.querySelectorAll('*')
const yourInput = document.querySelector('.input')
const btn = document.querySelector('.clear');
const previous = document.querySelector('#previous-btn');
const next = document.querySelector('#next-btn')
const parent = document.querySelector('#parent-btn')
const firstChild = document.querySelector('#first-child-btn')
const lastChild = document.querySelector('#last-child-btn')

function disableBtn() {
    previous.setAttribute("disabled", "")
    next.setAttribute("disabled", "");
    parent.setAttribute("disabled", "");
    firstChild.setAttribute("disabled", "");
    lastChild.setAttribute("disabled", "");
}

disableBtn();


btn.addEventListener('click', function handleClick(event) {
    const element = document.querySelector('input');
    element.value = '';
    removeBorder();
});

function removeBorder() {
    for (let element of all) {
        element.classList.remove('active');
    }
}

document.getElementById('input').addEventListener('input', function() {
    let selector = this.value;
    selectorChecker(selector)
    console.log(selector)

});

function selectorChecker(selector) {
    let elementsList = all;
    for (let element of elementsList) {
        if (element.tagName === selector.toUpperCase()) {
            element.classList.add('active')
        }
    }
    checkBtn()
}


function checkBtn(){
    if(selector.previousSibling){
        previous.disabled = false;
    }
    else if(selector.nextSibling){
        next.disabled = false;
    }
    else if(selector.parentElement){
        parent.disabled = false;
    }
    else if(selector.firstElementChild){
        firstChild.disabled = false;
    }
    else if(selector.lastElementChild){
        lastChild.disabled = false;
    }
}


    // let allP = document.getElementsByTagName(`${selector}`)
    // console.log(allP)
    // for (let el of allP){
    //     el.style.border = "2px solid green"
    // }


    // if (selector.parentNode) {
    //     parent.classList.remove('disabled');
    //     parent.classList.add('active')
    // }
    // console.log("el:")











