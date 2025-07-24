// src/components/HeaderWithMobileNav.tsx
import React, { useState } from 'react';
import Header from '../NavigationBar/NavigationBar';
import MobileSideNav from '../MobileSideNav/MobileSideNav';
import './Header.scss';
import SearchInputForm from '../NavigationBar/DesktopNav/Search/SearchInputForm/SearchInputForm';
import MobileSideSearch from '../MobileSideSearch/MobileSideSearch';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsMobileNavActive(true);
  };

  const handleCloseMobileNav = () => {
    setIsMobileNavActive(false);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="header-with-mobile-nav">
      <Header
        status={status}
        username={username}
        tabActive={tabActive}
        onLoginClick={onLoginClick}
        onBurgerMenuClick={handleBurgerMenuClick}
        isSearchOpen={isSearchOpen}
        onSearchClick={toggleSearch}
      />

      <SearchInputForm isOpen={isSearchOpen} />
      
      <div className={`mobile-side-search-wrapper${isSearchOpen ? ' active' : ''}`}>
        <MobileSideSearch onClose={handleCloseSearch} />
      </div>
      {isSearchOpen && (
        <div className="mobile-nav-overlay" onClick={handleCloseSearch}></div>
      )}

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