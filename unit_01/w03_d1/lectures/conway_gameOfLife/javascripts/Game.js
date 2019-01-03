class Game {
  constructor(width, height) {  // Feel free to delete me... OR keep me!
    this.width = width;
    this.height = height;
    this.coordHelper = new CoordinateHelper(this.width, this.height);
    this.gameState = [0, 1, 0, 0];
    this.gameState = Array(width * height).fill(null).map(() => Math.round(Math.random()));
  }
  takeStep() {
    const nextState = this.gameState.slice(0);  // Shallow copy
    this.gameState.forEach((cell, stateIdx) => {
      const indices = this.coordHelper.findNeighborIndices(stateIdx);
      const cellValues = indices.map((idx) => {
        return this.gameState[idx]
      });
      const neighbourCount = cellValues.reduce((prev, curr) => {
        return prev + curr;
      });
      if (cell === 1 && neighbourCount === 2) {
        nextState[stateIdx] = 1;
      } else if (neighbourCount === 3){
        nextState[stateIdx] = 1;
      } else {
        nextState[stateIdx] = 0;
      }
    });
    this.gameState = nextState;
  }
}
