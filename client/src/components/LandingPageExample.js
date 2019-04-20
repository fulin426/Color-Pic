import React from 'react';
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LandingPageExamplePicture from '../images/LandingPageExample.png';
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const LandingPageExample = () => {
  return(
    <div>
      <Grid
        stackable
        columns={2}
        style={{ padding: '1em', marginBottom: '3em' }}
        >
        <Grid.Column
          width={10}
          style={{ padding: '0em' }}
          >
          <Segment style={{ padding: '0em' }}>
            <Image src={ LandingPageExamplePicture } alt='Landing Page Example Palette'/>
          </Segment>
        </Grid.Column>
        <Grid.Column
          width={6}
          style={{
            textAlign: "center",
            padding: '0em'
          }}
          >
          <Segment style={{
            padding: '0em 1em 3em 1em',
            height: '100%'
          }}>
            <Header
              as="h1"
              style={{
                fontSize: '36px',
                marginTop: '3rem',
                marginBottom: '4rem'
              }}
            >
              Fast and Efficient color palettes generator
            </Header>
            <p
              style={{
                fontSize: '20px',
                marginBottom: '4rem'
              }}
            >
              Create, edit, and save schemes
            </p>
            <Link to="/Generate">
              <Button
                style={{
                  fontSize: '16px',
                  marginBottom: '1rem'
                }}
              >
                Start Generator
              </Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LandingPageExample;
