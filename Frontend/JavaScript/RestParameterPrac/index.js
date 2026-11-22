const sqBoxes = document.querySelectorAll(".box")

function getLabelsHtml(text, sender, ...name) {
    for (let i = 0; i < name.length; i++) {
        sqBoxes[i].innerHTML = `
            <div class="label-card">
                <p> Dear ${name[i].name} </p>
                <p> ${text} </p>
                <p>Best Wishes</p>
                <p>${sender}</p>
            </div>
        `
    }
}


const text = "Thank you for all your hardwork throughout the year! 🙏🎁"
const sender = "Tom"

getLabelsHtml(
    text,
    sender,
    { name: "Sally" },
    { name: "Mike" },
    { name: "Rob" },
    { name: "Harriet" }
)