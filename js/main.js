let drawArea = document.querySelector("#draw-area");
let buttons = document.querySelectorAll(".choice-btn");
let sizeDisplay = document.querySelector(".size-display");
let sizeBar = document.querySelector(".size-bar");
const clearBtn = document.querySelector("#clear");
const colorBtn = document.querySelector("#color");
const eraserBtn = document.querySelector("#eraser");

// This method listen the move of the (slider bar) --> represents the size of the draw zone
sizeBar.addEventListener("input", function () {
    let value = sizeBar.value;
    let currentSize = value * value; //it should be a square grid(rows x colums)

    //prevent the div's acumulation removing by them
    let divsToRemove = drawArea.children.length;
    while (divsToRemove > 0) {
        drawArea.removeChild(drawArea.children[0]);
        divsToRemove -= 1;
    }

    //create the draw zone
    for (let i = 1; i <= currentSize; i++) {
        let divForGrid = document.createElement("div");
        drawArea.appendChild(divForGrid);
    }

    //modify the grid to obey the Size Bar posiion
    drawArea.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${value}, 1fr)`;
})

// The clear function becomes white each grid's divs 
clearBtn.addEventListener("click", function() {
    for (let i = 0; i < drawArea.children.length; i++){
        drawArea.children[i].style.backgroundColor = "white";
    }
})