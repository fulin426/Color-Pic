import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Image,
  Segment,
  Icon,
} from 'semantic-ui-react';
import ExamplePhoto from '../images/ExamplePhoto.jpeg';
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const LandingPageExampleOne = ( {mobile} ) => {
  return(
    <div>
      <Grid
        columns={2}
        style={{ padding: '1em' }}
        >
        <Grid.Column
          width={9}
          style={{ padding: '0em' }}
          >
          <Segment style={{ padding: '1em' }}>
            <Image src={ ExamplePhoto } />
          </Segment>
        </Grid.Column>
        <Grid.Column
          width={7}
          style={{
            textAlign: "center",
            padding: '0em'
          }}
          >
          <Segment
            style={{
            padding: '0em 2em 0em 2em',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <p
              style={{
                fontSize: '24px'
              }}>
              <Icon name="images" />
              Capture colors from Images
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LandingPageExampleOne;
