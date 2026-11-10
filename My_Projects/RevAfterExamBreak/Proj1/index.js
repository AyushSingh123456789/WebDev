const addBtn = document.getElementById("add-btn-1")
const deleteAllBtn = document.getElementById("delete-all")
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
    const storedDetails = localStorage.getItem("details")
    const parsedDetails = JSON.parse(storedDetails)
    db.textContent = parsedDetails
})

deleteAllBtn.addEventListener("click", function () {
    db.textContent = ""
    localStorage.clear()
})