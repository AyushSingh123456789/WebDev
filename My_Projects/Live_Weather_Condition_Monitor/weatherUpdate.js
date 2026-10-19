// let temp = null
// let cloudCover = null
// let precipitation = null

export async function weatherUpdate(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,cloud_cover,precipitation`)
        const data = await response.json()

        const temp = data.current.temperature_2m
        const cloudCover = data.current.cloud_cover
        const precipitation = data.current.precipitation

        return {
            "currentTemp": temp,
            "cloudCoverage": cloudCover,
            "precipitation": precipitation,
            "city": "Patna"
        }

    }
    catch (error) {
        console.log("Failed to fetch the temperature.", error)
    }
}