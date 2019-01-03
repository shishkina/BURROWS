import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  make: React.PropTypes.string,
  model: React.PropTypes.string,
  id: React.PropTypes.string,
};

const CarItem = (props) => {
  const element = (
    <div className="car-item">
      <Link to={`/cars/${props.id}`} >
        <h2>{props.make}: ({props.model})</h2>
      </Link>
    </div>
  );
  return element;
};

CarItem.propTypes = propTypes;

export default CarItem;
