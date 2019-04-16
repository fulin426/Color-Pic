import React from 'react';
import HomePageHeader from './HomePageHeader';
import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import Regenerate from './Regenerate';
import SavePalette from './SavePalette';
import { Container, Grid } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Container textAlign='center'>
        <HomePageHeader />
        <Grid celled>
          <Grid.Row>
            <ImageSelection />
            <ImageMain />
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <ColorsList />
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <ColorPicker />
            <Grid.Column mobile={16} tablet={7} computer={6}>
              <ColorInfo />
              <div className="regen-save-buttons">
                <Regenerate />
                <SavePalette />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
