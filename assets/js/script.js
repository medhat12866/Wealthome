/*
 * - Mobile Menu
 */
const navbar = document.querySelector('[data-navbar]')
const navToggler = document.querySelector('[data-nav-toggler]')

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active')
  navbar.classList.toggle('active')
})
/*
 * -Bcroll Navbar
 */

const header = document.querySelector('[data-header]')
window.addEventListener('scroll', (e) => {
  header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')
})
/*
 * - Add to Favorite
 */
const toggleBtns = document.querySelectorAll('[data-toggle-btn]')

toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
  })
})
