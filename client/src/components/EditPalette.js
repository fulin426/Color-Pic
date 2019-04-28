import React from "react";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";
import ImageMain from "./ImageMain";
import ColorInfo from "./ColorInfo";
import ColorsList from "./ColorsList";
import ColorPicker from "./ColorPicker";
import "./css/editModal.css";
import { Header, Grid, Container, Button } from "semantic-ui-react";

const EditPalette = () => {
  return (
    <div>
      <Container textAlign="center">
        <Header as="h1" className="palette-header">
          EditPalette
        </Header>
        <Grid celled>
          <Grid.Row>
            <ImageMain />
          </Grid.Row>
          <Grid.Row>
            <ColorsList />
          </Grid.Row>
          <Grid.Row>
            <ColorPicker />
            <Grid.Column mobile={16} tablet={7} computer={6}>
              <ColorInfo />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="buttons-container">
          <Button as={Link} to="/MyPallettes">
            Cancel
          </Button>
          <Button color="blue">Confirm Edit</Button>
        </div>
      </Container>
    </div>
  );
};

export default EditPalette;
