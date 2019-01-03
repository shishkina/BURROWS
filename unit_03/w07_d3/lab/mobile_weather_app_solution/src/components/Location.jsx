import React, { Component } from 'react';

const propTypes = {
	locationName: React.PropTypes.string,
	locationZip: React.PropTypes.string,
	weatherData: React.PropTypes.func,
};

export default class Location extends Component {
	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.weatherData(this.props.locationZip)
	}
	render() {
		return(
			<div className="location">
				<li onClick={this.handleClick}>{this.props.locationName}</li>
			</div>
		)
	}
}