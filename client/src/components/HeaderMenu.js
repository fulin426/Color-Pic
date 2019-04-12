import React from 'react';
import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';

const HeaderMenu = ({ children }) => (
  <div className="header-menu">
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default HeaderMenu;
