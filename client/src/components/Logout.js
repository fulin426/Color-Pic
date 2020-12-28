import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import { clearColors } from "../actions/MyPaletteAPI";
import "./css/logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email)
  
  useEffect(() => {
    // If token expired log out user
    if (email === undefined) {
      dispatch(logoutUser());
    }
  }, [email]);

  const logout = () => {
    dispatch(logoutUser());
    dispatch(clearColors());
  }

  return (
    <div>
      <p className="username">Welcome! {email}</p>
      <Link to="/">
        <Button color="blue" className="logout-btn" onClick={() => logout()}>
          Log Out
        </Button>
      </Link>
    </div>
  );
}

export default Logout;
