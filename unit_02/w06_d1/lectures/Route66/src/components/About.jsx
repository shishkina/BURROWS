import React from 'react';

const propTypes = {
  tagLine: React.PropTypes.string,
};

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>{this.props.tagLine}</h2>
        <p>ABOUT: We manage cars!... cause it's Route 66</p>
      </div>
    );
  }
}

About.propTypes = propTypes;

export default About;
