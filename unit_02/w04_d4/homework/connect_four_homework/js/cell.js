class Cell {
	constructor() {
		this.value = 0;
	}
	isEmpty() {
		return (this.value === 0);
	}
	getValue() {
		return this.value;
	}
	setValue(value) {
		this.value = value;
	}
}
