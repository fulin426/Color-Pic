import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import HeaderMenu from './HeaderMenu';
import HomePageHeader from './HomePageHeader';
import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import Regenerate from './Regenerate';
import SavePalette from './SavePalette';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App.js">
        <HeaderMenu />
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
              <Grid.Column mobile={16} computer={6}>
                <ColorInfo />
                <div className="regen-save-buttons">
                  <Regenerate />
                  <SavePalette />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
