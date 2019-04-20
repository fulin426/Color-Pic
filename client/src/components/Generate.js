import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageHeader from './HomePageHeader';
import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import Regenerate from './Regenerate';
import SavePalette from './SavePalette';
import LoginModal from './LoginModal';
import { Container, Grid, Modal } from 'semantic-ui-react';

class HomePage extends Component {
  savepaletteRender() {
    if(this.props.Authenticated === true) {
      return(<SavePalette />);
    } else {
      return (
        <LoginModal
          buttonOne="Save Palette"
        />
      );
    }
  }
  render() {
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
