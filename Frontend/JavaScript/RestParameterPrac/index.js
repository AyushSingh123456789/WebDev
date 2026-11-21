const grid = document.querySelector(".grid");

function addBoxes(...classes) {
    classes.forEach((className) => {
        const box = document.createElement("div");
        box.classList.add(className);
        grid.append(box);
    });
}

addBoxes("box", "box", "box", "box");
