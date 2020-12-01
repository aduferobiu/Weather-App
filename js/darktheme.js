//dark theme
const dark = document.querySelector('.dark')

dark.addEventListener('click', (e) => {
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
    footer.className = 'main-footer mt-5 text-center text-muted bg-footer p-3'

    const sendMessage = document.getElementById('send-message')
    sendMessage.className = 'card card-body bg-footer rounded border-0 shadow p-3'

    const sendMessageTitle = document.getElementById('send-message-title')
    sendMessageTitle.className = 'font-weight-bold card-title mt-2 text-white'

    let link = document.querySelector('#theme')
    link.textContent = 'Light Theme'
    link.classList.add('light-theme')

    //for the contat form in the header
    const contactInfo = document.getElementById('contact-info'),
        contactUsHeader = document.getElementById('contact-us-header'),
        contactUsText = document.getElementById('contact-us-text'),
        phoneNumberHeader = document.getElementById('phone-number-header'),
        phoneNumberText = document.getElementById('phone-number-text'),
        mailHeader = document.getElementById('mail-header'),
        mailText = document.getElementById('mail-text'),
        followUsHeader = document.getElementById('follow-us-header');

    //for contact info background 
    contactInfo.className = 'bg-footer shadow rounded p-3'

    // for all the headers
    contactUsHeader.className = 'font-weight-bold text-white mt-3'
    phoneNumberHeader.className = 'font-weight-bold text-white mt-3'
    mailHeader.className = 'font-weight-bold text-white mt-3'
    followUsHeader.className = 'font-weight-bold text-white mt-3'

    //for the text
    contactUsText.className = 'mt-2 text-light font-montserrat'
    phoneNumberText.className = 'mt-2 text-light font-montserrat'
    mailText.className = 'mt-2 text-light font-montserrat'


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

        const sendMessage = document.getElementById('send-message')
        sendMessage.className = 'card card-body bg-custom rounded border-0 shadow p-3'

        const sendMessageTitle = document.getElementById('send-message-title')
        sendMessageTitle.className = 'font-weight-bold card-title mt-2 text-dark'

        //for the contat form in the header
        const contactInfo = document.getElementById('contact-info'),
            contactUsHeader = document.getElementById('contact-us-header'),
            contactUsText = document.getElementById('contact-us-text'),
            phoneNumberHeader = document.getElementById('phone-number-header'),
            phoneNumberText = document.getElementById('phone-number-text'),
            mailHeader = document.getElementById('mail-header'),
            mailText = document.getElementById('mail-text'),
            followUsHeader = document.getElementById('follow-us-header');

        //for contact info background 
        contactInfo.className = 'bg-custom shadow rounded p-3'

        // for all the headers
        contactUsHeader.className = 'font-weight-bold text-gray mt-3'
        phoneNumberHeader.className = 'font-weight-bold text-gray mt-3'
        mailHeader.className = 'font-weight-bold text-gray mt-3'
        followUsHeader.className = 'font-weight-bold text-gray mt-3'

        //for the text
        contactUsText.className = 'mt-2 text-dark font-montserrat'
        phoneNumberText.className = 'mt-2 text-dark font-montserrat'
        mailText.className = 'mt-2 text-dark font-montserrat'

    }

})