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

// Function responsible for handling the deposit from the user.
// It prompts the user to enter a deposit amount and validates the input.
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        // Check if the input is a valid number and is greater than 0.
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount; // If valid, return the deposit amount.
        }
    }
};

// Function to get the number of lines the user wants to bet on.
// It prompts for input and validates it to be between 1 and 3.
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3):  ");
        const numberOfLines = parseFloat(lines);

        // Validate the input ensuring it's a number within the allowed range.
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid bet lines, try again.");
        } else {
            return numberOfLines; // If valid, return the number of lines.
        }
    }
};

// Function to collect the bet amount from the user.
// It ensures the bet does not exceed the user's balance based on the lines they've chosen.
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line:  ");
        const numberBet = parseFloat(bet);

        // Check if the bet is a valid number, is not negative, and doesn't exceed the balance.
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Bet Value too high! Try again.");
        } else {
            return numberBet; // If valid, return the bet amount.
        }
    }
};

// Function to simulate spinning the slot machine.
// It randomly selects symbols based on their predefined occurrence probabilities.
const spin = () => {
    const symbols = [];
    // Create an array with all possible symbols based on their occurrence count.
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = []; // Array to hold the symbols for each reel.

    // Generate each reel with random symbols selected from the array.
    for (let i = 0; i < COLS; i++) {
        reels.push([]); // Prepare the column structure in the reels.
        const reelSymbols = [...symbols]; // Duplicate symbols array to manipulate while selecting.
        
        // Select random symbols for each reel without repeating in the same reel.
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            // Remove the selected symbol from the temporary array to avoid repetition in the same reel.
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels; // Return the filled reels.
};

// Function to restructure the reels into rows for easier analysis of the result.
// It transposes the columns of the reels into rows.
const transpose = (reels) => {
    const rows = [];

    // Transpose the symbols in the reels to a row-based structure.
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            // Switch the symbols from column-based to row-based.
            rows[i].push(reels[j][i]);
        }
    }
    return rows; // Return the transposed symbols in rows.
};

// Function to print the slot machine output.
// It formats and displays the rows of symbols.
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            // Format the row string to visually separate the symbols.
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString); // Print the formatted row of symbols.
    }
};

// Function to calculate the user's winnings based on the symbols matched.
// It checks each active bet line for winning combinations and calculates the total winnings.
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    // Check each bet line (row) for winning combinations.
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        // Check if all symbols in the row are the same.
        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        // If a winning combination is found, calculate the winnings based on the bet and symbol value.
        if (allSame) {
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }

    return winnings; // Return the total winnings.
};
// Main game function orchestrating the slot machine game's flow.
const game = () => {
    let balance = deposit(); // Initialize the user's balance with the deposit.

    // Game loop continues until the player decides to stop or runs out of money.
    while (true) {
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines(); // Get the number of lines to bet on.
        const betPerLine = getBet(balance, numberOfLines); // Collect bet amount per line.
        
        const totalBet = betPerLine * numberOfLines; // Total bet is bet per line multiplied by the number of lines.
        balance -= totalBet; // Deduct total bet from balance.
        
        // Simulate the slot machine spin and get the result.
        const reels = spin();
        const rows = transpose(reels); // Convert the reel results into rows.
        printRows(rows); // Display the outcome of the spin.
        
        // Calculate and update winnings based on the bet PER LINE.
        const winnings = getWinnings(rows, betPerLine, numberOfLines);
        balance += winnings; // Add winnings to balance.
        console.log("You won, $" + winnings.toString());

        // Check if the player's money has run out.
        if (balance <= 0) {
            console.log("You ran out of money");
            break;
        }

        // Prompt to play again.
        const playAgain = prompt("Do you want to play again? (y/n)? ");
        if (playAgain != "y") break; // Exit if the player decides to stop.
    }
};

// Start the game.
game();
