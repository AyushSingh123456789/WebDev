export function getCryptoData() {
    return {
        "name": "Tesla",
        "ticker": "T",
        "currentPrice": ((Math.random() * 10000000) + 10000).toFixed(2)
    }
}