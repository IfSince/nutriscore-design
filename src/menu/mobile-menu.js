const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]')

mobileMenuToggle.addEventListener('click', () => {
    const parent = mobileMenuToggle.parentElement
    parent.classList.toggle('selected')
})