// document.getElementById("count-el").innerText = 5

// Working for increment adding on the button:

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked.
// change the count-el in the HTML to reflect the new count.

let countEl = document.getElementById("count-el") // pass in argument, 'document' is a data-type Object.
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
    // countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr // Better alternative of .innerText as it allows proper concatenation, anc more efficient.(MDN search)
    countEl.textContent = 0
    count = 0
    // console.log(count)

}