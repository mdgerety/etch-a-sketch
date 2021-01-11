const dimensions = prompt("How many squares per column/row?");
const sketchContainer = document.querySelector(".sketch-container");

function generateGrid(dimensions) {
    const e = document.querySelector('.sketch-container');
    for (let i = 0; i < dimensions; i++) {
        
        let row = document.createElement("div");
        row.className = "row";
        for (let i = 0; i < dimensions; i++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
        }
        e.appendChild(row); 
    }

    e.style.gridTemplateRows = `repeat(${dimensions}, 20px)`;
    e.style.gridTemplateColumns = `repeat(${dimensions}, 20px)`;
    

}

    
    

generateGrid(dimensions);