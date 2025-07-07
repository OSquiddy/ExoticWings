new Swiper('.item-list-container', {
    loop: true,

    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '#carousel-right',
        prevEl: '#carousel-left'
    },

    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})

document.addEventListener("DOMContentLoaded", (event) => {
    // console.log("Current Page: ", document.URL)
    // currentPage = getCurrentPage(document.URL)
    // console.log(currentPage.classList)
    // currentPage.classList.add("active")

    // carouselLeft = document.getElementById("carousel-left")
    // carouselRight = document.getElementById("carousel-right")

    // carouselLeft.addEventListener("click", (event) => { 
    //     const parent = event.target.parentNode
    //     if (parent.scrollLeft > 0) {
    //         parent.scrollLeft -= 350
    //         console.log(parent.scrollLeft)
    //     }
    // })
    
    // carouselRight.addEventListener("click", (event) => {
    //     const parent = event.target.parentNode
    //     if (parent.scrollLeft <= parent.scrollWidth) {
    //         parent.scrollLeft += 350
    //         console.log(parent.scrollLeft)
    //     }
    // })
    const navbar = document.querySelector('nav')

    closeButton = document.getElementById('close')
    closeButton.addEventListener('click', () => {
        navbar.classList.remove('open')
    })

    burgerMenuButton = document.getElementById('menu-toggle')
    burgerMenuButton.addEventListener("click", (event) => {
        navbar.classList.toggle('open')
    })

    menuOptions = document.querySelectorAll('nav > .container > ul > li')
    console.log(menuOptions)
    menuOptions.forEach((option) => {
        option.addEventListener('click', () => {
            navbar.classList.remove('open')
        })
    })


})

function getCurrentPage(URL) {
    if (URL.includes("about")) {
        return document.querySelector('a[href="/about.html"]').parentNode
    } else if (URL.includes("contact")) {
        return document.querySelector('a[href="/contact.html"]').parentNode
    } else {
        return document.querySelector('a[href="/"]').parentNode
    }
}