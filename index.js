
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-links')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('change')
    nav.classList.toggle('active')
})