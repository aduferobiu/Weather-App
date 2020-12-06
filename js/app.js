// Init storage
const storage = new Storage

const getLocInfo = storage.getLocations()

// init weather constructor
const weather = new Weather(getLocInfo.city, getLocInfo.country)

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('save').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    weather.changeLocation(city, country)

    storage.setLocations(city, country)

    getWeather()

    city.value = ''
    country.value = ''
        //close
    $('#myModal').modal('hide')
})

// init weather ui
const ui = new UI


// weather.changeLocation('ogun', 'Ng')
function getWeather() {
    weather.getWeather()
        .then(res => {
            ui.pasteInfo(res)
        })
        .catch(err => {
            const weather = document.getElementById('weather-input')
            const container = document.getElementById('weather-insert')

            const errInfo = document.createElement('div')
            errInfo.className = 'alert alert-danger remove-alert text-center'
            errInfo.appendChild(document.createTextNode('Sorry!, The Locations input are incorrect'))
            weather.insertBefore(errInfo, container)

            setTimeout(() => {
                errInfo.remove()
            }, 4000)
        })
}

function removeErr() {

}