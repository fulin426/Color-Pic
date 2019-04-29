import React from "react";
import LandingPageExample from "./LandingPageExample";
import LandingIcons from "./LandingIcons";
import LandingPageExampleSets from "./LandingPageExampleSets";
import SaveExample from "./SaveExample";
import HowItWorks from "./HowItWorks";
import { Container } from "semantic-ui-react";
import "./css/landingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="dark-landing">
        <Container>
          <LandingPageExample />
        </Container>
      </div>
      <Container>
        <LandingIcons />
        <LandingPageExampleSets />
        <SaveExample />
        <HowItWorks />
      </Container>
    </div>
  );
};

export default LandingPage;
