let lastScrollPosition = 0;
const headerStyle = document.querySelector("header").style

const scrollTo = elementToScroll => {
    elementToScroll.scrollIntoView()
}

document.querySelectorAll("header > nav > ul > li > a").forEach(element => {
    element.onclick = () => {
        scrollTo(document.getElementById(element.getAttribute("data-scroll")))
    }
})


const changeHeaderState = (state) => {
    setTimeout(() => {
        headerStyle.height = state
        console.log("hola")
    }, 50);
}
const directionScroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
        changeHeaderState("0px")
    } else if (currentScrollPosition < lastScrollPosition) {
        changeHeaderState("100px")
    }
    lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", directionScroll);