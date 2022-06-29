/*
Adding the following 3 lines for importing the required files/tools
*/
// STEP#01:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*
Below we have three React components:
- Square
- Board
- Game

Which are custom/user-defined classes:

All these three classes are inheriting the "React.Component" subclasses

We use components to tell React what we want to see on the screen. 
When our data changes, React will efficiently update and re-render our components

The Square component renders a single <button> 
The Board renders 9 squares. 
The Game component renders a board with placeholder values which we'll modify later. 
There are currently no interactive components.
*/

class Square extends React.Component {
    // React components can have state by setting this.state in their constructors:
    // add a constructor to the class to initialize the state:
    constructor(props) {
        /*
        NOTE:
        In JavaScript classes, you need to always call super when defining the constructor of a subclass.
        All React component classes that have a constructor should start with a super(props) call.
        */
        super(props);
        /*
            STEP#05:
            We want the Square component to "remember" that it got clicked, and fill it with an "X" mark. 
            To "remember" things, components use state.

            React components can have state by setting this.state in their constructors. 
            this.state should be considered as private to a React component that it's defined in. 
        */
        this.state = {
            // the current value of the Square in this.state is "null" by default, and change it when the Square is clicked.
            value: null,
        };
    }

    /*
    A component takes in parameters, called props (short for "properties"), 
    and returns a hierarchy of views to display via the render method.
    */

    /*
    The render method returns a description of what you want to see on the screen.
    */
    render() {
        return (
            /*
            STEP#04: filling the Square component with an "X" when we click it. 
            First: change the below button tag that is returned from the Square component's render() function 
            by adding the following event: 
            onClick={function(){
                console.log('click);}}

            OR using the arrow function is shown below:
            */

            /*
            <button className="square" onClick={function () {
                console.log('Box is clicked'); // Don't forget to open the devtools console 
            }}>
            */
            <button
                className="square"
                onClick={() =>
                    // console.log('Box is clicked'); // Don't forget to open the devtools console 
                    // STEP#07 
                    // Adding the code: this.setState({value: 'X'})} instead of just console.log 
                    // Adding 'X' for any square we click:
                    // this.setState({ value: 'X' }) // The old code for step 7

                    /*
                    STEP#11:
                    replacing the previous code: this.setState({ value: 'X' })
                    with this: this.props.onClick()                 
                    */
                    this.props.onClick()}
            >

                {/* 
                NOTE:
                Instead of using this code for the event handler that might have a confusing behavior:
                
                onClick={ 
                    function () {
                        console.log('Box is clicked');
                    }
                }

                We can use the arrow function syntax for the event handler:
                onClick = { () => console.log('Box is clicked') }
                */}

                {/* STEP#03 */}
                {/* Change Square's render method to show that value by replacing { / * TODO * / } with {this.props.value}: */}
                {/* {this.props.value} */}
                {/* 
                We've just "passed a prop" from a parent Board component to a child Square component. 
                Passing props is how information flows in React apps, from parents to children.
                */}

                {/* STEP#06 */}
                {/* Replace this.props.value with this.state.value inside the <button> tag. */}
                {/* {this.state.value} */}


                {/* 
                    STEP#12:
                    replacing the previous code of step 6: {this.state.value})
                    with this: this.props.value               
                 */}
                {this.props.value}
            </button >
        );
    }
}

class Board extends React.Component {
    /*
    STEP#08:
    NOTE: The parent component can pass the state back down to the children by using props; 
    this keeps the child components in sync with each other and with the parent component.

    We need to set the Class Board's initial state and this can be done by adding/modifying the class constructor,
    so the object will be instantiated with initial/default value as soon as its created.

    We will set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares:
    */
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
        // for testing:
        console.log(this.state.squares);
        // (9) [null, null, null, null, null, null, null, null, null]
        /*
            0: null
            1: null
            2: null
            3: null
            4: null
            5: null
            6: null
            7: null
            8: null
            length: 9
        */
    }

    /*
    STEP#12:
    Creating handleClick() method:
    */
    handleClick(i) {
        /*
        Using the .slice() method to create a copy of the "squares" array to modify
        instead of modifying the existing array =>  const squares = this.state.squares.slice();

        Reason: Immutability
        There are generally two approaches to changing data. 
        The first approach is to mutate the data by directly changing the data's values. 
        The second approach is to replace the data with a new copy which has the desired changes.

        Examples:
        - Data Change with Mutation
        var player = {score: 1, name: 'Jeff'};
        player.score = 2;
        // Now player is {score: 2, name: 'Jeff'

       - Data Change without Mutation  
       var player = {score: 1, name: 'Jeff'};

        var newPlayer = Object.assign({}, player, {score: 2});
        // Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

        // Or if you are using object spread syntax, you can write:
        // var newPlayer = {...player, score: 2};
        */
        const squares = this.state.squares.slice();
        squares[i] = 'x';
        this.setState({ squares: squares });
    }

    /*
    Currently, each Square component maintains the game's state. 
    To check for a winner, we'll maintain the value of each of the 9 squares in one location.
    */
    renderSquare(i) {
        // STEP#02:
        /*
        Passing some data from our Board component to our Square component.
        */
        // return <Square value={i} />; // The old code for step 2

        /*
        STEP#09:
        modifying the renderSquare method to read from it using the prop passing mechanism again. 
        We will modify the Board to instruct each individual Square about its current value ('X', 'O', or null). 
        We have already defined the squares array in the Board's constructor, 
        and we will modify the Board's renderSquare method to read from it:

        IMPORTANT NOTE: 
        Because this return statement is now returning multiple lines of code,
        We need to enclose them all with ( ) to prevent JavaScript from adding ; at the end of the line and break the code
        */
        return (
            <Square value={this.state.squares[i]}
                /*
                STEP#10:
                1- Adding a click event (onClick prop on the built-in DOM) to trigger/call a method named "handleClick"
                "handleClick" method is created inside the class "Board"
        
                2- When the button is clicked, React will call the onClick event handler which is defined in Square's render() method.
                */
                onClick={() => this.handleClick(i)}
            />
        ); // The closing bracket for the return statement block
    }

    render() {
        const status = 'Next player: X';

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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
