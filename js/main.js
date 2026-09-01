let drawArea = document.querySelector("#draw-area");
let buttons = document.querySelectorAll(".choice-btn");
let sizeDisplay = document.querySelector(".size-display");
let sizeBar = document.querySelector(".size-bar");

sizeBar.addEventListener("input", function () {
    let value = sizeBar.value;
    let currentSize = value * value;

    let divsToRemove = drawArea.children.length;
    while (divsToRemove > 0) {
        drawArea.removeChild(drawArea.children[0]);
        divsToRemove -= 1;
    }

    for (let i = 1; i <= currentSize; i++){
        let divForGrid = document.createElement("div");
        drawArea.appendChild(divForGrid);
    }
})