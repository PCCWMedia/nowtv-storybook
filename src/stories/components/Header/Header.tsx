// src/components/Header.tsx
import React from 'react';
import './header.scss';
import Logo from '../Logo/Logo';
import NavItemList from './DesktopNav/NavItemList/NavItemList';
import Search from './DesktopNav/Search/Search';
import ProfileButton from '../ProfileButton/ProfileButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

interface HeaderProps {
  status: 'normal' | 'subscription' | 'logged-in';
  username?: string; // Optional, only needed for logged-in status
  tabActive?: boolean; 
  onLoginClick?: () => void;
  onBurgerMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  status, 
  username, 
  tabActive, 
  onLoginClick,
  onBurgerMenuClick 
}) => {
  let navItems;
  if (status === 'normal') {
    navItems = [
      {
          label: 'Subscribe',
          className: tabActive ? 'active' : '',
          dropdownItems: [
              { href: '#', label: 'New Customer' },
              { href: '#', label: 'Existing Customer' },
              { href: '#', label: 'Now E Customer' }
          ]
      },
      {
          label: 'Support',
          href: '#'
      }
    ];
  } else if (status === 'logged-in') {
    navItems = [
      {
          label: 'Upgrade',
          className: tabActive ? 'active' : ''
      },
      {
          label: 'Support',
          href: '#'
      }
    ];
  }

  const watchItems = [
    {
        label: 'Watch',
        buttonClass: 'watch-button',
        dropdownItems: [
            { href: '#', label: 'Now TV Home' },
            { href: '#', label: 'TV Guide' },
            { href: '#', label: 'On Demand' }
        ]
    }
  ];

  return (
    <header className={`navigation ${status === 'subscription' ? 'subscription' : ''}`}>
      <div className='nav-left'></div>

      <div className="nav-center">
    
        <Logo/>

        {(status === 'normal' || status === 'logged-in') && 
          <NavItemList items={navItems as any} />
        }
        
      </div>

      <div className='nav-right'>

        {(status === 'normal' || status === 'logged-in') && 
          <Search onClick={() => console.log('Search clicked')} />
        }

        <a href="#" className="lang-button">中文</a>
        
        {(status === 'normal' || status === 'logged-in') && 
          <NavItemList items={watchItems} />
        }

        {status !== 'subscription' && (
          <ProfileButton
              status={status === 'logged-in' ? 'logged-in' : 'login'}
              username={username}
              onClick={onLoginClick}
          />
        )}

        {status !== 'subscription' && <BurgerMenu onClick={onBurgerMenuClick} />}

      </div>

    </header>
  );
};

export default Header;