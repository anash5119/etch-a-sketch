const gridContainerSize = 320;

let sliderOutput = document.getElementById("range");
let sliderValue = document.getElementById("value");
console.log(sliderOutput.value);
sliderValue.innerHTML = sliderOutput.value;
createGrid(sliderOutput.value);
sliderOutput.oninput = function(){
    sliderValue.innerHTML = this.value;
    
    const filledContainer = document.querySelector(".container");
    filledContainer.replaceChildren();
    createGrid(this.value);
}

function createGrid(value){
    const container = document.querySelector(".container");
    let gridSquareSize = gridContainerSize/value;
    let marginSize = (gridContainerSize-gridSquareSize)/(value+1);
    for( let outerIndex = 1; outerIndex <=value; outerIndex++){
        const gridSquareContainer = document.createElement("div");
        //gridSquareContainer.classList.add('gridSquareContainer');
        gridSquareContainer.id = "gridSquareContainer";
        container.appendChild(gridSquareContainer);
        for(let innerIndex = 1; innerIndex <=value; innerIndex++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.style.width = `${gridSquareSize}px`;
            gridSquare.style.height = `${gridSquareSize}px`;
            //gridSquare.style.margin = `${marginSize}px`;
            gridSquareContainer.appendChild(gridSquare);

            container.addEventListener("mousedown", () => {
                //makes squares turn black when you hover over div
                gridSquare.addEventListener("mouseover", () => {
                    gridSquare.style.backgroundColor = "white";
                });
                
            });
        }
    };
}