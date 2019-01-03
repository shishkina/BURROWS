console.log('NO NEED TO LOAD ME...');
console.log(' I\'M JUST HELPFUL HINTS!');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//  Below find little clues/hints/examples... which have....
//   in the past... helped someone build a game-of-life
//  There are NOT NEEEEDED!
//  But... they seem to be common headache points

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// How can I make a copy of an array...  NOT!!!
const sadArray = [1, 2, 3];
const notARealCopyOfSadArray = sadArray;
sadArray[0] = 'Whaaaa?!';
notARealCopyOfSadArray[0]; // THIS IS NOW 'Whaaaa?!'

// How can I really make a copy of an array...
const happyArray = [1, 2, 3];
const copyHappyArray = happyArray.slice(0);
happyArray[0] = 'COOOL!';
copyHappyArray[0];  // This is still 1... NICE!


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// How can I create a 0 or 1 randomly?
const zeroOrOne = Math.round(Math.random());

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// How can you a create a bunch of the string 'Happy!'?
const desiredNumberOfOnesOrZeros = 3;
Array(desiredNumberOfOnesOrZeros).fill(null).map(() => 'Happy!'));
// ^ this will give me ['Happy!', 'Happy!', 'Happy!']


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// **** Neighbors ****
// Think of a tic tac toe board...
// let gameDimension = 9;
// const board = Array(gameDimension).fill(null);
    // ^ board is [null, null, null, null, null, null, null, null, null]

// Here are the indices displayed formatted as a tic tac toe board
//   0 1 2
//   3 4 5
//   6 7 8

// How can we find the neighbors?
  // Some random examples:
    // If we look at cell 0... 1, 3, 4 are neighbors
    // If we look at cell 3... 0, 1, 4, 6, 7 are neighbors
    // If we look at cell 4... 0, 1, 2, 3, 5, 6, 7, 8 are neighbors
    // If we look at cell 7... 3, 4, 5, 6, 8 are neighbors

// Consider looking at the provide CoordianteHelper.js
  // Using this helper, you can calulate these easily
  // const helper = new CoordinateHelper(3, 3);
  // helper.findNeighborIndices(0) will return [1, 3, 4]
