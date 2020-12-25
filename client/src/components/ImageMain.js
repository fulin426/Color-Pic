import React from "react";
import { useSelector } from "react-redux";
import { Grid, Image } from "semantic-ui-react";

const ImageMain = () => {
  const url = useSelector(state => state.url.url)
  return (
    <Grid.Column mobile={16} computer={13}>
      <Image className="sample-img" src={url} alt="analyze main" />
    </Grid.Column>
  );
};

export default ImageMain;
