// src/components/MobileSideNav.tsx
import React from 'react';
import './MobileSideNav.scss';
import ProfileButton from '../ProfileButton/ProfileButton';
import MenuList, { type MenuItem } from './MenuList/MenuList';
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

  const footerMenuItems: MenuItem[] = [
    {
      type: 'toggle',
      title: 'About',
      isActive: false,
      subItems: [
        {
          title: 'Now TV',
          href: '/about'
        },
        {
          title: 'Advertising',
          href: '/advertising'
        }
      ]
    },
    {
      type: 'link',
      title: 'Contact Us',
      href: '/contact-us',
      isActive: false,
    },
    {
      type: 'toggle',
      title: 'More Now',
      isActive: false,
      subItems: [
        {
          title: 'Now.com',
          href: 'https://now.com/',
          target: '_blank',
        },
        {
          title: 'Now Video Express',
          href: 'https://nowplayer.now.com/ondemand/seeall?nodeId=201510160000066',
          target: '_blank',
        }
      ]
    },
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
        <div className='menu-wrapper'>
          <MenuList 
            status={status === 'subscription' ? 'logged-in' : status} 
            items={mainMenuItems} 
            tabActive={tabActive}
          />
        </div>

        <div className='divider'>
          <hr />
        </div>

        <div className='menu-wrapper footer-menu-wrapper'>
          <MenuList 
            status={status === 'subscription' ? 'logged-in' : status} 
            items={footerMenuItems} 
            tabActive={tabActive}
          />
        </div>

        <div className='divider'>
          <hr />
        </div>

      </div>
      <SocialMediaLinks />
    </nav>
  );
};

export default MobileMenu;