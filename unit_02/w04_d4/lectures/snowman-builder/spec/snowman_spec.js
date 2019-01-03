const Snowman = require('../snowman.js')

//I want my snowman builder to create a snowman object
//My winter wonderland is a friendly place, so I want each snowman to have a name
//In order for it to really be a snowman, it needs to have a carrot nose.
//It also needs stick arms.
//If the snowman is named Olaf, he should like warm hugs.

describe('Snowman', () => {
	let olaf;

	beforeEach(() => {
		olaf = new Snowman('Olaf');
	});

	describe('#new', () => {
		it('has a name', () => {
			expect(olaf.name).toBeDefined();
		});

		it('has a carrot nose', () => {
			expect(olaf.features).toContain('CarrotNose');
		});

		it('has stick arms', () => {
			expect(olaf.features).toContain('StickArms');
		});
	});

	describe('#likesWarmHugs', () => {
		it('returns true if snowmans name is Olaf', () => {
			expect(olaf.likesWarmHugs()).toEqual(true);
		});
	})
});