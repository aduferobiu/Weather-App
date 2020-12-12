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

// FOR FUTURE PURPOSE OF EDITING THE WEATHER ICON
// const weatherCode = weather.weather.code
// console.log(weatherCode)
// switch (weatherCode) {
//     case 200:
//     case 201:
//     case 230:
//     case 231:
//     case 232:
//     case 233:
//         // this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`)
//         this.icon.setAttribute('src', `./img/310.gif`)
//         break;
//     case 300:
//     case 301:
//     case 302:
//         this.icon.setAttribute('src', `./img/308.gif`)
//         break;
//     case 500:
//     case 501:
//     case 502:
//     case 511:
//     case 520:
//     case 522:
//         this.icon.setAttribute('src', `./img/311.gif`)
//         break;
//     case 521:
//     case 600:
//         this.icon.setAttribute('src', `./img/316.gif`)
//         break;
//     case 601:
//     case 602:
//     case 611:
//     case 612:
//     case 621:
//     case 622:
//     case 623:
//         this.icon.setAttribute('src', `./img/313.gif`)
//         break;
//     case 700:
//     case 711:
//     case 721:
//     case 731:
//     case 741:
//     case 751:
//         this.icon.setAttribute('src', `./img/317.gif`)
//         break;
//     case 800:
//         this.icon.setAttribute('src', `./img/314.gif`)
//         break;
//     case 801:
//     case 802:
//         this.icon.setAttribute('src', `./img/315.gif`)
//         break;
//     case 803:
//         this.icon.setAttribute('src', `./img/307.gif`)
//         break;
//     case 804:
//         this.icon.setAttribute('src', `./img/309.gif`)
//         break;
//     case 900:
//         this.icon.setAttribute('src', `./img/314.gif`)
//         break;
//     case 610:
//         this.icon.setAttribute('src', `./img/312.gif`)
//         break;
// }
// this.icon.style.width = "75px"
// this.icon.style.marginBottom = '0.5rem'