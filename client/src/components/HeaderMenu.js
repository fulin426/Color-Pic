import React from 'react';
import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';
import './css/headerMenu.css';

const HeaderMenu = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default HeaderMenu;
