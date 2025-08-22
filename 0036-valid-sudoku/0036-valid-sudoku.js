/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // ✅ Check rows & cols
    for (let i = 0; i < 9; i++) {
        let mapRow = new Map();
        let mapCol = new Map();

        for (let j = 0; j < 9; j++) {
            let rowVal = board[i][j];
            let colVal = board[j][i];

            // Row check
            if (rowVal !== ".") {
                if (mapRow.has(rowVal)) return false;
                mapRow.set(rowVal, 1);
            }

            // Col check
            if (colVal !== ".") {
                if (mapCol.has(colVal)) return false;
                mapCol.set(colVal, 1);
            }
        }
    }

    // ✅ Check 3x3 boxes
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let map = new Map();

            for (let inI = 0; inI < 3; inI++) {
                for (let inJ = 0; inJ < 3; inJ++) {
                    let row = i * 3 + inI;
                    let col = j * 3 + inJ;

                    let cell = board[row][col];
                    if (cell === ".") continue;

                    if (map.has(cell)) return false;
                    map.set(cell, 1);
                }
            }
        }
    }

    return true;
};
