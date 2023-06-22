const container = document.querySelector(".container");
for( let outerIndex = 1; outerIndex <=16; outerIndex++){
    const gridSquareContainer = document.createElement("div");
    //gridSquareContainer.classList.add('gridSquareContainer');
    gridSquareContainer.id = "gridSquareContainer";
    container.appendChild(gridSquareContainer);
    for(let innerIndex = 1; innerIndex <=16; innerIndex++){
        const gridSquare = document.createElement("div");
        //gridSquare.classList.add("gridSquare");
        gridSquare.id = "gridSquare";
        gridSquareContainer.appendChild(gridSquare);
    }
}

let isBlack = document.getElementById("gridSquare");
isBlack.addEventListener("mouseOver", () => {
        //isBlack.style.backgroundColor = "black";
        console.log(isBlack);
});