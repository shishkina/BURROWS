//Paunch Burger POS

// We are going to build only ONE component of a POS system.
// Our component is the interface for the waitstaff
// We will LOG our orders to the console... but in our bigger version of this...
// These would be rendered possibily on a different screen... for the chef!

console.log('Welcome to Paunch Burger');

//render the POS to the DOM
//containerNode is a DOM element
class POS {
	constructor(containerNode) {
		this.el = containerNode;
	}
	createOrderPanel(){
		const orderPanel = document.createElement('div');
		orderPanel.setAttribute('id', 'order-panel');
		this.el.appendChild(orderPanel);
	}
	//numMenuItems is a Number
	addOrderMenuItems(numMenuItems){
		let orderSelector;
		let orderLabel;

		const orderForm = document.createElement('form');
		
		for (let i = 1; i <= numMenuItems; i++){
			orderLabel = document.createElement('label');
			orderLabel.innerHTML = `Item ${i}`;
			orderForm.appendChild(orderLabel);

			orderSelector = document.createElement('input');
			orderSelector.setAttribute('type', 'checkbox');
			orderSelector.setAttribute('class', 'order-button');
			orderSelector.setAttribute('id', `item - ${i}`)
			orderForm.appendChild(orderSelector);
		}
		
		//Create input for form submit	
		const submitNode = document.createElement('input');
		submitNode.setAttribute('type', 'submit');
		orderForm.appendChild(submitNode);

		this.el.querySelector('#order-panel').appendChild(orderForm);
	}
	setOrderSubmitHandler() {
		const orderForm = this.el.querySelector('form');
		orderForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const inputs = e.target.querySelectorAll('input[type="checkbox"]');
			const checkedIndices = [];
			for(let i = 0; i < inputs.length; i++){
				if (inputs[i].checked) {
					checkedIndices.push(inputs[i].id)
				}
			};
			console.log(`Please cook: ${checkedIndices}`);
		})
	}
	render(){
		this.createOrderPanel();
		this.addOrderMenuItems(3);
		this.setOrderSubmitHandler();
	}
}

const a = new POS(document.querySelector('#root'));
a.render();



