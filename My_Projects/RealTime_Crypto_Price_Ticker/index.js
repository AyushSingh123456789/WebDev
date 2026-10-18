import { getCryptoData } from "./cryptoData.js";

setInterval(function () {
    const cryptoData = getCryptoData()
    renderCrypto(cryptoData)
}, 1000)


let lastUpdatedPrice = null

function renderCrypto(cryptoData) {
    const cryptoName = document.getElementById("name")
    const cryptoTicker = document.getElementById("ticker")
    const cryptoTickerIcon = document.getElementById("current-price-icon")
    const cryptoCurrentPrice = document.getElementById("current-price")

    const { name, ticker, currentPrice } = cryptoData

    cryptoName.textContent = `Name: ${name}`
    cryptoTicker.textContent = `Ticker: ${ticker}`
    cryptoCurrentPrice.textContent = `Price: ${currentPrice}`

    const img = document.createElement('img')
    img.src = currentPrice > lastUpdatedPrice ? "symbol-icon-green-arrow-free-png.webp" : lastUpdatedPrice > currentPrice ? "pngtree-down-arrow-curved-red-png-image_4377025.webp" : "symbol-icon-green-arrow-free-png.webp"
    img.alt = "context icon for the current crypto progress"
    img.style.width = "80px"
    img.style.height = "30px"
    img.style.textAlign = "center"
    img.style.position = "relative"
    img.style.left = "730px"
    img.style.top = "275px"

    lastUpdatedPrice = currentPrice

    cryptoTickerIcon.textContent = ''
    cryptoTickerIcon.appendChild(img)
}