import React, { Component } from 'react';
import Gif from './gif.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    fetch('/api/gifs/google').then((response) => {
      response.json().then((gifs) => {
        const gifJSON = JSON.parse(gifs.text)
        this.setState({
          gifs: gifJSON.data
        })
      })
    })
    .catch(err => err)
  }

  render() {
    return (
      <div>
        {
          this.state.gifs.map((gif) => {
            return (
              <Gif
                gifData={gif}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;