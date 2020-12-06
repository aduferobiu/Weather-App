// document.addEventListener('DOMContentLoaded', () => {


const themeStyle = document.getElementById('theme')

const themeToggle = document.getElementById('theme-switcher')

themeToggle.addEventListener('click', (e) => {
        e.preventDefault()

        if (themeStyle.href.includes('style')) {
            themeStyle.setAttribute('href', './css/dark.css')
            const logo = document.querySelector('.brand-logo')
            logo.src = './img/Weatherlly logo-07.png'

            themeToggle.innerText = 'Light Theme'
            const navbar = document.getElementById('navbar')
            navbar.className = 'navbar navbar-expand-md navbar-dark bg-nav p-2'
        } else {
            themeStyle.setAttribute('href', './css/style.css')

            const logo = document.querySelector('.brand-logo')
            logo.src = './img/Weatherlly logo-04.png'

            themeToggle.innerText = 'Dark Theme'


            const navbar = document.getElementById('navbar')
            navbar.className = 'navbar navbar-expand-md navbar-light bg-nav p-2'
        }

        localStorage.setItem('theme', themeStyle.href)
    })
    // })

document.addEventListener('DOMContentLoaded', () => {
    const getTheme = localStorage.getItem('theme')
    if (getTheme) {
        themeStyle.href = `${getTheme}`

        if (themeStyle.href.includes('dark')) {
            const logo = document.querySelector('.brand-logo')
            logo.src = './img/Weatherlly logo-07.png'

            themeToggle.innerText = 'Light Theme'
            const navbar = document.getElementById('navbar')
            navbar.className = 'navbar navbar-expand-md navbar-dark bg-nav p-2'
        } else {

            const logo = document.querySelector('.brand-logo')
            logo.src = './img/Weatherlly logo-04.png'

            themeToggle.innerText = 'Dark Theme'


            const navbar = document.getElementById('navbar')
            navbar.className = 'navbar navbar-expand-md navbar-light bg-nav p-2'
        }
    }
})