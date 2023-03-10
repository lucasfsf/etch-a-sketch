let defaultGridSize = 16;

// Get reference to container
const container = document.getElementById('container');

function createGrid(gridSize) {
    // Change container grid
    container.style.gridTemplateColumns = `repeat(${gridSize}, calc(800px/${gridSize}) [col-start])`;
    container.style.gridTemplateRows = `repeat(${gridSize}, calc(800px/${gridSize}) [col-start])`;

    for (let i = 0; i < (gridSize*gridSize); i++) {
        // Create single square
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `calc(800px/${gridSize})`;
        square.style.width = `calc(800px/${gridSize})`;
        // Append Square to Container
        container.appendChild(square);
    }
}

function startSketcher() {
    //get all squares
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', colorSquare));
}

function colorSquare(e) {
    this.classList.add('square-colored');
}
createGrid(defaultGridSize);
startSketcher();

createGridButton = document.getElementById('create-grid');
console.log(createGridButton)
createGridButton.addEventListener('click', () => {
    // Clear previous grid
    container.textContent = '';
    // Prompt and creates new grid
    let newGridSize = newGridSizeHandler();
    createGrid(newGridSize);
    startSketcher();
});

function newGridSizeHandler() {
    let userInput = NaN;
    console.log(userInput);
    while (isNaN(userInput) || userInput < 2 || userInput > 100) {
        userInput = parseInt(prompt('What size should the sketch be?(2 - 100)'));
    }
    return userInput;
}



