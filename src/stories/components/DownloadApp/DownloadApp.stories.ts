import type { Meta, StoryObj } from '@storybook/react';
import { DownloadApp } from './DownloadApp';

import iosStoreBadge from '../../assets/img/components/iOS-app-store-en.svg';
import googlePlayBadge from '../../assets/img/components/Google-Play-store-en.svg';

const meta: Meta<typeof DownloadApp> = {
  title: 'Components/DownloadApp',
  component: DownloadApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DownloadApp>;

export const Default: Story = {
  args: {
    title: 'Watch on Now TV',
    subtitle: 'Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.',
    deviceImage: 'https://www.nowtv.now.com/media/Design/minisite/img/now-devices.png',
    appIconSrc: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/Now-TV-app.svg',
    mobileLinks: [
      {
        href: 'https://apps.apple.com/hk/app/now-%E9%9A%A8%E8%BA%AB%E7%9D%87/id501956183?l=en',
        imageSrc: iosStoreBadge,
        imageAlt: 'Download on the App Store',
        id: 'ios-link',
      },
      {
        href: 'https://play.google.com/store/apps/details?id=com.pccw.nowplayer&hl=en',
        imageSrc: googlePlayBadge,
        imageAlt: 'Get it on Google Play',
        id: 'android-link',
      },
    ],
    tvLogos: [
      {
        src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/samsung-tizen.svg',
        alt: 'Samsung Tizen',
        className: 'samsung',
      },
      {
        src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/LG-smart-TV.png',
        alt: 'LG Smart TV',
        className: 'lg',
      },
      {
        src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/androidtv-logo.svg',
        alt: 'Android TV',
        className: 'android',
      },
      {
        src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/Panasonic-firetv.png',
        alt: 'Panasonic Fire TV',
        className: 'firetv',
      },
    ],
  },
};
