// class App {
// 	greeting() {
// 		let whatever = new Whatever();
// 		let sayHello = whatever.sayHello();
// 		console.log(`${sayHello} William`);
// 	}
// };

// let x = new App();
// x.greeting();

window.onload = function() {
	let pNodes = document.querySelectorAll('.para');
	pNodes.forEach((node) => {
		// removeParaFromDom(node);
		cloneParaNode(node);
	});

	function removeParaFromDom(node) {
		node.addEventListener('click', function(e) {
		 	// e.target.remove();
		 	this.remove();
		});
	};

	function cloneParaNode(node) {
		node.addEventListener('click', function(e) {
			let clonedNode = node.cloneNode(true);
			cloneParaNode(clonedNode);
			document.body.appendChild(clonedNode);
		});
	};
};