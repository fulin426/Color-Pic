import React from 'react';

// change return numberes to percent
const toPercent = num => {
  return Math.floor(num*100) + '%';
}

const ColorsList = (props) => {
  let sortColors = props.colors.sort((a,b) => b.value - a.value);
  const ColorsList = sortColors.map(color =>
    <div
      key={color.raw_hex}
      className="color-wrapper">
      <div
        onClick={props.colorApiCall}
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

export default ColorsList;
