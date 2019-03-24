import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Grid, Header } from 'semantic-ui-react';
import './App.css';

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
      <Container textAlign='center'>
        <Header as="h1" className="header">
          Choose a picture and analyze
        </Header>
        <Grid celled>
          <Grid.Row>
            <Grid.Column mobile={16} computer={3}>
              <ImageSelection />
            </Grid.Column>
            <Grid.Column mobile={16} computer={13}>
              <ImageMain />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              <ColorsList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <Grid.Column mobile={16} computer={10}>
              <ColorPicker />
            </Grid.Column>
            <Grid.Column mobile={10} computer={6}>
              <ColorInfo />
              <Regenerate />
              <SavePalette />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

export default App;
