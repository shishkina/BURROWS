Lab 01-05

# Tic Tac Toe - Three in a row!!

![tictactoe](http://screenshots.en.sftcdn.net/en/scrn/3353000/3353302/scr_0-700x509.png)

The game that you design should have the following objects:

- A Cell class
- A Board class
- A game -> made with an object literal

**NOTE** There is a test suite in place for you to follow if you would like. You are more than welcome to go off the rails here and program however you would like. If you are following the test suite it is important that you name functions exactly as written in this markdown. To run the test suite, in your terminal from the root of this folder run `open SpecRunner.html` , it will open the test suite in chrome all nice and red!!!! YAY FAILING TESTS!!!!

# Cell Object

These are the attributes a cell should have:

- value -> set to null

These are the behaviors a cell should have:

- constructor
- isEmpty -> will return true if the cell is empty and false if it isn't
- setValue -> accepts an argument, sets the value of the cell to the incoming argument
- getValue -> returns the value of the cell

# Board Object

These are the attributes that a board object should have:

- cells -> set to `null`
- moves -> set to `null`
- winner -> `null`

These are the functions that a board object should have:

- `startGame`
	- should reset cells to an empty array
	- should set the board's cells property to an array of 9 cells
	- should set the winner to `null`
	- should set moves to 0
- `canBePlayed`
	- accepts a cell location as an argument
	- should make sure that only cell locations between 0 and 8 are allowed
	- should return a boolean indicating whether the cell is playable or not
- `makePlay`
	- should accept a cell location as an argument and set the value of that cell based on the current move.
		- If a move is even -> `X`
		- If a move is odd -> `O`
	- should do nothing if the cell has already been played on OR if there is no cell at that position
		- make use of the `canBePlayed` function
- `setX`
	- accepts a cell location as an argument
	- sets the value of the cell at that position to '|X|'
	- increases the value of move by 1
- `setO`
	- accepts a cell location as an argument
	- sets the value of the cell at that position to '|O|'
	- decreases the value of move by 1
- `hasWinningRow`
	- should check the status of the rows to see if there is a winner
	- if a winner was found it should set the board's winner equal true
- `hasWinningColumn`
	- should check the status of the columns to see if there is a winner
	- if a winner was found it should set the board's winner equal true
- `hasWinningDiagonal`
	- should check the diagonals to see if a winner was found
	- if a winner was found it should set the board's winner equal to true
- `checkWin`
	- should render the board
	- should check the game board to see if the previous play was a winning play
	- should make use of `hasWinningRow`, `hasWinningColumn`, and `hasWinningDiagonal`
- `render`
	- should return the current state of the game board

# Game Object

These are the functions of the game object:

- `start`
	- should start the game by calling the startGame function of the board object
	- should render the current state of the board and display it in the console
	- should call the play function of the game object as the last step
- `play`
	- as long as there is no winner the game should continue prompting the user to choose a square to play
	- should render and display in the console the current state of the board after each move
	- after a game has ended should ask the user if they would like to play again or quit