class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.temp = document.getElementById('w-temp')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.dewpt = document.getElementById('w-dewpt')
        this.wind_dir = document.getElementById('w-wind-direction')
        this.wind = document.getElementById('w-wind')
    }


    pasteInfo(weather) {
        this.location.textContent = `${weather.city_name}, ${weather.country_code}`
        this.desc.textContent = `${weather.weather.description}`
        this.temp.textContent = `${weather.app_temp}C`
        this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`)
        this.humidity.textContent = `Humidity ${weather.rh}`
        this.dewpt.textContent = `Dewpoint: ${weather.dewpt}`
        this.wind_dir.textContent = `Wind Direction: ${weather.wind_cdir_full}`
        this.wind.textContent = `Wind Speed: ${weather.wind_spd}`
    }
}