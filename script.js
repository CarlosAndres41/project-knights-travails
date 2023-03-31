function createBoard(size) {
    let board = [];
    for (let i = 0; i < size; i++) {
        board.push([]);
        for (let j = 0; j < size; j++) {
            board[i].push([]);
        }
    }
    return board;
}

function knightMoves(start) {
    board[start[0]][start[1]] = 'K';
}

// Returns an array whit the coordinates of the valid next moves
function validMoves(coordinates) {
    let valid = [];
    let x = coordinates[0];
    let y = coordinates[1];
    if (x + 2 <= 7 && y + 1 <= 7) valid.push([x + 2, y + 1]);
    if (x + 1 <= 7 && y + 2 <= 7) valid.push([x + 1, y + 2]);
    if (x - 1 >= 0 && y + 2 <= 7) valid.push([x - 1, y + 2]);
    if (x - 2 >= 0 && y + 1 <= 7) valid.push([x - 2, y + 1]);
    if (x - 2 >= 0 && y - 2 >= 0) valid.push([x - 2, y - 2]);
    if (x - 1 >= 0 && y - 2 >= 0) valid.push([x - 1, y - 2]);
    if (x + 1 <= 7 && y - 2 >= 0) valid.push([x + 1, y - 2]);
    if (x + 2 <= 7 && y - 1 >= 0) valid.push([x + 2, y - 1]);
    return valid;
}
