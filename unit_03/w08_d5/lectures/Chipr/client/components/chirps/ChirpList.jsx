import React from 'react';

const propTypes = {
  chirps: React.PropTypes.array,
};

class ChirpList extends React.Component {
  render() {
    return (
      <div>
        <h4>
          This feels... like it could look better...
        </h4>
        {this.props.chirps.map((chirp) => chirp.body).join(` & `)}
      </div>
    );
  }
}

ChirpList.propTypes = propTypes;

export default ChirpList;
