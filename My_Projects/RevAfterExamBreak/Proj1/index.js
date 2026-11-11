const addBtn = document.getElementById("add-btn-1")
const deleteAllBtn = document.getElementById("delete-all")
const viewAllBtn = document.getElementById("view-all")
const viewHighPBtn = document.getElementById("view-highP")
const viewLowPBtn = document.getElementById("view-lowP")
const title1 = document.getElementById("title-1")
const priority1 = document.getElementById("priority-1")
const dueDate1 = document.getElementById("due-date-1")
const db = document.querySelector(".local-storage-view")
const details = []

addBtn.addEventListener("click", function () {
    details.push('Title: ' + title1.value)
    details.push('Priority: ' + priority1.value)
    details.push('Due Date: ' + dueDate1.value)
    localStorage.setItem("details", JSON.stringify(details))
    window.alert("Data Saved Successfully!")
})

viewAllBtn.addEventListener("click", function () {
    const storedDetails = localStorage.getItem("details")
    const parsedDetails = JSON.parse(storedDetails)
    db.textContent = parsedDetails
})

viewHighPBtn.addEventListener("click", function () {

})

viewLowPBtn.addEventListener("click", function () {

})

deleteAllBtn.addEventListener("click", function () {
    db.textContent = ""
    localStorage.clear()
})