// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if user won
// 6. give user their winnings 
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}


const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.")
    } else {
        return numberDepositAmount;
    }

}
}

const getNumberOfLines = () => {

        while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3):  ")
        const numberofLines = parseFloat(lines);
    
        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
            console.log("Invalid bet lines, try again.")
        } else {
            return numberofLines;
        }
    
    }
}

const getbet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line:  ")
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Bet Value too high! Try again.")
        } else {
            return numberBet;
        }
    
    }
}

// spin the slot machine
const spin = () => {
    const symbols = [];
    // generated array with all the symbols users can pick from
    for (const [symbol, count]  of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = []; // temporary array, has all the reels
    for (let i = 0; i < COLS; i++) { // loop all the arrays we have
        reels.push([]);  // since row col 3 maxium it can push is 3
            const reelSymbols = [...symbols];
            // generates row with selected symbols for rows        
            for (let j = 0; j < ROWS; j++) {
            // randomly selects index
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

// transposes the reels into proper rows 
const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }
    return rows
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getbet(balance, numberOfLines)
const reels = spin();
const rows = transpose(reels);
printRows(rows)






