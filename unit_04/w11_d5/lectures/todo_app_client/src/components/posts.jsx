import React, { Component } from 'react';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts').then((response) => {
      response.json().then((posts) => {
        this.setState({
          posts
        })
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map((post) => {
            return (
              <div>
                <p>{post.content}</p>
                <h3>{post.author.name}</h3>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Posts;