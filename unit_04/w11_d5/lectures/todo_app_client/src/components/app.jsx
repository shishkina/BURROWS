import React, { Component } from 'react';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e) {
    const id = e.target.value
    this.props.router.push(`/authors/${id}`)
  }

  render() {
    return (
      <div>
        <form>
          <select onChange={this.handleSubmit}>
            {
              this.state.authors.map((author) => {
                return (
                  <option value={author.id}>{author.name}</option>
                )
              })
            }
          </select>
          <button type="submit">Show User</button>
        </form>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(App);