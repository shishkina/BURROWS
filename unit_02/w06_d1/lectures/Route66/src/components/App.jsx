import React from 'react';
import { Link, hashHistory } from 'react-router';
import request from 'superagent';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {},
      tagLine: 'These are some good cars',
    };
    this.httpPostCar = this.httpPostCar.bind(this);
    this.httpDeleteCar = this.httpDeleteCar.bind(this);
    this.redirectToCars = this.redirectToCars.bind(this);
  }
  componentDidMount() {
    this.httpGetCars();
  }
  httpGetCars() {
    const url = 'https://meerkats-e16d1.firebaseio.com/cars.json';
    request.get(url)
           .then((response) => {
             const cars = response.body;
             this.setState({ cars });
           });
  }
  httpPostCar(data) {
    const url = 'https://meerkats-e16d1.firebaseio.com/cars.json';
    request.post(url)
           .send(data)
           .then(() => {
             this.httpGetCars();
           });
  }
  httpDeleteCar(id) {
    const url = `https://meerkats-e16d1.firebaseio.com/cars/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetCars();
           });
  }
  redirectToCars() {
    hashHistory.push('/cars');
  }
  render() {
    const childrenWProps = React.cloneElement(this.props.children, {
      cars: this.state.cars,  // passing props to all children
      tagLine: this.state.tagLine,
      httpSave: this.httpPostCar,
      httpDelete: this.httpDeleteCar,
      redirect: this.redirectToCars,
    });
    return (
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/cars/new">NewCar</Link></li>
        </ul>
        <h1>Here is the app!</h1>
        {childrenWProps}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
