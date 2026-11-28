import { placeholderPropertyObj } from "./properties/placeholderPropertyObject.js"
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"

const container = document.querySelectorAll('#resultant-container')

// const { propertyLocation, priceGBP, roomsM2, comment, image } = placeholderPropertyObj() // Note: placeholderPropertyObj is not a function, so this fn call won't work.


// console.log(placeholderPropertyObj.propertyLocation)
// console.log(placeholderPropertyObj.priceGBP)
// console.log(placeholderPropertyObj.roomsM2)
// console.log(placeholderPropertyObj.comment)
// console.log(placeholderPropertyObj.image)

// const { propertyLocation, priceGBP, roomsM2, comment, image } = propertyForSaleArr (Not seeing the use right now)

// for (let i = 0; i < propertyForSaleArr.length; i++) {
//     console.log(propertyForSaleArr[i].comment)
//     console.log(propertyForSaleArr[i].propertyLocation)
// }

const img = [
    {
        src: './images/cottage.jpg',
        alt: 'kensington London House Image'
    },

    {
        src: './images/desres.jpg',
        alt: 'Wirral Liverpool House Image'
    },

    {
        src: './images/hut.jpg',
        alt: 'Beach Brighton House Image'
    },

    {
        src: './images/scot.jpg',
        alt: 'HighLands Scotland House Image'
    }
]

// const img0 = document.createElement("img")
// img1.src = './images/cottage.jpg'
// img1.alt = 'kensington London House Image'

// const img1 = document.createElement('img')
// img2.src = '.images/desres.jpg'
// img2.alt = 'Wirral Liverpool House Image'

// const img2 = document.createElement('img')
// img3.src = '.images/hut.jpg'
// img3.alt = 'Beach Brighton House Image'

// const img3 = document.createElement('img')
// img4.src = './images/scot.jpg'
// img4.alt = 'HighLands Scotland House Image'

const totalSize = [
    {
        size: '62m2'
    },

    {
        size: '116m2'
    },

    {
        size: '5m2'
    },

    {
        size: '8m2'
    }
]


function getPropertyHtml() {
    for (let i = 0; i < propertyForSaleArr.length; i++) {
        container[i].innerHTML = `
            <section class="card">
                <img src = "${img[i].src}">
                <div class="card-right">
                    <h2> ${propertyForSaleArr[i].propertyLocation} </h2>
                    <h3> $${propertyForSaleArr[i].priceGBP} </h3>
                    <p> ${propertyForSaleArr[i].comment} </p>
                    <h3> ${totalSize[i].size} </h3>
                </div>
            </section>
        `
        container[i].style.border = "2px solid blue"
        container[i].style.display = "flex"
        container[i].style.flexDirection = "column"
        container[i].style.justifyContent = "center"
        container[i].style.alignItems = "center"
        container[i].style.textAlign = "center"
        container[i].style.gap = "5px"

        if (i == 0) container[i].style.marginTop = "5px"
        else if (i == 3) container[i].style.marginBottom = "5px"

    }
}



// document.getElementById('resultant-container').innerHTML = getPropertyHtml()

getPropertyHtml()