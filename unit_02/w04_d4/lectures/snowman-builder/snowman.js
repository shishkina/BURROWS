class Snowman {
	constructor(name) {
		this.name = name;
		this.features = ['CarrotNose', 'StickArms']
	}

	likesWarmHugs() {
		return this.name === 'Olaf' ? true : false;
	}
}

module.exports = Snowman;