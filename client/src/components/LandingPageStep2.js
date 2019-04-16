import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Icon,
} from 'semantic-ui-react';
import ExampleImageAdjust from '../images/ExampleImageAdjust.png';
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const LandingPageExampleTwo = () => {
  return(
    <div>
      <Grid
        verticalAlign='middle'
        textAlign='center'
        stackable
        columns={2}
        style={{ padding: '1em' }}
        >
        <Grid.Column
          columns={7}
          style={{
            textAlign: "center",
            padding: '0em'
          }}
          >
          <Segment
            fluid vertical
            style={{
            padding: '0em 2em 0em 2em',
            height: '100%',
          }}>
            <p
              style={{
                display: 'block',
                fontSize: '24px',
                textAlign: 'center'
              }}>
              <Icon name="adjust" />
              Adjust colors and refine palette.
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column
          columns={9}
          style={{ padding: '0em' }}
          >
          <Segment style={{ padding: '1em' }}>
            <Image src={ ExampleImageAdjust } />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LandingPageExampleTwo;
