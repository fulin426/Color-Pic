import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import LandingPageExample from './LandingPageExample';
import LandingIcons from './LandingIcons';
import LandingPageExampleSets from './LandingPageExampleSets';
import HowItWorks from './HowItWorks';
import './css/landingPage.css';

const LandingPage = () => {
  return(
    <div>
      <div className="dark-landing">
        <Container>
          <LandingPageExample />
        </Container>
      </div>
      <Container>
        <LandingIcons />
        <LandingPageExampleSets />
        <HowItWorks />
      </Container>
    </div>
  );
}

export default LandingPage;
