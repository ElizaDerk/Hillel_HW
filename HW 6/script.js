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
    const activeEl = document.getElementsByClassName('active');
    for (const key in activeEl) {
        if (Object.hasOwnProperty.call(activeEl, key)){
            const el = activeEl[key]
            el.classList.remove('active')
        }
    }
}

function selectorChecker(selector) {
    removeBorder()
    for (let element of all) {
        if (element.tagName === selector.toUpperCase()) {
            element.classList.add('active')
        }
    }
    checkBtn()
}

function checkBtn(){
    let selector = document.querySelector(input.value);
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
    checkBtn()
    let selector = document.querySelector(input.value);
    if(selector.previousElementSibling === null){
        return
    }
    removeBorder()
    selector = selector.previousElementSibling;
    selector.classList.add('active')
})

next.addEventListener('click', function (){
    checkBtn()
    let selector = document.querySelector(input.value);
    if(selector.nextElementSibling === null){
        return
    }
    removeBorder()
    selector = selector.nextElementSibling;
    selector.classList.add('active')
})

parent.addEventListener('click', function (){
    checkBtn()
    let selector = document.querySelector(input.value);
        if(selector.parentElement === null){
            return
        }
        removeBorder()
        selector = selector.parentElement;
        selector.classList.add('active')

})

firstChild.addEventListener('click', function (){
    checkBtn()
    let selector = document.querySelector(input.value);
    if(selector.firstElementChild === null){
        return
    }
    removeBorder()
    selector = selector.firstElementChild;
    selector.classList.add('active')
})

lastChild.addEventListener('click', function (){
    checkBtn()
    let selector = document.querySelector(input.value);
    if(selector.lastElementChild === null){
        return
    }
    removeBorder()
    selector = selector.lastElementChild
    selector.classList.add('active')
})






