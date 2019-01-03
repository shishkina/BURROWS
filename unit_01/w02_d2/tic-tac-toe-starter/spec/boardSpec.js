describe('Board', () => {
	let board;

	beforeEach(() => {
		board = new Board();
		board.startGame();
	});

	describe('#new', () => {
		let newBoard = new Board();
		it('sets the properties of the board', () => {
			expect(newBoard.cells).toEqual(null);
			expect(newBoard.move).toEqual(null);
			expect(newBoard.winner).toEqual(null);
		});
	});

	describe('#startGame', () => {
		it('pushes 9 Cell objects into cell array', () => {
			expect(board.cells.length).toEqual(9);
			expect(board.cells[0].getValue()).toEqual(null);
		});

		it('sets the property of cells to 9 Cell Objects', () => {
			expect(board.cells.length).toEqual(9)
		});

		it('sets the property move of board to 0', () => {
			expect(board.move).toEqual(0)
		});

		it('sets the property winner to null', () => {
			expect(board.winner).toEqual(null);
		});
	});

	describe('#canBePlayed', () => {
		it('determines if cell can be played', () => {
			expect(board.canBePlayed(0)).toEqual(true);
		});
	});

	describe('#makePlay', () => {
		it('sets X if move is even and open', () => {
			board.makePlay(0);
			expect(board.cells[0].getValue()).toEqual('|X|')
		});

		it('sets O if move is odd and open', () => {
			board.makePlay(0);
			board.makePlay(1);
			expect(board.cells[1].getValue()).toEqual('|O|')
		});
	});

	describe('#setX', () => {
		it('sets cell value to X at argument position', () => {
			board.setX(0);
			expect(board.cells[0].getValue()).toEqual('|X|');
		});
	});

	describe('#setO', () => {
		it('sets cell value to O at argument position', () => {
			board.setO(0);
			expect(board.cells[0].getValue()).toEqual('|O|');
		});
	});

	describe('#hasWinningRow', () => {
		beforeEach(() => {
			board = new Board();
			board.startGame();
		});

		it('sets winner to true if three X\'s are found in a row', () => {
			for(let i = 0; i < 3; i++) {
				board.setX(i);
			};
			board.hasWinningRow()
			expect(board.winner).toEqual(true);
		});

		it('sets winner to true if three O\'s are found in a row', () => {
			for(let i = 0; i < 3; i++) {
				board.setO(i);
			};
			board.hasWinningRow()
			expect(board.winner).toEqual(true);
		});
	});

	describe('#hasWinningColumn', () => {
		beforeEach(() => {
			board = new Board();
			board.startGame();
		});

		it('sets winner to true if three X\'s are found vertically', () => {
			for(let i = 0; i < 9; i+=3) {
				board.setX(i);
			};
			board.hasWinningColumn()
			expect(board.winner).toEqual(true);
		});

		it('sets winner to true if three O\'s are found vertically', () => {
			for(let i = 1; i < 9; i+=3) {
				board.setO(i);
			};
			board.hasWinningColumn()
			expect(board.winner).toEqual(true);
		});
	});

	describe('#hasWinningDiagonal', () => {
		beforeEach(() => {
			board = new Board();
			board.startGame();
		});

		it('sets winner to true if three X\'s are found diagonally', () => {
			for(let i = 0; i < 9; i+=4) {
				board.setX(i);
			};
			board.hasWinningDiagonal()
			expect(board.winner).toEqual(true);
		});

		it('sets winner to true if three O\'s are found diagonally', () => {
			for(let i = 2; i < 9; i+=2) {
				board.setO(i);
			};
			board.hasWinningDiagonal()
			expect(board.winner).toEqual(true);
		});
	});
});