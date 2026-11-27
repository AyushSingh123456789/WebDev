import { placeholderPropertyObj } from "./properties/placeholderPropertyObject.js"
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"

// const { propertyLocation, priceGBP, roomsM2, comment, image } = placeholderPropertyObj()

console.log(placeholderPropertyObj.propertyLocation)
console.log(placeholderPropertyObj.priceGBP)
console.log(placeholderPropertyObj.roomsM2)
console.log(placeholderPropertyObj.comment)
console.log(placeholderPropertyObj.image)


function getPropertyHtml() {

}



document.getElementById('resultant-container').innerHTML = getPropertyHtml()