import React from "react";
import { Icon, Container } from "semantic-ui-react";
import "./css/footer.css";

const Footer = ({ url }) => {
  return (
    <div>
      <Container className="footer">
        <h5 className="footer-header">© 2019</h5>
        <div className="icon-container">
          <a
            className="icon-div"
            href="https://github.com/fulin426/Color-Pic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="github" size="big" />
          </a>
          <a
            className="icon-div"
            href="https://www.linkedin.com/in/fu-lin-liu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="linkedin square" size="big" />
          </a>
          <a
            className="icon-div"
            href="mailto:fulin426@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="icon-div" name="mail" size="big" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
