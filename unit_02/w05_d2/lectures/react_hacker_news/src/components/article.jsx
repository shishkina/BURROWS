import React from 'react';
import request from 'superagent';
import ArticleView from './article_view.jsx';
import ArticleModal from './article_modal.jsx';

const propTypes = {
  id: React.PropTypes.number.isRequired,
};

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const searchUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`;
    request.get(searchUrl).then((data) => {
      this.setState({
        data: data.body,
      });
    });
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <ArticleView
          title={this.state.data.title}
          author={this.state.data.by}
          openModal={this.openModal}
        />
        { this.state.modalOpen ? <ArticleModal closeModal={this.closeModal} url={this.state.data.url} /> : false }
      </div>
    );
  }
}

Article.propTypes = propTypes;

export default Article;

