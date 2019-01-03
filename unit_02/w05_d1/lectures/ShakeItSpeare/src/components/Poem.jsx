import React from 'react';
import request from 'superagent';

// Poem is a react component... which when rendered... returns some JSX
// The property of 'author' will be rendered into that JSX
class Poem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { poem: null };
    this.getPoem = this.getPoem.bind(this);
  }
  componentDidMount() {
    this.getPoem();
  }
  getPoem() {
    const url = 'http://shakeitspeare.com/api/poem';
    request.get(url).then((response) => {
      const data = JSON.parse(response.text);
      const poem = data.poem;
      this.setState({ poem });
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.author}</h1>
        <p>{this.props.writtenOn}</p>
        <p>{this.state.poem}</p>
        <button onClick={this.getPoem} >New</button>
      </div>
    );
  }
}

export default Poem;
