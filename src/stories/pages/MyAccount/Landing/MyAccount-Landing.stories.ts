import type { Meta, StoryObj } from '@storybook/react';
import MyAccount from './MyAccount-Landing';

const meta: Meta<typeof MyAccount> = {
  title: 'Pages/MyAccount/Landing',
  component: MyAccount,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MyAccount>;

export const Default: Story = {};
