import React, { Component } from 'react';

class AuthorShow extends Component {
  constructor() {
    super();
    this.state = {
      author: {
        posts: []
      },
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/authors/${this.props.params.id}`)
      .then((response) => {
        response.json().then((author) => {
          this.setState({
            author
          })
        })
      })
  }

  mapPosts(posts) {

  }

  render() {
    const posts = this.state.author.posts;
    return (
      <div>
        <h1>{this.state.author.name}</h1>
        {
          posts.map((post) => {
            return (
              <p>{post.content}</p>
            )
          })
        }
      </div>
    )
  }
}

export default AuthorShow;