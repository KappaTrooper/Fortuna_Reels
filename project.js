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
    "A"; 2,
    "B": 4,
    "C": 6,
    "D": 8
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


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getbet(balance, numberOfLines)

console.log(bet)




