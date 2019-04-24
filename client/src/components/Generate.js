import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import Regenerate from './Regenerate';
import SavePalette from './SavePalette';
import {
  Container,
  Grid,
  Popup,
  Button,
  Icon,
  Header
} from 'semantic-ui-react';

class HomePage extends Component {
  savepaletteRender() {
    if(this.props.Authenticated === true) {
      return <SavePalette />;
    } else {
      return (
        <Popup
          trigger={<Button className="save-pallette"><Icon name='save' />  Save Palette</Button>}
          content="Log In required for this feature"
          position='bottom right'
          size='large'
          basic
        />
      );
    }
  }
  render() {
    return (
      <div className="HomePage">
        <Container textAlign='center'>
          <Header as="h1" className="generate-header">
            Choose a picture and analyze
          </Header>
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
                  {this.savepaletteRender()}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Authenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { })(HomePage);
