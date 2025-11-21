// src/components/HeaderWithMobileNav.tsx
import React, { useState, useEffect } from 'react';
import Header from '../NavigationBar/NavigationBar';
import MobileSideNav from '../MobileSideNav/MobileSideNav';
import './Header.scss';
import SearchInputForm from '../NavigationBar/DesktopNav/Search/SearchInputForm/SearchInputForm';
import MobileSideSearch from '../MobileSideSearch/MobileSideSearch';

interface HeaderWithMobileNavProps {
  status: 'normal' | 'subscription' | 'logged-in';
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

  useEffect(() => {
    if (isMobileNavActive || isSearchOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    // Clean up in case component unmounts while modal is open
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isMobileNavActive, isSearchOpen]);

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