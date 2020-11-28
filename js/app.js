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
        .catch(err => console.log(err))
}