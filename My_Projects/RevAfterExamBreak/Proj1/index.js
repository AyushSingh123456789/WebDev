const addBtn = document.getElementById("add-btn-1")
const deleteAllBtn = document.getElementById("delete-all")
const viewAllBtn = document.getElementById("view-all")
const viewHighPBtn = document.getElementById("view-highP")
const viewLowPBtn = document.getElementById("view-lowP")
const title1 = document.getElementById("title-1")
const priority1 = document.getElementById("priority-1")
const dueDate1 = document.getElementById("due-date-1")
const db = document.querySelector(".local-storage-view")

let details = []
let Task = {}

addBtn.addEventListener("click", function () {
    Task.title = title1.value
    Task.priority = priority1.value
    Task.dueDate = dueDate1.value
    details.push(Task)
    Task = {}
    localStorage.setItem("details", JSON.stringify(details))
    window.alert("Data Saved Successfully!")
})

viewAllBtn.addEventListener("click", function () {
    const storedDetails = localStorage.getItem("details")
    const parsedDetails = JSON.parse(storedDetails)
    // console.log(parsedDetails)
    db.textContent = ""
    for (let i = 0; i < parsedDetails.length; i++) {
        let currentTitle = parsedDetails[i].title
        let currentPriority = parsedDetails[i].priority
        let currentDueDate = parsedDetails[i].dueDate
        let divContent = document.createElement("div")
        divContent.textContent = `Title: ${currentTitle}, Priority: ${currentPriority}, DueDate: ${currentDueDate}`
        db.appendChild(divContent)
    }

})

viewHighPBtn.addEventListener("click", function () {

})

viewLowPBtn.addEventListener("click", function () {

})

deleteAllBtn.addEventListener("click", function () {
    db.textContent = ""
    localStorage.clear()
})