import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Image, Icon} from 'semantic-ui-react';
import LandingPageExample from './LandingPageExample';

const LandingPage = () => {
  return(
    <Container>
      <LandingPageExample />
      <Grid
        stackable
        columns={3}
        divided
        style={{ marginBottom: '2em'}}
      >
         <Grid.Row>
           <Grid.Column textAlign='center'>
             <Icon name="images" size='huge'/>
             <h3>Capture colors from Images</h3>
           </Grid.Column>
           <Grid.Column textAlign='center'>
             <Icon name="adjust" size='huge'/>
             <h3>Adjust colors and refine palette</h3>
           </Grid.Column>
           <Grid.Column textAlign='center'>
             <Icon name="images" size='huge'/>
             <h3>Save palettes for future reference</h3>
           </Grid.Column>
         </Grid.Row>
       </Grid>
    </Container>
  );
}

export default LandingPage;
