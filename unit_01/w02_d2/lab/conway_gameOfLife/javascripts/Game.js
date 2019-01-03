class Game {
  constructor(width, height) {  // Feel free to delete me... OR keep me!
    this.width = width;
    this.height = height;
    this.coordHelper = new CoordinateHelper(this.width, this.height);

    // This doesn't look right...
      // how can this be dynamic to the width and height passed in
    this.gameState = [0, 1, 0, 0];
    this.gameState = Array(width * height).fill(null).map(() => Math.round(Math.random()));
  }
  takeStep() {
    // Might we need to duplicate the gamestate here?
      // If we modify the game state as we fly through...
      //  will we be applying the rules correctly?
    this.gameState.forEach((cell, stateIdx) => {
      // How many neighbours does the cell have?
      // Implement the Conway Game Of Life rules!
    });
  }
}
