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

const input = document.querySelector('input')
let all = document.querySelectorAll('*')
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


function removeBorder() {
    for (let element of all) {
        element.classList.remove('active');
    }
}

function selectorChecker(selector) {
    checkBtn()
    for (let element of all) {
        if (element.tagName === selector.toUpperCase()) {
            element.classList.add('active')
        }
    }

}

function checkBtn(){
    let selector = document.querySelector(input.value);
    // console.log(selector)
    // console.log(selector.previousElementSibling)
    // console.log(selector.nextElementSibling)
    // console.log(selector.parentElement)
    // console.log(selector.firstElementChild)
    // console.log(selector.lastElementChild)

    if(selector.previousElementSibling) {
        previous.disabled = false;
    }
    if(selector.nextElementSibling){
        next.disabled = false;
    }
    if(selector.parentElement){
        parent.disabled = false;
    }
    if(selector.firstElementChild){
        firstChild.disabled = false;
    }
    if(selector.lastElementChild){
        lastChild.disabled = false;
    }

}

input.addEventListener('input', function() {
    let selector = this.value;
    selectorChecker(selector)
});

btn.addEventListener('click', function handleClick(event) {
    disableBtn()
    input.value = '';
    removeBorder();
});

previous.addEventListener('click', function (){
    let selector = document.querySelector('.active');
    removeBorder();
    selector.previousElementSibling.classList.add('active')
    checkBtn(input.previousElementSibling);
})

next.addEventListener('click', function (){
    let selector = document.querySelector('.active');
    removeBorder();
    selector.nextElementSibling.classList.add('active')
    checkBtn(input.nextElementSibling);
})

parent.addEventListener('click', function (){
    let selector = document.querySelector('.active');
    removeBorder();
    selector.parentElement.classList.add('active')
    checkBtn(input.parentElement);
})

firstChild.addEventListener('click', function (){
    let selector = document.querySelector('.active');
    removeBorder();
    selector.firstElementChild.classList.add('active')
    checkBtn(input.firstElementChild);
})

lastChild.addEventListener('click', function (){
    let selector = document.querySelector('.active');
    removeBorder();
    selector.lastElementChild.classList.add('active')
    checkBtn(input.lastElementChild);
})






