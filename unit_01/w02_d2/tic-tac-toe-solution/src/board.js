class Board {
	constructor() {
		this.cells = null,
		this.move = null,
		this.winner = null
	};

	startGame() {
		this.cells = [];
		for(let i = 0; i < 9; i++) {
			this.cells.push(new Cell());
		}
		this.winner = null;
		this.move = 0;
	};

	canBePlayed(position) {
		return this.cells[position].isEmpty() && position < 9 && position >= 0;
	};

	makePlay(position) {
		if(this.canBePlayed(position)) {
			this.move % 2 === 0 ? this.setX(position) : this.setO(position);
			return true;
		}
		return false;
	};

	setX(position) {
		this.cells[position].setValue('|X|');
		this.move += 1;
		return;
	};

	setO(position) {
		this.cells[position].setValue('|O|');
		this.move -= 1;
		return;
	};

	hasWinningRow() {
		let cellValues = this.cells.map((cell) => {
			return cell.getValue();
		}).join('');
		this.hasWinningCombination(cellValues) ? this.winner = true : false;
	};

	hasWinningColumn() {
		let cellValues = [];
		for(let i = 0; i < 3; i++){
			for(let j = i; j < 9; j+=3) {
				cellValues.push(this.cells[j].getValue());
			};
		};
		this.hasWinningCombination(cellValues.join('')) ? this.winner = true : false;
	};

	hasWinningDiagonal() {
		let cellValues = [];
		for(let i = 0; i < this.cells.length; i+=4) {
			cellValues.push(this.cells[i].getValue());
		};
		for(let j = 2; j < this.cells.length; j+=2) {
			cellValues.push(this.cells[j].getValue());
		};
		this.hasWinningCombination(cellValues.join('')) ? this.winner = true : false;
	};

	checkWin() {
		this.render();
		this.hasWinningColumn();
		this.hasWinningRow();
		this.hasWinningDiagonal();
	}

	hasWinningCombination(cellValues) {
		return cellValues.indexOf('|X||X||X|') != -1 || cellValues.indexOf('|O||O||O|') != -1;
	};

	render() {
		let renderedBoard = [];
		for(let i = 0; i < this.cells.length; i+= 3) {
			let row = [];
			for(let j = i; j < i + 3; j++) {
				let val = this.cells[j].getValue() || '| |';
				row.push(val);
			};
			renderedBoard.push(row.join(''));
		};
		console.log(renderedBoard.join('\n'));
	};
};