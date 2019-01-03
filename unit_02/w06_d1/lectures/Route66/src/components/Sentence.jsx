import React from 'react';

const propTypes = {
  params: React.PropTypes.object,
};

class Sentence extends React.Component {
  render() {
    return (
      <h1 className="about">
        {this.props.params.name} {this.props.params.verb}ed the {this.props.params.noun}
      </h1>
    );
  }
}

Sentence.propTypes = propTypes;

export default Sentence;
