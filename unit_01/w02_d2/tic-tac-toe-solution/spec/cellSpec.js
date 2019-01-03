describe('Cell', () => {
	let newCell;

	beforeEach(() => {
		newCell = new Cell();
	});

	describe('#new', () => {
		it('sets object value to null', () => {
			expect(newCell.value).toEqual(null);
		});
	});

	describe('#isEmpty', () => {
		it('returns false when the value is not null', () => {
			newCell.value = 'x';
			expect(newCell.isEmpty()).toEqual(false);
		});

		it('returns true when the value is null', () => {
			expect(newCell.isEmpty()).toEqual(true);
		});
	});

	describe('#setValue', () => {
		it('sets the value to passed argument', () => {
			newCell.setValue('O');
			expect(newCell.value).toEqual('O');
		});
	});

	describe('#getValue', () => {
		it('returns cell value', () => {
			expect(newCell.getValue()).toEqual(null);
		});
	});
});
