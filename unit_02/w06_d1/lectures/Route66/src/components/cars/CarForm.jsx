import React from 'react';

const propTypes = {
  httpSave: React.PropTypes.func,
  redirect: React.PropTypes.func,
};

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localMake: '',
      localModel: '',
      localDescription: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditMake = this.handleEditMake.bind(this);
    this.handleEditModel = this.handleEditModel.bind(this);
    this.handleEditDescription = this.handleEditDescription.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.httpSave({
      make: this.state.localMake,
      model: this.state.localModel,
      description: this.state.localDescription,
    });
    this.props.redirect();
  }
  handleEditMake(e) {
    const data = e.target.value;
    this.setState({ localMake: data });
  }
  handleEditModel(e) {
    const data = e.target.value;
    this.setState({ localModel: data });
  }
  handleEditDescription(e) {
    const data = e.target.value;
    this.setState({ localDescription: data });
  }
  render() {
    return (
      <div className="car-builder">
        <p>CARFORM:  Build a Car!!!</p>
        <form onSubmit={this.handleSubmit}>
          <input name="make" value={this.state.localMake} onChange={this.handleEditMake} />
          <input name="model" value={this.state.localModel} onChange={this.handleEditModel} />
          <input name="description" value={this.state.localDescription} onChange={this.handleEditDescription} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

CarForm.propTypes = propTypes;

export default CarForm;
