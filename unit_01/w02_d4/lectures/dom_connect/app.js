class ButtonClick {
	onClick() {
		console.log('your using my click function thing');
	};
}


window.onload = function() {
	let bClick = new ButtonClick();

	document.getElementById('clickme').addEventListener('click', bClick.onClick);
}