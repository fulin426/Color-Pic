import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyzeImage } from "../actions";
import { clearRecieved } from "../actions/colorInfoActions";
import { clearPosition } from "../actions/colorInfoActions";
import { Button, Icon } from "semantic-ui-react";

const Regenerate = () => {
  const url = useSelector(state => state.url.url);
  const dispatch = useDispatch();

  const handleClick = (url) => {
    // first clear the status from API
    dispatch(clearRecieved());
    // set position to 1
    dispatch(clearPosition());
    dispatch(analyzeImage(url));
  };

  return (
    <Button className="regen-btn" onClick={() => handleClick(url)}>
      <Icon name="redo" /> Regenerate
    </Button>
  );
}

export default Regenerate;
