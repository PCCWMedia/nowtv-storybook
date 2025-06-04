import type { Meta, StoryObj } from '@storybook/react';
import HeaderWithMobileNav from './HeaderWithMobileNav';

const meta = {
  title: 'Components/HeaderWithMobileNav',
  component: HeaderWithMobileNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['normal', 'logged-in'] },
    tabActive: { control: 'boolean' },
  },
} satisfies Meta<typeof HeaderWithMobileNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    status: 'normal',
    tabActive: false,
  },
};

export const LoggedIn: Story = {
  args: {
    status: 'logged-in',
    username: 'Now TV',
    tabActive: false,
  },
};
