import React from 'react';
import CarItem from './CarItem.jsx';

const propTypes = {
  cars: React.PropTypes.object,
};

const CarList = (props) => {
  const ids = Object.keys(props.cars);
  const carElements = ids.map((id, idx) => {
    const car = props.cars[id];
    return (
      <CarItem
        make={car.make}
        model={car.model}
        id={id}
        key={idx}
      />
    );
  });
  return (
    <div className="car-list">
      <p>CARLIST: Check out all these cars!</p>
      <ul>
        {carElements}
      </ul>
    </div>
  );
};

CarList.propTypes = propTypes;

export default CarList;
