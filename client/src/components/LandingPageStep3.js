import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Icon,
} from 'semantic-ui-react';
import MyPalettesExample from '../images/MyPalettesExample.png';
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const LandingPageExampleThree = () => {
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
          computer={9}
          style={{ padding: '0em' }}
          >
          <Segment
            style={{
              textAlign: 'center',
              padding: '1em'
            }}
          >
            <Image
            centered
            style={{ maxHeight: '400px'}}
            src={ MyPalettesExample }
          />
          </Segment>
        </Grid.Column>
        <Grid.Column
          computer={7}
          style={{ padding: '0em' }}
          >
          <Segment
            style={{
            padding: '0em 2em 0em 2em',
            height: '100%'
          }}>
            <p
              style={{
                display: 'block',
                fontSize: '24px'
              }}>
              <Icon name="save" />
              Save palettes for future reference
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LandingPageExampleThree;
