import React from 'react';

const propTypes = {
  weatherData: React.PropTypes.func.isRequired,
}

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.weatherData(this.state.input);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <div>
            <button
              type="submit"
            >Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
