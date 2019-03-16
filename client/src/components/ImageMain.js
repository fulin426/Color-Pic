import React from 'react';
import { connect } from 'react-redux';

const ImageMain = ({url}) => {
  return(
      <img
        className="sample-img"
        src={url}
        alt="analyze main"
      />
  );
};

const mapStateToProps = state => {
  return {
    url: state.url.url
  };
};

export default connect(mapStateToProps)(ImageMain);
