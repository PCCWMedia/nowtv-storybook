import type { Meta, StoryObj } from '@storybook/react';
import { FullscreenBG } from './FullscreenBG';

import banner1Desktop from '../../../assets/img/home/h1_1920x1080.jpg';
import banner1Mobile from '../../../assets/img/home/h1_750x650.jpg';
import banner2Desktop from '../../../assets/img/home/1500x720_YourMovieExpress.jpg';
import banner2Mobile from '../../../assets/img/home/750x700_YourMovieExpress.jpg';

const meta: Meta<typeof FullscreenBG> = {
  title: 'Components/Fullscreen/FullscreenBG',
  component: FullscreenBG,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FullscreenBG>;

export const LeftPosition: Story = {
  args: {
    desktopImage: banner2Desktop,
    mobileImage: banner2Mobile,
    contentPosition: 'left',
    title: 'Your Movie Express',
    description: 'Enjoy the greatest titles from Video Express on a pay-per-view basis.',
    channelLogo: 'https://www.nowtv.now.com/wp-content/uploads/2020/06/L00192-dbg-c-1.png',
    ctaText: 'Watch Now',
    ctaUrl: '/watch-now',
    backgroundColor: '#205131',
  },
};

export const RightPosition: Story = {
  args: {
    desktopImage: banner1Desktop,
    mobileImage: banner1Mobile,
    contentPosition: 'right',
    title: 'Now Signature Pack',
    description: 'Top-notch movies from Hong Kong and around the world, plus Asian TV series, factual, kids, live sports programmes all in one pack for every family members! You name it! 16K+ hours of on-demand programmes available!',
    startingPrice: '$98',
    ctaText: 'Subscribe Now',
    ctaUrl: '/get-started'
  },
};
