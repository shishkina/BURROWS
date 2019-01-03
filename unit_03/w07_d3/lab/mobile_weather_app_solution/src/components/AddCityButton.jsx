import React, { Component } from 'react';

const propTypes = {
  locations: React.PropTypes.array,
  cityName: React.PropTypes.string,
  cityZip: React.PropTypes.string,
  addCityData: React.PropTypes.func
};

export default class AddCityButton extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let locationsArray = this.props.locations.concat({ 
					name: this.props.cityName,
					zip: this.props.cityZip
				});

		this.props.addCityData(locationsArray);
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Add City</button>
			</div>
		)
	}
}