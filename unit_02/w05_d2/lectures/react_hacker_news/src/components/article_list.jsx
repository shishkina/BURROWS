import React from 'react';
import request from 'superagent';
import Article from './article.jsx';

class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    request.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((data) => {
      this.setState({
        data: data.body,
      });
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        {
          this.state.data.map((id) => {
            return (
              <Article id={id} key={id}/>
            );
          })
        }
      </div>
    );
  }
}

export default ArticleList;
