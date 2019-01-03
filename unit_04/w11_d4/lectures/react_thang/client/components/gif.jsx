import React from 'react';

const propTypes = {
  gifData: React.PropTypes.object
}

const Gif = ({ gifData }) => {
  return (
    <div>
      <img src={gifData.images.original.url} />
    </div>
  )
}

Gif.propTypes = propTypes;

export default Gif;