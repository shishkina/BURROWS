class Game {
  constructor() {
    this.board = new Board();
  }
  play(id) {
  this.board.play(id % 7);
    this.render();
    if (this.board.checkWin()) {
      alert(`Player ${this.board.winner} wins!`);
      this.board.reset();
      this.render();
    }
  }
  buildBoard() {
    var boardEl = $('#board');
    boardEl.empty();
    for (var i = 0; i < 42; i++) {
      $('<div class="cell">').attr('id', i).appendTo(boardEl);
    }
  }
  listen() {
    $('#board').on('click', '.cell', function() {
      game.play(parseInt(this.id));
    });
  }
  render() {
    var cellValues = this.board.info();
    for (var i = 0; i < cellValues.length; i++) {
      var cell = $('#' + i);
      if (cellValues[i] === 1) {
        cell.removeClass('yellow');
        cell.addClass('red');
      } else if (cellValues[i] === 2) {
        cell.removeClass('red');
        cell.addClass('yellow');
      } else {
        cell.removeClass('red');
        cell.removeClass('yellow');
      }
    }
  }
  start() {
    this.buildBoard();
    this.listen();
  }
}