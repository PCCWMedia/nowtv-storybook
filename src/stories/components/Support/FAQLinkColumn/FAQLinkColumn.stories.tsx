import type { Meta, StoryObj } from '@storybook/react';
import FAQLinkColumn from './FAQLinkColumn';

const meta: Meta<typeof FAQLinkColumn> = {
  title: 'Components/Support/FAQLinkColumn',
  component: FAQLinkColumn,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FAQLinkColumn>;

export const MyAccount: Story = {
  args: {
    title: 'My Account',
    links: [
      { href: '#', label: 'Register Now ID and login our apps' },
      { href: '#', label: 'Check my subscriptions and billing' },
      { href: '#', label: 'Change language of my Now TV bill' },
      { href: '#', label: 'See more articles', className: 'arrow' },
    ],
  },
};

export const TVInterface: Story = {
  args: {
    title: 'TV Interface',
    links: [
      { href: '#', label: 'How to pair up your remote control with your TV' },
      { href: '#', label: 'TV recording failure' },
      { href: '#', label: '4K quality viewing' },
      { href: '#', label: 'See more articles', className: 'arrow' },
    ],
  },
};

export const QuickLinks: Story = {
  args: {
    title: 'Quick Links',
    links: [
      { href: '#', label: 'All video tutorials' },
      { href: '#', label: 'Program classifications' },
      { href: '#', label: 'Things to know before you buy' },
    ],
  },
}; 