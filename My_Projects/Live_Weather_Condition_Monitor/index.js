import { weatherUpdate } from "./weatherUpdate.js";

// For the first 5 seconds of Blank Screen, call it once beforehand:

// const firstWeatherCall = await weatherUpdate(25.594, 85.1376)
// renderWeatherInfo(firstWeatherCall)

// After the first 5 seconds of display, the following interval repeats:

// setInterval(async function() {
//     const weatherData = await weatherUpdate(25.5941, 85.1376)
//     renderWeatherInfo(weatherData)
// }, 5000)


// Used the second method: created a Named Async function, and just called it immediately, and the setInterval passed, makes it repeat
async function loadWeather() {
    const weatherData = await weatherUpdate(25.5941, 85.1376)
    renderWeatherInfo(weatherData)
}
loadWeather()
setInterval(loadWeather, 5000)

function renderWeatherInfo(weatherData) {
    const cityName = document.getElementById("city")
    const currentTemperature = document.getElementById("temp")
    const currentTempIcon = document.getElementById("temp-icon")
    const currentCloudCoverage = document.getElementById("cloudCoverage")
    const currentPrecipitation = document.getElementById("precipitation")

    const { currentTemp, cloudCoverage, precipitation, city } = weatherData

    cityName.textContent = `City: ${city}`
    currentTemperature.textContent = `Temp: ${currentTemp}`
    currentCloudCoverage.textContent = `Cloud Coverage: ${cloudCoverage}%`
    currentPrecipitation.textContent = `Precipitation: ${precipitation}`

    const img = document.createElement("img")
    img.src = precipitation > 0 ? "icons8-rainy-weather-48.png" : cloudCoverage >= 70 ? "icons8-cloudy-48.png" : cloudCoverage >= 20 && cloudCoverage < 70 ? "icons8-sun-behind-large-cloud-48.png" : "icons8-sunny-weather-48.png"
    img.alt = "Weather Icon Representation"

    currentTempIcon.textContent = ''
    currentTempIcon.appendChild(img)

}