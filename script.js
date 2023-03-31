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
