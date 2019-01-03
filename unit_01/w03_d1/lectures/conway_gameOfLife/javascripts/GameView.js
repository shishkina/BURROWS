class GameView { // Feel free to delete me... OR keep me!
  constructor(game, $boardNode){
    this.$el = $boardNode;
    this.game = game;
    this.$el.css({ width: this.game.width * 10 + 'px' });
  }
  render() {
    this.$el.html('');
    this.game.gameState.forEach((cell) => {
      const $cellNode = $('<div>');
      if (cell) {
        $cellNode.addClass('cell alive');
      } else {
        $cellNode.addClass('cell dead')
      }
      this.$el.append($cellNode);
    });
  }
}
