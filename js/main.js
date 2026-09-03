let drawArea = document.querySelector("#draw-area");
let buttons = document.querySelectorAll(".choice-btn");
let sizeDisplay = document.querySelector(".size-display");
let sizeBar = document.querySelector(".size-bar");
const clearBtn = document.querySelector("#clear");
const colorBtn = document.querySelector("#color");
const eraserBtn = document.querySelector("#eraser");
const colorPicker = document.querySelector(".colorPicker");

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

// This functions change the mouse's mode
let currentMode = "none";
let currentColor;

eraserBtn.addEventListener("click", function() {
    currentMode = "eraser";
})

colorBtn.addEventListener("click", function() {
    colorPicker.click()
    currentMode = "color";
})

colorPicker.addEventListener("input", function() {
        currentColor = colorPicker.value;
});
// This function makes the draw zone work 
drawArea.addEventListener("mousemove", function(e) {
    if (e.buttons === 1 && currentMode === "eraser") {
        e.target.style.backgroundColor = "white";
    }
    if (e.buttons === 1 && currentMode === "color"){
        e.target.style.backgroundColor = currentColor;
    }
})
