document.addEventListener("click", myActions);
const phoneBtn = document.querySelectorAll('.phone-btn');
const numberList = document.querySelectorAll('.phones-header__list');
const arrowBtn = document.querySelector('.phones-header__arrow');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu__icon');
const nextSlide = document.querySelector('.arrow-btn-right');
const prevSlide = document.querySelector('.arrow-btn-left');
const slides = document.querySelectorAll('.bestseller-card');
const slider = document.querySelector('.cards-slider');
const container = document.querySelector('.container');
let currentSlide = 0;

function myActions (e) {
    const targetElem = e.target;
    if(targetElem.closest('[data-parent]')) {
        e.preventDefault();
        const subMenuId =  targetElem.dataset.parent ? targetElem.dataset.parent : null;  //li -- 1, 2...
        const subMenuBlock = document.querySelector(`[data-submenu='${subMenuId}']`); //sub-menu-catalog-block
        const block = document.querySelector('._sub-menu-open');

        if(subMenuBlock) {
            if(block && block.dataset.submenu != subMenuId) {
                block.classList.remove('_sub-menu-open');
                targetElem.classList.remove('_sub-menu-active');
            }
            subMenuBlock.classList.toggle('_sub-menu-open');
            targetElem.classList.toggle('_sub-menu-active');     //yellow
        } else {
            console.log("subMenu doesn't exist!");
        }

        //OR
        //const collections = document.querySelectorAll('.sub-menu-catalog__block');
        // if(subMenuBlock) {
        //     if(!(subMenuBlock.classList.contains('_sub-menu-open'))) {
        //         for (let index = 0; index < collections.length; index++) {
        //             if(collections[index].classList.contains('_sub-menu-open')) {
        //                 collections[index].classList.remove('_sub-menu-open');
        //             }
        //         }
        //     }
        //     subMenuBlock.classList.toggle('_sub-menu-open');
        //     targetElem.classList.toggle('_sub-menu-active');     //yellow
        // } else {
        //     console.log("subMenu doesn't exist!");
        // }
        // console.log(subMenuBlock);
    }
    
}

phoneBtn.forEach(btn => {
    btn.onclick = function() {
        arrowBtn.classList.toggle('phones-header__arrow--transform');
        numberList.forEach(list => {
           list.classList.toggle('phones-header__list--active');
        })
        
    }
});

menuIcon.onclick = () => {
    mobileMenu.classList.toggle('--show');
    menuIcon.classList.toggle('--closed');
}

nextSlide.addEventListener('click', () => {
    let count = 1;
    if(container.clientWidth > 1200) {
        count = 4;
    } else if (container.clientWidth > 900 && container.clientWidth <= 1200 ) {
        count = 3;
    } 
    else if (container.clientWidth > 605 && container.clientWidth <= 900) {
        count = 2;
    }
    currentSlide == slides.length - count ? currentSlide : currentSlide += 1;
    console.log(slider.clientWidth);
    let step = (slides[currentSlide].clientWidth + 30) * currentSlide;
    if(step <= (step * currentSlide)) {
        slider.style.transform = `translateX(-${step}px)`;
    } else {
        console.log(slider[currentSlide].clientWidth);
        slider.style.transform = `translateX(-${slides[currentSlide].clientWidth}px)`;
    }
});

prevSlide.addEventListener('click', () => {
    currentSlide -= 1;
    slider.style.transform = `translateX(-${(slides[currentSlide].clientWidth + 30) * currentSlide}px)`;
});
