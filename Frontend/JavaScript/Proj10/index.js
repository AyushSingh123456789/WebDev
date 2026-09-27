let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // Best Way(just the 2 lines below, no further fn call required):
    // ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    inputEl.value = "" // clears the input field after every new entry
    renderLeads()
})

// Better Way:
// function renderLead() {
//     let listItem = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItem
// }

// Loop Way:
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
    } // for opening google, use: http://google.com
    ulEl.innerHTML = listItems
}