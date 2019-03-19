import React from 'react';

const InputBar = (props) => {
  return(
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Img url"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={props.imgSearch}
        />
        <div
          className="input-group-append search-button"
          onClick={props.searchButtonClick}
        >
          <span className="input-group-text" id="basic-addon2">Search</span>
        </div>
      </div>
    </div>
  );
}

export default InputBar;
