import React from "react";
import { Link } from "react-router-dom";
import "./css/landingPage.css";
import { Grid, Segment, Header, Button } from "semantic-ui-react";

const LandingPageExample = () => {
  return (
    <div className="dark-landing">
      <Grid columns={1} verticalAlign="middle" className="grid-size">
        <Grid.Column width={16} textAlign="center">
          <Segment className="dark-landing">
            <Header as="h1" className="landing-header">
              Fast and Efficient color palettes generator
            </Header>
            <p className="text-style">Create, edit, and save schemes</p>
            <Link to="/Generate">
              <Button color="blue" className="landing-btn">
                Start Generator
              </Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LandingPageExample;
