import React, { Component } from 'react';

class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/authors').then((response) => {
      response.json().then((authors) => {
        this.setState({
          authors
        })
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.authors.map((author) => {
            return (
              <div>
                <h3>{author.name}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Authors;