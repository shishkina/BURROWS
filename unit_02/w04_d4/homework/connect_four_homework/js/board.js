class Board {
  constructor() {
    this.rows = 6;
    this.cols = 7;
    this.reset();
  }
  reset() {
    this.cells = [];
    for (let row = 0; row < this.rows; row++) {
      let rowOfCells = [];
      for (let col = 0; col < this.cols; col++) {
        rowOfCells.push(new Cell());
      }
      this.cells.push(rowOfCells);
    }
    this.currentPlayer = 1;
    this.winner = null;
    console.log("This is the game board:", this);
  }
  cellValue(row, col) {
    let rowOfCells = this.cells[row] || [];
    let cell = rowOfCells[col] || new Cell();
    return cell.getValue();
  }
  info() {
    let cellValues = [];
  
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        cellValues.push(this.cellValue(row, col));
    }
  }
    return cellValues;
  }
  play(col) {
    let playMade = false;

    for (let row = this.rows - 1; row >= 0; row--) {
      let cell = this.cells[row][col];
      if (cell.isEmpty()) {
        cell.setValue(this.currentPlayer);
        this.currentPlayer = 3 - this.currentPlayer; // toggle between player 1 & 2
        playMade = true;
        break;
      }
    }
    return playMade;
  }
  checkWin() {
    return this.checkRows() || this.checkCols() || this.checkDiags();
  }
  checkRows() {
    for (let row = 0; row < this.rows; row++) {
      let rowString = '';
    for (let col = 0; col < this.cols; col++) {
      rowString += this.cellValue(row, col);
    }
    if (this.findWinner(rowString)) {
      return true;
    }
  }
    return false;
  }
  checkCols() {
    for (let col = 0; col < this.cols; col++) {
      let colString = '';
    for (let row = 0; row < this.rows; row++) {
      colString += this.cellValue(row, col);
    }
    if (this.findWinner(colString)) {
      return true;
    }
  }
    return false;
  }
  checkDiags() {
    for (let colStart = -2; colStart <= 3; colStart++) {
      let diagString = '';
      for (let row = 0, col = colStart; row < this.rows; row++, col++) {
        diagString += this.cellValue(row, col);
      }
      if (this.findWinner(diagString)) {
        return true;
      }
    }
    // TOP-RIGHT TO BOTTOM-LEFT DIAGONALS
    // Iterate through the 6 possible diagonals
    // The first diagonal starts from the top row, column 8
    // The last diagonal starts from the top row, column 3
    for (let colStart = 8; colStart >= 3; colStart--) {
      let diagString = '';
      for (let row = 0, col = colStart; row < this.rows; row++, col--) {
        diagString += this.cellValue(row, col);
      }
      if (this.findWinner(diagString)) {
        return true;
      }
    }
    return false;
  }
  findWinner(piecesString) {
    if (piecesString.indexOf('1111') > -1) {
      this.winner = 1;
      return true;
    } else if (piecesString.indexOf('2222') > -1) {
      this.winner = 2;
      return true;
    }
    return false;
  }
}

