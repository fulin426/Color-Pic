import React from "react";
import { connect } from "react-redux";
import { Grid, Image } from "semantic-ui-react";

const ImageMain = ({ url }) => {
  return (
    <Grid.Column mobile={16} computer={13}>
      <Image className="sample-img" src={url} alt="analyze main" />
    </Grid.Column>
  );
};

const mapStateToProps = state => {
  return {
    url: state.url.url
  };
};

export default connect(mapStateToProps)(ImageMain);
