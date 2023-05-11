//===================================
    const accordControls = document.querySelectorAll('.menu-mobile__control');

    const accordPanels = document.querySelectorAll('.menu-mobile__content');

    accordControls.forEach((item) => {
        item.addEventListener("click", function(){
            if(item.nextElementSibling.style.maxHeight) {
                closeAllPanels();
            } else {
                openPanel(item);
            }
        })
    })

function openPanel (elem) {
    closeAllPanels();
    elem.classList.add('open');
    elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + 'px';
}

function closeAllPanels() {
    for (let i = 0; i < accordPanels.length; i++) {
        accordPanels[i].style.maxHeight = null;
        accordControls[i].classList.remove('open');
    }
}


//=====================Burger

const iconBurger = document.querySelector('.icon-menu');
const body = document.querySelector('.body')
const menuBurger = document.querySelector('.menu-mobile');
iconBurger.addEventListener("click", function(event){
    if(event.target.closest('.icon-menu')) {
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
        document.body.classList.toggle('_lock');
    }
})


//=====================


new Swiper('.slider-clients', {
    navigation: {
        nextEl: '.client-button__next',
        prevEl: '.client-button__prev',
      },
    pagination: {
        el: '.client-pagination',
        clickable: true,
      },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    breakpoints: {
        150: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        690: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1290: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    }
})



//=====================

new Swiper('.swiper-done', {
    navigation: {
        prevEl: '.prev-done',
        nextEl: '.next-done',
      },
    pagination: {
        el: '.pagination-done',
        clickable: true,
      },
      spaceBetween: 28,
      breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        
        710: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
        },
        1160: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 28,
        },
    }
})


//=====================

new Swiper('.reviews-swiper',{
    navigation: {
        prevEl: '.reviews-prev',
        nextEl: '.reviews-next',
      },
    pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
    autoHeight: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
           
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
           
        },
    }
})


//===================== Show More

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.news__items').length;
let items = 1;

showMore.addEventListener("click", function(){
    items += 1;
    const array = Array.from(document.querySelector('.news__body').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach((el) => {
        el.classList.add('visible');
    }) 

    if(visibleItems.length === productsLength) {
        showMore.style.display = 'none';
    }
})
