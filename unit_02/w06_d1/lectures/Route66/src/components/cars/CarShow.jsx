import React from 'react';

const propTypes = {
  cars: React.PropTypes.object,
  params: React.PropTypes.object,
  httpDelete: React.PropTypes.func,
  redirect: React.PropTypes.func,
};

class CarShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleDeleteClick() {
    const id = this.props.params.carId;  // Params from the URL
    this.props.httpDelete(id);
    this.props.redirect();
  }
  render() {
    const id = this.props.params.carId;  // Params from the URL
    const defaultCar = { make: '', model: '', description: '' };
    const car = this.props.cars[id] || defaultCar;  // Props from APP
    return (
      <div className="car-item">
        <h2>{car.make} {car.model}</h2>
        <p>{car.description}</p>
        <button onClick={this.handleDeleteClick}>x</button>
      </div>
    );
  }
}

CarShow.propTypes = propTypes;

export default CarShow;
