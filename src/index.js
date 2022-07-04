/*
NOTES:
1. Please refer to the first part of the code in file "index1.js"
in order to understand the initial setup and functionality of the game.


2. The file "index1.js" contains the first 12 steps based on React Tutorial in Official Document
This file "index.js" is the last part that contains the final code to run the game 
after deleting some unnecessary lines of code and do some major changes.

3. This file will contain the new steps starting with #13 (instead of #1)
Just to give you an idea that it's a completion of what we have build from step1 to step12
in the previous initial file "index1.js"

4. All the comments for clarifying and explaining the 12 steps are removed from this file "index.js" as it they were written in the previous file "index1.js"

5. The code in this file starting from the topic "Function Components"
Link: https://reactjs.org/tutorial/tutorial.html#function-components

Thanks,
Anmar

*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
Function Components:
STEP#13:
We'll now change the Square to be a function component.

In React, function components are a simpler way to write components 
that only contain a render method and don't have their own state.
Instead of defining a class which extends React.Component, 
we can write a function that takes props as input and returns what should be rendered. 
Function components are less tedious to write than classes, and many components can be expressed

Replacing => class Square extends React.Component
With => function Square(props)
*/

function Square(props) {
    return (
        /*
        NOTE:
        When we modified the Square to be a function component, 
        
        we also changed:
        onClick={() => this.props.onClick()} 
        
        to a shorter:
        onClick={props.onClick} 
        
        (note the lack of parentheses on both sides).
        */
        <button className='square' onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

/*
class Square extends React.Component {
    // React components can have state by setting this.state in their constructors:
    // add a constructor to the class to initialize the state:
    constructor(props) {
        super(props);
        this.state = {
            // the current value of the Square in this.state is "null" by default, and change it when the Square is clicked.
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() =>
                    this.props.onClick()}
            >
                {this.props.value}
            </button >
        );
    }
}
*/

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            /*
            STEP#14:
            Adding the boolean property "xIsNext" with the default value of "true".
            This will set the first move to be "X" by default based on our ternary operator inside the function handleClick(i)
            The Ternary operator code =>  squares[i] = this.state.xIsNext ? 'X' : 'O';

            We can set this default by modifying the initial state in our Board constructor in the line below:
            */
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        /*
            STEP#15:
            Adding the boolean property "xIsNext"
            Each time a player moves, xIsNext (a boolean) will be flipped 
            to determine which player goes next and the game's state will be saved. 
            We'll update the Board's handleClick function to flip the value of xIsNext:

            Removing the previous old code: squares[i] = 'x'; 

            Adding:  squares[i] = this.state.xIsNext ? 'X' : 'O';

            Finally: Add the property line => xIsNext: !this.state.xIsNext,
        */
        // squares[i] = 'x'; 
        // The following line of code has been pushed/moved after the if statement for step 19
        // squares[i] = this.state.xIsNext ? 'X' : 'O';

        /*
        STEP#19:
        We can now change the Board's handleClick function 
        to return early by ignoring a click if someone has won the game 
        or if a Square is already filled:

        The old./previous code of step 15 => squares[i] = this.state.xIsNext ? 'X' : 'O';
        The new code for step 19 will be:
        */
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            // Don't forget the code line below for step 15:
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        ); // The closing bracket for the return statement block
    }

    render() {
        /*
        STEP#16:
        Changing the "status" text in Board's render so that it displays which player has the next turn:

        The previous code =>  const status = 'Next player: X';
        The new one =>
        */
        // const status = 'Next player: X';
        // The following line has been removed in step 18
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        /*
        STEP#18:
        Replacing the code line of the step 16 => const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        With these lines of code:
        */
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


/*
STEP#17: Declaring a Winner
We should also show when the game is won and there are no more turns to make.
Adding the following helper function: 
*/
function calculateWinner(squares) {
    // Creating two-dimensional array:
    // 8 lines to win in this game so an array of 9 squares
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        return null;
    }
} // end calculateWinner

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
