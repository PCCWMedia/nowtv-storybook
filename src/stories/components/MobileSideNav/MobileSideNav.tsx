// src/components/MobileSideNav.tsx
import React from 'react';
import './MobileSideNav.scss';
import ProfileButton from '../ProfileButton/ProfileButton';
import MenuList, { type MenuItem } from './MenuList/MenuList';
import SocialMediaLinks from '../Footer/SocialMediaLinks/SocialMediaLinks';

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
      href: status === 'logged-in' ? undefined : '/get-started/',
      subItems: status === 'logged-in' ? undefined : [
        {
          title: 'New Customer',
          href: '?path=/story/pages-getstarted--default',
        },
        {
          title: 'Existing Customer',
          href: '/get-started/',
        },
        {
          title: 'Now E Customer',
          href: '?path=/story/pages-getstarted--like-now-e',
        },
      ],
    },
    {
      type: 'link',
      title: 'Support',
      href: '?path=/story/pages-support-landing--default',
      isActive: false,
    }
  ];


  const watchMenuItems: MenuItem[] = [
    {
      type: 'toggle',
      title: 'Watch',
      subItems: [
        {
          title: 'Now TV Home',
          href: 'https://nowplayer.now.com/'
        },
        {
          title: 'TV Guide',
          href: 'https://nowplayer.now.com/tvguide'
        },
        {
          title: 'On Demand',
          href: 'https://nowplayer.now.com/ondemand'
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