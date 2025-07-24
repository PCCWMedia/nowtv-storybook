import type { Meta, StoryObj } from '@storybook/react';
import Template6 from './Template-6';
import type { DeviceAppIcon } from '../../../components/Support/DevicesApp/DevicesApp';

import watchWebImg from '../../../assets/img/components/wm-nowplayer-web-2.png';
import googlePlayIcon from '../../../assets/img/components/Google-Play-store-en.svg';
import iosAppStoreIcon from '../../../assets/img/components/iOS-app-store-en.svg';
import nowplayerDeviceImg from '../../../assets/img/components/wm-nowplayer-device.png';

const meta: Meta<typeof Template6> = {
  title: 'Pages/Support/Template-6',
  component: Template6,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A support page template for the Now TV App, featuring device images, app download links, and quick navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Main heading title' },
    subTitle: { control: 'text', description: 'Subtitle/description' },
    mainImage: { control: 'text', description: 'Main device image URL' },
    mainImageAlt: { control: 'text', description: 'Alt text for main image' },
    appIcons: { control: 'object', description: 'Array of app icon objects' },
    links: { control: 'object', description: 'Array of link objects' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const appIcons: DeviceAppIcon[] = [
  {
        href: '#',
        imgSrc: watchWebImg,
        alt: 'Google Play Store',
  },
  {
    href: '#',
    imgSrc: googlePlayIcon,
    alt: 'Google Play Store',
  },
  {
    href: '#',
    imgSrc: iosAppStoreIcon,
    alt: 'iOS App Store',
  },
];

export const Default: Story = {
  args: {
    title: 'Now TV App',
    subTitle: 'Enjoy more of your favourites on demand, Screen Cast to watch on TV, and control your set top box with the Now TV App.',
    mainImage: nowplayerDeviceImg,
    mainImageAlt: 'Now TV App Devices',
    appIcons,
    links: [
      { label: 'Now TV App Features', href: '#', className: 'borderLink' },
      { label: 'Login with Now ID', href: '#', className: 'borderLink' },
      { label: 'Now TV FAQ', href: '#', className: 'borderLink' },
    ],
  },
}; 