// document.getElementById("count-el").innerText = 5

// Working for increment adding on the button:

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked.
// change the count-el in the HTML to reflect the new count.

let countEl = document.getElementById("count-el") // pass in argument, 'document' is a data-type Object.
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}