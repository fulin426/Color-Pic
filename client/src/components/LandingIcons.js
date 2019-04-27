import React from "react";
import { Icon, Grid } from "semantic-ui-react";

const LandingIcons = () => {
  return (
    <Grid columns={3} style={{ margin: "4em 0em" }}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Icon name="images" size="huge" />
          <h3>Capture colors from Images</h3>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Icon name="adjust" size="huge" />
          <h3>Adjust colors and refine palette</h3>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Icon name="save" size="huge" />
          <h3>Save palettes for future reference</h3>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LandingIcons;
