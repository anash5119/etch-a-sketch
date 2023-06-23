const gridContainerSize = 500;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let coloring = false;
let eraser = false
let eraserElement = document.getElementById("eraser");
document.getElementById("eraser").addEventListener("click", () => {
    if(!eraser){
        eraser = true;
        eraserElement.style.backgroundColor = "white";
    }
    else if(eraser){
        eraser = false;
        eraserElement.style.backgroundColor = "black";
    }
});

//gets the input of grid squares from user
function sliderInput(){
    let sliderOutput = document.getElementById("range");
    let sliderValue = document.getElementById("value");
    sliderValue.innerHTML = sliderOutput.value+ ' x ' + sliderOutput.value;
    createGrid(sliderOutput.value);
    sliderOutput.oninput = function(){
        sliderValue.innerHTML = this.value + " x " + this.value;
        
        const filledContainer = document.querySelector(".container");
        filledContainer.replaceChildren(); //delete grid that's already there
        createGrid(this.value);
    }
}

function createGrid(value){
    const container = document.querySelector(".container");
    let gridSquareSize = (gridContainerSize/value);

    //loop to make 16 rows
    for( let outerIndex = 1; outerIndex <=value; outerIndex++){
        const gridSquareContainer = document.createElement("div");
        //gridSquareContainer.classList.add('gridSquareContainer');
        gridSquareContainer.id = "gridSquareContainer";
        container.appendChild(gridSquareContainer);

        //loops to fill rows with boxes
        for(let innerIndex = 1; innerIndex <=value; innerIndex++){
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.style.width = `${gridSquareSize}px`;
            gridSquare.style.height = `${gridSquareSize}px`;
            gridSquare.addEventListener("mousedown", (draw));
            gridSquare.addEventListener("mouseover", (draw));
            gridSquareContainer.appendChild(gridSquare);        
        }
    }
}


function draw(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(eraser){
        e.target.style.backgroundColor = "rgb(28, 189, 28)";
    }
    else if(coloring){}

    else{
        e.target.style.backgroundColor = "white";
    }    

}

window.onload = () => {
    sliderInput();
}