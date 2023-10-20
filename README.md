# Fortuna's Reels: A JavaScript Odyssey

## Introduction

This project is a simple, text-based Slot Machine game implemented in JavaScript. The motivation behind creating this game was to explore the fundamentals of JavaScript, practice coding logic, understand control flows, and get hands-on experience with creating a project from scratch.

## Overview

The game simulates a casino-style slot machine with a command-line interface. Players start by depositing money into the machine and then proceed to place bets on different lines. They can then "spin" the machine, which randomly selects symbols for each slot. Winnings are calculated based on the bet amounts and the symbols matched.

## Features

- **Player Deposits**: Players start by depositing a specified amount of virtual money into the slot machine.
- **Betting System**: Players choose how many lines they want to bet on and the amount to bet per line.
- **Randomized Spins**: Every spin produces a random set of symbols, simulating the unpredictability of a real slot machine.
- **Winning Calculations**: The game calculates winnings based on the number of lines the player bets on, the bet amount, and the matched symbols' values.
- **Balance Management**: Players' balance changes according to their bets' outcomes, with clear messages indicating winnings or when funds run out.
- **Replayability**: After each spin, players can choose to play again, maintaining their remaining balance, or exit the game.

## How to Play

1. **Installation**: Clone the repository to your local machine. Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Run the Game**: Navigate to the project directory in the terminal and run `node project.js` to start the game.
3. **Follow On-screen Prompts**: The game will guide you through depositing money, placing bets, spinning the slot machine, and potentially earning winnings!

## Code Structure

- `deposit()`: Handles the player's initial deposit.
- `getNumberOfLines()`: Collects and validates the number of lines the player wants to bet on.
- `getBet()`: Retrieves and checks the bet per line based on the player's balance.
- `spin()`: Randomly selects symbols for each slot in the machine.
- `transpose()`: Rearranges the slot machine's output for a more readable format.
- `printRows()`: Displays the slot machine's current state with symbols.
- `getWinnings()`: Calculates the player's winnings based on the symbols matched.
- `game()`: Orchestrates the game flow, managing the player's balance, and controlling game rounds.

## Learning Outcomes

Through this project, I gained deeper insights into several programming concepts and JavaScript specifics, including:

- **Control Flow**: Understanding how to manage program sequences, user inputs, and game loops.
- **Data Manipulation**: Handling data structures for game logic, particularly with arrays and objects for storing game state and configurations.
- **Functions**: Creating and invoking functions for various game actions, facilitating code reuse, and maintaining clean code structure.
- **Randomness in Programming**: Utilizing randomness to simulate the unpredictability of casino-style games, enhancing the gaming experience.
- **Input Validation**: Ensuring robustness through comprehensive input checks to handle unexpected user responses.

## Future Improvements

- **Graphical Interface**: Transition from a command-line interface to a graphical one using web technologies or a JavaScript framework.
- **More Complexity**: Introduce more features like progressive jackpots, bonus rounds, or even multiplayer support.
- **Refactoring for Efficiency**: Continuously improve the code's efficiency and readability while maintaining current functionalities.

## Conclusion

This project served as an exciting challenge and a valuable learning experience in coding with JavaScript. I encourage others to try it out, provide feedback, or even contribute to its future growth.
