import type { Meta, StoryObj } from '@storybook/react';
import Header from './NavigationBar';

const meta = {
  title: 'Components/NavigationBar',
  component: Header,
  parameters: {
    // layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['normal', 'subscription', 'logged-in'] }, // Adjusting argTypes for status
    tabActive: { control: 'boolean' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    status: 'normal',
    tabActive: false
  },
};

export const Subscription: Story = {
  args: {
    status: 'subscription',
  },
};

export const LoggedIn: Story = {
  args: {
    status: 'logged-in',

    // Replace with dynamic username if needed
    username: "Now TV",
    tabActive: true
  },
};