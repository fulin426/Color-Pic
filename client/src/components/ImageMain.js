import React from "react";
import { useSelector } from "react-redux";
import { Grid, Image } from "semantic-ui-react";

const ImageMain = () => {
  const url = useSelector(state => state.url.url);
  const state = useSelector(state => state);
  return (
    <Grid.Column mobile={16} computer={13}>
      <Image className="sample-img" src={url} alt="main" />
    </Grid.Column>
  );
};

export default ImageMain;
