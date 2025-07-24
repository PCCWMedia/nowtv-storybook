import type { Meta, StoryObj } from '@storybook/react';
import { SplitFeature } from './SplitFeature';

import h1KbBg from '../../assets/img/home/h1-kb-bg.jpg';
import h1Features from '../../assets/img/home/h1-features.png';
import h1W from '../../assets/img/home/h1-w.svg';

import HABg from '../../assets/img/home/HA-bg.jpg';
import HAPoster from '../../assets/img/home/HA-graphic.png';
import HALogo from '../../assets/img/home/happy-academy-logo.png';

const meta: Meta<typeof SplitFeature> = {
  title: 'Components/SplitFeature',
  component: SplitFeature,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SplitFeature>;

export const Default: Story = {
  args: {
    isDark: true,
    backgroundImage: h1KbBg,
    title: 'Your home just got smarter.',
    subtitle: '(Not to mention more fun.)',
    description: 'Watch live and on-demand on phones, tablet and Smart TV App. Free with your subscription, download Now player app on your mobile or Now TV app on Smart TV. Bind your account, and start using now!',
    channelLogo: h1W,
    posterImage: h1Features,
    buttonLink: '#',
    buttonLabel: 'Learn More',
    detailsLink: '#',
    detailsLabel: 'More details of Smart TV App',
  },
};

export const Light: Story = {
  args: {
    isDark: false,
    backgroundImage: HABg,
    title: 'Imagine a Community That Offers You Privileges',
    description: 'Become a Happy Academy member and get exclusive access to fun events, interest classes and promotions.',
    channelLogo: HALogo,
    posterImage: HAPoster,
    buttonLink: '#',
    buttonLabel: 'Learn more',
  },
};


