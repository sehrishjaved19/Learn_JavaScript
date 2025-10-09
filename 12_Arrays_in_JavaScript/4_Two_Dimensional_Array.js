// Creating a 2D array
// Initializing array of arrays
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements in 2D array
// Provide both row and column
// Nested loops to traverse(go though) a 2D array

// Iterating through a 2D
for ( let i =0; i<grid.length; i++) { //(outer loop is for row)
    for(let j =0; j<grid[i].length; j++){ //(inner loop is for column)
        console.log(`Element at ${i}, ${j}: ${grid[i][j]}`);
    }
}