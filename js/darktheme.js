//dark theme
document.querySelector('.dark').addEventListener('click', (e) => {
    e.preventDefault()
    const body = document.getElementById('body')

    body.classList.remove('bg-light')
    body.classList.add('bg-dark')
    body.classList.add('text-white')

    const navbar = document.getElementById('navbar')
    navbar.className = 'navbar navbar-expand-md navbar-dark bg-nav p-2'

    const logo = document.querySelector('.brand-logo')
    logo.setAttribute('src', './img/Weatherlly logo-09.png')

    const footer = document.getElementById('main-footer')
    footer.className = 'main-footer mt-5 text-center text-dark bg-light p-3'

    let link = document.querySelector('#theme')
    link.textContent = 'Light Theme'
    link.classList.add('light-theme')
})

const navbar = document.getElementById('navbar')

navbar.addEventListener('dblclick', (e) => {
    e.preventDefault()
    console.log(e.target)
    if (e.target.classList.contains('light-theme')) {
        e.target.classList.remove('dark')
        const body = document.getElementById('body')

        body.classList.remove('bg-dark')
        body.classList.add('bg-light')
        body.classList.remove('text-white')

        const navbar = document.getElementById('navbar')
        navbar.className = 'navbar navbar-expand-md navbar-light bg-custom p-2'

        const logo = document.querySelector('.brand-logo')
        logo.setAttribute('src', './img/Weatherlly logo-04.png')

        const footer = document.getElementById('main-footer')
        footer.className = 'main-footer mt-5 text-center text-dark bg-custom p-3'

        let link = document.querySelector('#theme')
        link.textContent = 'Dark Theme'
    }

})