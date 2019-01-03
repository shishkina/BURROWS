describe('Built in Matchers', () => {

	describe('toEqual', () => {
		//To equal compares the actual to the expected using ===
		it('passes if the subject and expectation are equivalent', () => {
			expect('Hello World').toEqual('Hello World');
			expect('Hello World').not.toEqual('Goodbye World');
			expect([1,2,3]).toEqual([1,2,3]);
			expect({foo: 1}).toEqual({foo: 1});
		});
	});

	describe('toBe', () => {
		let myObj = {foo: 'bar'};
		it('passes if subject and expectation are the same object', () => {
			expect(myObj).toBe(myObj);
			expect(true).toBe(true);
			expect(1).toBe(1);
			expect('hello').toBe('hello');

			expect({foo: 'bar'}).not.toBe(myObj)
		});
	});

	describe('toMatch', () => {
		it('compares the actual to the expected using a regular expression', () => {
			expect('Hello Jasmine').toMatch(/jasmine/i);
			expect('phone: 123-45-67').toMatch(/\d{3}-\d{2}-\d{2}/)
		});
	});

	describe('toBeDefined', () => {
		it('passes if the subject is not undefined', () => {
			expect({}).toBeDefined();
			expect(true).toBeDefined();
			expect(null).toBeDefined();
			expect(undefined).not.toBeDefined();
		});
	});

	describe('toBeNull', () => {
		it('passes if the subject is null', () => {
			expect(null).toBeNull();
			expect(undefined).not.toBeNull();
			expect({}).not.toBeNull();
		});
	});

	describe('toBeTruthy', () => {
		it('passes if subject is truthy', () => {
			expect(true).toBeTruthy();
			expect({}).toBeTruthy();
			expect(false).not.toBeTruthy();
			expect(0).not.toBeTruthy();
			expect(NaN).not.toBeTruthy();
			expect(null + '').toBeTruthy();
		});
	});

	describe('toBeFalsy', () => {
		it('passes if the subject is falsy', () => {
			expect(false).toBeFalsy();
			expect(undefined).toBeFalsy();
			expect(true).not.toBeFalsy();
		});
	});

	describe('toContain', () => {
		it('passes if the expected item is in an array', () => {
			expect([1,2,3]).toContain(2);
			expect([1,2,3]).not.toContain(4);
			expect('abcdefghij').toContain('def');
		});
	});

	describe('toBeLessThan', () => {
		it('passes if the actual is less than the expected', () => {
			expect(2).toBeLessThan(3);
			expect('a').toBeLessThan('b');
		});
	});

	describe('toBeGreaterThan', () => {
		it('passes if the actual is greater than the expected', () => {
			expect(3).toBeGreaterThan(2);
			expect('a').not.toBeGreaterThan('b');
			expect(1).toBeGreaterThan(null);
		});
	});

	describe('toThrow', () => {
		it('passes if the function throws an exception', () => {
			let obj = {
				doSomething: function() {
					throw new Error('Unexpected Error');
				}
			}

			expect(obj.doSomething).toThrow('Unexpected Error');
		});
	});

	describe('toBeCloseTo', () => {
		it('checks that the expected item is equal to the actual item up to a given level of decimal precision', () => {
			expect(1.223).toBeCloseTo(1.22);
			expect(1.233).not.toBeCloseTo(1.22);
			expect(1.225).toBeCloseTo(1.224);
			expect(1.23326).toBeCloseTo(1.23324, 4);
		})
	});
});


