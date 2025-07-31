// src/components/Header.tsx
import React from 'react';
import './NavigationBar.scss';
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
  isSearchOpen?: boolean;
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  status, 
  username, 
  tabActive, 
  onLoginClick,
  onBurgerMenuClick,
  isSearchOpen,
  onSearchClick
}) => {
  let navItems;
  if (status === 'normal') {
    navItems = [
      {
          label: 'Subscribe',
          className: tabActive ? 'active' : '',
          dropdownItems: [
              { href: '?path=/story/pages-getstarted--default', label: 'New Customer' },
              { href: '/get-started/', label: 'Existing Customer' },
              { href: '?path=/story/pages-getstarted--like-now-e', label: 'Now E Customer' }
          ],
          href: '/get-started/'
      },
      {
          label: 'Support',
          href: '?path=/story/pages-support-landing--default'
      },
      {
          label: 'Redeem Code',
          dropdownItems: [
            { href: '#', label: 'Redeem Activation Code' },
            { href: '#', label: 'How to use Other Codes' }
          ]
      },
      {
          label: 'Now Today',
          dropdownItems: [
            { href: 'https://news.now.com/home', label: 'Now News', target: '_blank' },
            { href: 'https://finance.now.com/', label: 'Now Finance', target: '_blank'},
            { href: 'https://sports.now.com/home', label: 'Now Sports', target: '_blank' }
          ]
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
          href: '?path=/story/pages-support-landing--default'
      },
      {
          label: 'Redeem Code',
          dropdownItems: [
            { href: '#', label: 'Redeem Activation Code' },
            { href: '#', label: 'How to use Other Codes' }
          ]
      },
      {
          label: 'Now Today',
          dropdownItems: [
            { href: 'https://news.now.com/home', label: 'Now News', target: '_blank' },
            { href: 'https://finance.now.com/', label: 'Now Finance', target: '_blank'},
            { href: 'https://sports.now.com/home', label: 'Now Sports', target: '_blank' }
          ]
      }
    ];
  }

  const watchItems = [
    {
        label: 'Watch',
        buttonClass: 'watch-button',
        dropdownItems: [
            { href: 'https://nowplayer.now.com/', label: 'Now TV Home', target: '_blank' },
            { href: 'https://nowplayer.now.com/tvguide', label: 'TV Guide', target: '_blank' },
            { href: 'https://nowplayer.now.com/ondemand', label: 'On Demand', target: '_blank' }
        ]
    }
  ];

  return (
    <header className={`navigation ${status === 'subscription' ? 'subscription' : ''}`}>
      <div className='nav-left'></div>

      <div className="nav-center">
    
        <Logo href="?path=/story/pages-home--default"/>

        {(status === 'normal' || status === 'logged-in') && 
          <NavItemList items={navItems as any} />
        }
        
      </div>

      <div className='nav-right'>

        {(status === 'normal' || status === 'logged-in') && 
          <Search onClick={onSearchClick} isOpen={isSearchOpen} />
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