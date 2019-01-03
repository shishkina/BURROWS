import React from 'react';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  openModal: React.PropTypes.func.isRequired,
};

const ArticleView = ({ title, author, openModal }) => {
  return (
    <div className="article" onClick={openModal}>
      <h1 className="title">{title}</h1>
      <h3 className="author">Author: {author}</h3>
    </div>
  );
};

ArticleView.propTypes = propTypes;

export default ArticleView;