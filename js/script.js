document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Current Page: ", document.URL)
    currentPage = getCurrentPage(document.URL)
    console.log(currentPage.classList)
    currentPage.classList.add("active")

    carouselLeft = document.getElementById("carousel-left")
    carouselRight = document.getElementById("carousel-right")

    carouselLeft.addEventListener("click", (event) => { 
        const parent = event.target.parentNode
        if (parent.scrollLeft > 0) {
            parent.scrollLeft -= 350
            console.log(parent.scrollLeft)
        }
    })
    
    carouselRight.addEventListener("click", (event) => {
        const parent = event.target.parentNode
        if (parent.scrollLeft <= parent.scrollWidth) {
            parent.scrollLeft += 350
            console.log(parent.scrollLeft)
        }
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