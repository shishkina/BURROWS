class GameView { // Feel free to delete me... OR keep me!
  constructor(game, boardNode){
    this.el = boardNode;
    this.game = game;
    // can we modify the game el css so to allow
      // the cells to wrap around?
  }
  render() {
    this.el.innerHTML = '';
    this.game.gameState.forEach((cell) => {
      const cellNode = document.createElement('div');
      cellNode.setAttribute('class', 'cell');
      // Any other class or styleing we can do here to
        // make cells look alive or not?
      this.el.appendChild(cellNode);
    });
  }
}
