
/* ===== 2D Array Representation =====
'o' = available, 'X' = booked
*/
const theaterSeats = [
    ['X', 'o', 'X'],
    ['o', 'X', 'o'],
    ['X', 'o', 'X']
];

// Function to handle manual booking
function bookSeat(row, col) {
    if (theaterSeats[row][col] === 'o') {
        theaterSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is booked.`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`);
    }
}

// Function to visually update seat status
function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col; // 3 columns
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}

// Function to book a random available seat
function bookRandomSeat() {
    const availableSeats = [];
    for (let row = 0; row < theaterSeats.length; row++) {
        for (let col = 0; col < theaterSeats[row].length; col++) {
            if (theaterSeats[row][col] === 'o') {
                availableSeats.push({ row, col });
            }
        }
    }
    if (availableSeats.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const { row, col } = availableSeats[randomIndex];
        bookSeat(row, col);
    } else {
        alert('🎉 All seats are already booked!');
    }
}