import React from 'react';
import { connect } from 'react-redux';

const ImageMain = ({url}) => {
  return(
    <div className="left floated center aligned eleven wide column">
        <img
          className="sample-img"
          src={url}
          alt="analyze main"
        />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    url: state.url.url
  };
};

export default connect(mapStateToProps)(ImageMain);
