class Weather {
    constructor(city, country) {
        this.api_key = '4df815da8fd24e98b0875bb7b1d4aa57'
        this.city = city
        this.country = country
    }


    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.country}&key=${this.api_key}`)

        const data = await response.json()

        console.log(data.data[0])
        if (data.data[0] === null) {
            this.city = 'lagos'
            this.country = 'Ng'

            const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city},${this.country}&key=${this.api_key}`)

            const data = await response.json()

            return data.data[0]
        } else {
            return data.data[0]
        }



    }

    changeLocation(city, country) {
        this.city = city
        this.country = country
    }
}