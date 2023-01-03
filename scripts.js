let gridSize = 16;

// Get reference to container
const container = document.getElementById('container');
container.style.gridTemplateColumns = `repeat(${gridSize}, calc(800px/${gridSize}) [col-start])`;
container.style.gridTemplateRows = `repeat(${gridSize}, calc(800px/${gridSize}) [col-start])`;


for (let i = 0; i < (gridSize*gridSize); i++) {
    // Create single square
    let square = document.createElement('div');
    square.classList.add('square');

    // Append Square to Container
    container.appendChild(square);
}

//get all squares
let squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', colorSquare));

function colorSquare(e) {
    this.classList.add('square-colored');
}