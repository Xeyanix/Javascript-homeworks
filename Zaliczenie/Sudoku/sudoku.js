
const b = null

const bd1 = [
    [7, b, 4, 8, b, b, 3, b, 1],
    [8, 2, b, 5, b, b, b, 4, b],
    [b, b, 9, 4, 3, b, 5, b, b],

    [3, 1, b, b, b, b, 8, b, 7],
    [b, 8, b, b, b, b, b, 1, b],
    [9, b, 7, b, b, b, b, 3, 2],

    [b, b, 6, b, 1, 5, 4, b, b],
    [b, 7, b, b, b, 9, b, 6, 5],
    [5, b, 8, b, b, 2, 1, b, 3],
]


function solve(board) {
    // solves the given sudoku board
    // ASSUME the given sudoku board is valid
    if (solved(board)) {
        return board
    }
    else {
        const possibilities = nextBoards(board)
        const validBoards = keepOnlyValid(possibilities)
        return searchForSolution(validBoards)
    }
}

function searchForSolution(boards) {
    // List[Board] -> Board or false
    // finds a valid solution to the sudoku problem
    if (boards.length < 1) {  //jesli jest pusta 
        return false
    }
    else {
        // backtracking search for solution
        let first = boards.shift()
        const tryPath = solve(first)
        if (tryPath != false) {
            return tryPath
        }
        else {
            return searchForSolution(boards)
        }
    }
}

function solved(board) {
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // checks to see if the given puzzle is solved
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === null) {
                return false //jesli nawet jeden kwadrat jest null to false 
            }
        }
    }
    return true
}

function nextBoards(board) {
    // THIS FUNCTION WORKS.
    // Board -> List[Board]
    // finds the first emply square and generates 9 different boards filling in that square with numbers 1...9
    let res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined) {
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (let i = 1; i <= 9; i++) { //fill out all number for empty board
            let newBoard = [...board]
            let row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board) {
    // THIS FUNCTION WORKS.
    // Board -> [Int, Int] 
    // (get the i j coordinates for the first empty square)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}

function keepOnlyValid(boards) {
    return boards.filter(b => validBoard(b))
}

// function keepOnlyValid(boards) {
//     // THIS FUNCTION WORKS.
//     // List[Board] -> List[Board]
//     // filters out all of the invalid boards from the list
//     let res = []
//     for (let i = 0; i < boards.length; i++) {
//         if (validBoard(boards[i])) {
//             res.push(boards[i])
//         }
//     }
//     return res
// }

function validBoard(board) {
    // checks to see if given board is valid
    return rows(board) && columns(board) && boxesGood(board)
}

function rows(board) {
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each row
    for (let i = 0; i < 9; i++) {
        let cur = []
        for (let j = 0; j < 9; j++) {
            if (cur.includes(board[i][j])) {
                return false
            }
            else if (board[i][j] != null) {
                cur.push(board[i][j])
            }
        }
    }
    return true
}

function columns(board) {
    // THIS FUNCTION WORKS.
    // Board -> Boolean
    // makes sure there are no repeating numbers for each column
    for (let i = 0; i < 9; i++) {
        let cur = []
        for (let j = 0; j < 9; j++) {
            if (cur.includes(board[j][i])) {
                return false
            }
            else if (board[j][i] != null) {
                cur.push(board[j][i])
            }
        }
    }
    return true
}

function boxesGood(board) {
    // transform this everywhere to update res
    const boxCoordinates = [
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2]
    ]
    // makes sure there are no repeating numbers for each box
    for (let y = 0; y < 9; y += 3) { //3 w pionie 
        for (let x = 0; x < 9; x += 3) { //3 w poziomie 
            // each traversal should examine each box PL - każde przechodzenie powinno sprawdzać każde pole czy nie ma duplikatow 
            let cur = []
            for (let i = 0; i < 9; i++) {
                let coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])) {
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != null) {
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}


console.log(solve(bd1))










function initiate() {
    // null -> null
    // populate the board with whatever the user inputted
    let startingBoard = [[]]
    let j = 0
    for (let i = 1; i <= 81; i++) {
        const val = document.getElementById(String(i)).value
        if (val == "") {
            startingBoard[j].push(null)
        }
        else {
            startingBoard[j].push(Number(val))
        }
        if (i % 9 == 0 && i < 81) {
            startingBoard.push([])
            j++
        }
    }
    console.log(startingBoard)
    const inputValid = validBoard(startingBoard)
    if (!inputValid) {
        inputIsInvalid()
    }
    else {
        const answer = solve(startingBoard)
        updateBoard(answer, inputValid)
    }
}

function updateBoard(board) {
    // THIS FUNCTION WORKS.
    // Board -> null
    // update the DOM with the answer
    if (board == false) {
        for (i = 1; i <= 9; i++) {
            document.getElementById("row " + String(i)).innerHTML = "NO SOLUTION EXISTS TO THE GIVEN BOARD"
        }
    }
    else {
        for (let i = 1; i <= 9; i++) {
            let row = ""
            for (let j = 0; j < 9; j++) {
                if (row == "") {
                    row = row + String(board[i - 1][j])
                }
                else {
                    row = row + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + String(board[i - 1][j])
                }
            }
            document.getElementById("row " + String(i)).innerHTML = row
        }
    }
}

function inputIsInvalid() {
    // starting board is invalid or puzzle is insolvable
    for (i = 1; i <= 9; i++) {
        document.getElementById("row " + String(i)).innerHTML = "THE GIVEN BOARD IS INVALID"
    }
}