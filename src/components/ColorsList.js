import React, { Component } from 'react';
import { connect } from 'react-redux';
import { analyzeImage } from '../actions';

// change return numberes to percent
const toPercent = num => {
  return Math.floor(num*100) + '%';
}

class ColorsList extends Component {
  componentDidMount() {
    // console.log(this.props.url);
    const url = this.props.url;
    this.props.analyzeImage(url);
  }

  render() {
    let sortColors = this.props.colors.sort((a,b) => b.value - a.value);
    const ColorsList = sortColors.map(color =>
      <div
        key={color.raw_hex}
        className="color-wrapper">
        <div
          // onClick={props.colorApiCall}
          data-id={color.raw_hex}
          className="color-square"
          style={{"backgroundColor": color.raw_hex}}>
        </div>
        <p>{color.raw_hex}</p>
        <p>{toPercent(color.value)}</p>
      </div>
    );

    return(
    <div>
      {ColorsList}
    </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    colors: state.colors,
    url: state.url.url
  };
};

export default connect(mapStateToProps, { analyzeImage })(ColorsList);
