import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DevicesApp from './DevicesApp';

import deviceImage from '../../../assets/img/components/wm-nowplayer-device.png';
import appStoreImg from '../../../assets/img/components/iOS-app-store-en.svg';
import googlePlayStoreImg from '../../../assets/img/components/Google-Play-store-en.svg';
import watchWebImg from '../../../assets/img/components/wm-nowplayer-web-2.png';

const meta: Meta<typeof DevicesApp> = {
  title: 'Components/Support/DevicesApp',
  component: DevicesApp,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DevicesApp>;

export const Default: Story = {
  args: {
    mainImage: deviceImage,
    mainImageAlt: 'Devices',
    appIcons: [
        {
            href: '#',
            imgSrc: watchWebImg,
            alt: 'App 3',
        },
        {
            href: '#',
            imgSrc: appStoreImg,
            alt: 'App 1',
        },
        {
            href: '#',
            imgSrc: googlePlayStoreImg,
            alt: 'App 2',
        },
      
    ],
  },
}; 