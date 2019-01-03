class Cell {
	constructor() {
		this.value = null;
	};

	isEmpty() {
		return this.value ? false : true;
	};

	setValue(value) {
		this.value = value;
	};

	getValue() {
		return this.value;
	}
}