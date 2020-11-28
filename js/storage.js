class Storage {
    constructor() {
        this.city
        this.country
        this.city_default = 'Lagos'
        this.country_default = 'NG'
    }

    getLocations() {
        if (localStorage.getItem('city') === null) {
            this.city = this.city_default
        } else {
            this.city = localStorage.getItem('city')
        }

        if (localStorage.getItem('country') === null) {
            this.country = this.country_default
        } else {
            this.country = localStorage.getItem('country')
        }

        return {
            'city': this.city,
            'country': this.country
        }
    }

    setLocations(city, country) {
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
    }
}