// src/components/HeaderWithMobileNav.tsx
import React, { useState } from 'react';
import Header from '../Header/Header';
import MobileSideNav from '../MobileSideNav/MobileSideNav';
import './HeaderWithMobileNav.scss';

interface HeaderWithMobileNavProps {
  status: 'normal' | 'logged-in';
  username?: string;
  tabActive?: boolean;
  onLoginClick?: () => void;
}

const HeaderWithMobileNav: React.FC<HeaderWithMobileNavProps> = ({
  status,
  username,
  tabActive,
  onLoginClick,
}) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsMobileNavActive(true);
  };

  const handleCloseMobileNav = () => {
    setIsMobileNavActive(false);
  };

  return (
    <div className="header-with-mobile-nav">
      <Header
        status={status}
        username={username}
        tabActive={tabActive}
        onLoginClick={onLoginClick}
        onBurgerMenuClick={handleBurgerMenuClick}
      />
      <div className={`mobile-nav-wrapper ${isMobileNavActive ? 'active' : ''}`}>
        <MobileSideNav
          status={status}
          username={username}
          tabActive={tabActive}
          onLoginClick={onLoginClick}
          onClose={handleCloseMobileNav}
        />
      </div>
      {isMobileNavActive && (
        <div className="mobile-nav-overlay" onClick={handleCloseMobileNav}></div>
      )}
    </div>
  );
};

export default HeaderWithMobileNav;