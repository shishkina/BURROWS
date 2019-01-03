# Tic Tac Toe

## Introduction

Today you worked with Will to form some of the logic behind a Tic Tac Toe game.  Tonight and tomorrow you're going to use your new knowledge of DOM manipulation to implement the game in the browser.

## Exercise

#### Requirements

- A user should be able to click on different squares to make a move
- Each click will alternate between marking an `X` and `O` in turn
- A cell should not be able to be replayed once marked

---

 - Your `index.html` will be your starting point on this project. Make sure to that you have included the necessary HTML tags, including `script` and `link` tags to link to your JavaScript and CSS, respectively.

 - Before you even start working with JavaScript, construct the gameboard. The gameboard should include the 3x3 grid. Using `id` and `class` selectors on clickable elements will help you wire this up in JavaScript afterwards.

####The JavaScript portion:
 
- Display a message to indicate which turn is about to be played
- Check the combinations on the board contents after every move to see if there is a winner.
- After the necessary moves have been played, stop the game and display the winner if one player ends up winning with three in a row.