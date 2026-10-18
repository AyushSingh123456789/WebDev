export function getStockData(stockData) {
    return {
        "name": "SchemaQTA",
        "sym": "QTA",
        "price": (Math.random() * 3).toFixed(2),
        "time": new Date().toLocaleTimeString()
    }
}