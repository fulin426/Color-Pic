import React from "react";
import SavedPalettesExample from "../images/Save_Preview.jpg";
import { Grid, Image, Header } from "semantic-ui-react";

const SaveExample = () => {
  return (
    <div className="save-example-container">
      <Grid reversed="tablet computer" verticalAlign="middle" centered>
        <Grid.Row>
          <Grid.Column computer={4} tablet={5} mobile={16}>
            <Header as="h1" className="save-header" textAlign="center">
              Create Your Own Gallery
            </Header>
          </Grid.Column>
          <Grid.Column
            className="save-example-img"
            computer={12}
            tablet={11}
            mobile={16}
          >
            <Image src={SavedPalettesExample} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SaveExample;
