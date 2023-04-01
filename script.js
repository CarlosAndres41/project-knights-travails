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
    board[start[0] - 1][start[1] - 1] = 'K';
}

// Returns an array whit the coordinates of the valid next moves
function validMoves(x, y) {
    let valid = [];
    if (x + 2 <= 8 && y + 1 <= 8) valid.push([x + 2, y + 1]);
    if (x + 1 <= 8 && y + 2 <= 8) valid.push([x + 1, y + 2]);
    if (x - 1 >= 1 && y + 2 <= 8) valid.push([x - 1, y + 2]);
    if (x - 2 >= 1 && y + 1 <= 8) valid.push([x - 2, y + 1]);
    if (x - 2 >= 1 && y - 2 >= 1) valid.push([x - 2, y - 2]);
    if (x - 1 >= 1 && y - 2 >= 1) valid.push([x - 1, y - 2]);
    if (x + 1 <= 8 && y - 2 >= 1) valid.push([x + 1, y - 2]);
    if (x + 2 <= 8 && y - 1 >= 1) valid.push([x + 2, y - 1]);
    return valid;
}

// Create an adjacency list (graph) whith all possible moves for each coordinate
function createGraph(size) {
    let graph = {};
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            if (!(`${j},${i}` in graph)) graph[`${j},${i}`] = [];
            let valid = validMoves(j, i);
            for (let move of valid) {
                graph[`${j},${i}`].push(move.join());
            }
        }
    }
    return graph;
}

// Returns a set with all the moves that it takes a knight to traverse the whole board
// given a source coordinates in the form [x,y]
function traverseBoard(src, set = new Set()) {
    let visited = set;
    let source;
    if (typeof src === 'object') {
        source = src.join();
    } else {
        source = src;
    }
    if (visited.has(source)) return;
    visited.add(source);
    for (let neighbor of graph[source]) {
        traverseBoard(neighbor, visited);
    }
    return visited;
}
