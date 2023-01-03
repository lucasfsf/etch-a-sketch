const gridSize = 16 * 16;

// Get reference to container
const container = document.getElementById('container');


for (let i = 0; i < gridSize; i++) {
    // Create single square
    let square = document.createElement('div');
    square.classList.add('square');

    // Append Square to Container
    container.appendChild(square);
}


