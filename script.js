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

// Takes a src node and a dst node coordinates in the form [x, y] and returns the shortest path
// between them
function knightMoves(source, destination) {
    if (checkCoordinates(source) && checkCoordinates(destination)) {
        let [src, dst] = convert(source, destination);
        let visited = new Set();
        let queue = [[src, src]];
        while (queue.length > 0) {
            let [node, path] = queue.shift();
            visited.add(node);
            if (node === dst) {
                let finalPath = path.split(' ').join(' -> ');
                return `You made it in ${
                    path.split(' ').length - 1
                } moves, here is your path: ${finalPath}`;
            }
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    // path.push(neighbor)
                    queue.push([neighbor, path + ` ${neighbor}`]);
                }
            }
        }
    }
}

// Converts anf array in the form [x, y] to 'x,y'
function convert(src, dst) {
    let source;
    if (typeof src === 'object') {
        source = src.join();
    } else {
        source = src;
    }

    let destination;
    if (typeof dst === 'object') {
        destination = dst.join();
    } else {
        destination = dst;
    }
    return [source, destination];
}

// Checks for coordinates to be within [1,1] and [8,8]
function checkCoordinates(coor) {
    if (coor[0] >= 1 && coor[0] <= 8 && coor[1] >= 1 && coor[1] <= 8) {
        return true;
    } else throw new Error('invalid coordinates');
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

let graph = createGraph(8);
// console.log(traverse([1,1]))
console.log(knightMoves([3, 3], [4, 3]));
