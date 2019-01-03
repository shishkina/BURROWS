import React, { Component } from 'react';
import Location from './Location.jsx';

const propTypes = {
	locations: React.PropTypes.array,
  weatherData: React.PropTypes.func,
};

export default class LocationList extends Component {
	render() {

		let list = this.props.locations.map((location, idx) => {
			return (
				<Location
					key={idx}
					locationName={location.name} 
					locationZip={location.zip}
					weatherData={this.props.weatherData}
				/>
			)
		})
		return(
			<div className="location-list">
				<ul>
				{list}
				</ul>
			</div>
		)
	}
}