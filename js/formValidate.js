const name = document.getElementById('name').addEventListener('blur', validateName)

function validateName(e) {
    let re = /^[A-Z\ ]{1,20}$/i

    let str = document.getElementById('name')
    validate(re, str)

}


const email = document.getElementById('email').addEventListener('blur', validateEmail)

function validateEmail(e) {
    let re = /^([A-Za-z0-9\_\.]+)@([A-Za-z0-9]+)\.[a-z]{2,5}$/i
    let str = document.getElementById('email')
    validate(re, str)
}

function validate(re, str) {
    if (re.test(str.value)) {
        str.classList.add('is-valid')
        str.classList.remove('is-invalid')
    } else {
        str.classList.add('is-invalid')
    }
}

const message = document.getElementById('message').addEventListener('blur', validateMsg)

function validateMsg(e) {
    let re = /[A-Za-z0-9\_\.\/]{10,300}/i

    str = document.getElementById('message')

    validate(re, str)
}