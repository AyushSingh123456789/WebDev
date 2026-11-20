import { githubProf } from "./github.js"
import { linkedinProf } from "./linkedin.js"
import { xProf } from "./x.js"

const value1 = githubProf()
const value2 = linkedinProf()
const value3 = xProf()
// console.log(value1, value2, value3)

const newDiv = document.createElement('div')

newDiv.className = 'image-links'
newDiv.style.textAlign = "center"
newDiv.style.display = "flex"
newDiv.style.justifyContent = "center"
newDiv.style.alignItems = "center"
newDiv.style.gap = "30px"
newDiv.style.marginTop = "25px"


// newDiv.innerHTML = `<a href="${value1}">
// <img src="icons8-github-50.png" alt="My Github Profile">
// </a>`

// newDiv.innerHTML = `<a href="${value2}">
// <img src="icons8-linkedin-48.png" alt="My Linkedin Profile">
// </a>`

// newDiv.innerHTML = `<a href="${value3}">
// <img src="icons8-twitter-50.png" alt="My X Profile">
// </a>`

const galleryData = [
    { href: value1, src: "icons8-github-50.png", alt: "My Github Profile" },
    { href: value2, src: "icons8-linkedin-48.png", alt: "My Linkedin Profile" },
    { href: value3, src: "icons8-twitter-50.png", alt: "My X Profile" }
]

galleryData.forEach(item => {
    const link = document.createElement('a')
    link.href = item.href
    link.target = '_blank'

    const img = document.createElement('img')
    img.src = item.src
    img.alt = item.alt

    link.appendChild(img)
    newDiv.appendChild(link)
})

document.body.appendChild(newDiv)

// const container = document.getElementById("container-4")
// container.appendChild(newDiv)