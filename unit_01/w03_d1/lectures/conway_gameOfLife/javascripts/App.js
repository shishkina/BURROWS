class App {
  constructor(width, height, $gameBoardNode) {
    this.game = new Game(width, height);
    this.gameView = new GameView(this.game, $gameBoardNode);
  }
  tick() {
    this.game.takeStep();
    this.gameView.render();
  }
}
