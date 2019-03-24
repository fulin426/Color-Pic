import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

const ImageMain = ({url}) => {
  return(
      <Image
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
