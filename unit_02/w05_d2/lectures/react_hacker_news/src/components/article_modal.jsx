import React from 'react';

const propTypes = {
  url: React.PropTypes.string.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

const ArticleModal = ({ url, closeModal }) => {
  return (
    <div id="article-modal" onClick={closeModal}>
      <div id="show-article">
        <iframe src={url} />
        <h2 id="close">CLOSE</h2>
      </div>
    </div>
  );
};

ArticleModal.propTypes = propTypes;

export default ArticleModal;