// src/components/MobileSideNav.tsx
import React from 'react';
import './MobileSideNav.scss';
import ProfileButton from '../ProfileButton/ProfileButton';
import MenuList from './MenuList/MenuList';
import type { MenuItem } from './MenuList/MenuList';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

interface MobileMenuProps {
  status: 'normal' | 'subscription' | 'logged-in';
  username?: string;
  tabActive?: boolean;
  onLoginClick?: () => void;
  onClose?: () => void; // 新增 onClose 屬性
}

const MobileMenu: React.FC<MobileMenuProps> = ({ status, username, tabActive, onLoginClick, onClose }) => {
  const mainMenuItems: MenuItem[] = [
    {
      type: 'link',
      title: 'Home',
      href: '#',
      isActive: true,
    },
    {
      type: status === 'logged-in' ? 'link' : 'toggle',
      title: status === 'logged-in' ? 'Upgrade' : 'Subscribe',
      subItems: status === 'logged-in' ? undefined : [
        {
          title: 'New Customer',
          href: '#',
        },
        {
          title: 'Existing Customer',
          href: '#',
        },
        {
          title: 'Now E Customer',
          href: '#',
        },
      ],
    },
    {
      type: 'link',
      title: 'Support',
      href: '#',
      isActive: false,
    }
  ];

  const watchMenuItems: MenuItem[] = [
    {
      type: 'toggle',
      title: 'Watch',
      subItems: [
        {
          title: 'Now Player Home',
          href: '/now-player'
        },
        {
          title: 'TV Guide',
          href: '/tv-guide'
        },
        {
          title: 'On Demand',
          href: '/on-demand'
        }
      ]
    }
  ];

  return (
    <nav className='sideMenu'>
      <div className='head'>
        <div className='controls'>
          <a className="lang-button" href="#">中文</a>
          <a className="nav-close-button" onClick={onClose}><i className="icon-close"></i></a>
        </div>
        <div className='button-wrapper'>
          {status !== 'subscription' && (
            <ProfileButton
              status={status === 'logged-in' ? 'logged-in' : 'login'}
              username={username}
              onClick={onLoginClick}
            />
          )}
          <div className="watch-menu-wrapper">
            <MenuList 
              status={status === 'subscription' ? 'logged-in' : status} 
              items={watchMenuItems} 
              tabActive={tabActive}
            />
          </div>
        </div>
      </div>  
      <div className='mobile-menu-wrapper'>
        <MenuList 
          status={status === 'subscription' ? 'logged-in' : status} 
          items={mainMenuItems} 
          tabActive={tabActive}
        />
      </div>
      <SocialMediaLinks />
    </nav>
  );
};

export default MobileMenu;