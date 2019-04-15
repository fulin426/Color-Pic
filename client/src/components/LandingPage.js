import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import LandingPageExample from './LandingPageExample';
import LandingPageStep1 from './LandingPageStep1';
import LandingPageStep2 from './LandingPageStep2';
import LandingPageStep3 from './LandingPageStep3';

const LandingPage = ({ mobile }) => {
  return(
    <Container>
      <LandingPageExample />
      <LandingPageStep1 />
      <LandingPageStep2 />
      <LandingPageStep3 />
    </Container>
  );
}

LandingPage.propTypes = {
  mobile: PropTypes.bool,
}

export default LandingPage;
