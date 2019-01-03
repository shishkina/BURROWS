import React from 'react';
import request from 'superagent';
import Line from './Line.jsx';

const propTypes = {
  message: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { doors: [] };
  }
  componentDidMount() {
    this.getSubwayData();
  }
  getSubwayData() {
    request.get('/data/subway.json')
           .then((response) => {
             const subwayNetworkData = response.body;
             const cleanData = subwayNetworkData.data.map((lineData) => {
               const [sid, id, position, createdAt, createdMeta, updatedAt,
                updatedMeta, meta, theGeom, name, url, lines] = lineData;
               return {
                 address: name,
                 lines: lines.split('-'),
               };
             });
             this.setState({
               doors: cleanData,
             });
           });
  }
  render() {
    const lineElements = this.state.doors.map((door, idx) => {
      return (<Line key={idx} lines={door.lines} address={door.address} />);
    });
    return (
      <div className="container">
        {lineElements}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
