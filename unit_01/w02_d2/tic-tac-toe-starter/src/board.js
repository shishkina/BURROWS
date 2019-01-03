class Board {
	constructor() {
		this.cells = null;
		this.move = null;
		this.winner = null;
	}

	startGame() {
		this.cells = [];
		for(let i = 0; i < 9; i++) {
			this.cells.push(new Cell());
		}
		this.winner = null;
		this.move = 0;
	}
}