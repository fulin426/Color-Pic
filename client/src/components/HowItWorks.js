import React from "react";
import { Header, Grid } from "semantic-ui-react";
import "./css/landingPage.css";

const HowItWorks = () => {
  return (
    <Grid stackable columns={2} verticalAlign="middle" centered>
      <Grid.Row className="explanation-container">
        <Grid.Column textAlign="center" computer={5} tablet={6} mobile={16}>
          <Header as="h1" className="explanation-header" textAlign="center">
            How it Works
          </Header>
        </Grid.Column>
        <Grid.Column computer={11} tablet={10} mobile={16}>
          <p className="explanation-text">
            The Color Pic application uses image recognition from{" "}
            <a
              href="https://www.clarifai.com/models/color-image-recognition-model-eeed0b6733a644cea07cf4c60f87ebb7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clarifai
            </a>{" "}
            to predict what the dominant colors are in a given picture. The
            colors are then sent to{" "}
            <a
              href="http://colormind.io/blog/extracting-colors-from-photos-and-video/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colormind
            </a>{" "}
            to generate a suggested color palette, it searches for colors that
            work well together. This works in a semi-random way, so hit
            regenerate to see a different color set each time.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HowItWorks;
