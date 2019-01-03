const game = {
	start: function() {
		const board = new Board();
		board.startGame();
		board.render();
		this.play(board);
	},
	play: function(board) {
		console.log(board);
		while(!board.winner) {
			let position = prompt('Where would you like to play?');
			board.makePlay(position);
			board.checkWin();
		}
	},
}

game.start();
