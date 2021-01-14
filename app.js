const dimensions = prompt("How many squares per column/row?");
const sketchContainer = document.querySelector(".sketch-container");
const clearBtn = document.querySelector('.btn-clear');


function generateGrid(dimensions) {
    const e = document.querySelector('.sketch-container');
    for (let i = 0; i < dimensions * dimensions; i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.addEventListener("mouseover", changeColor);
        e.appendChild(box);
    }


    e.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
    e.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    
}

clearBtn.addEventListener('click', () => {
    clearSketch();
}) 


function changeColor(e) {
    e.target.classList.add("dark");
}

function clearSketch() {
    const grid = document.querySelectorAll(".box");
    grid.forEach((square) => {
        square.classList.remove("dark")
    });
}

    

    
    

generateGrid(dimensions);