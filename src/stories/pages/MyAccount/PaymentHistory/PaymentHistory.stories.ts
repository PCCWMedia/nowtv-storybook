import type { Meta, StoryObj } from '@storybook/react';
import PaymentHistory from './PaymentHistory';

const meta: Meta<typeof PaymentHistory> = {
  title: 'Pages/MyAccount/PaymentHistory',
  component: PaymentHistory,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
};

export default meta;
type Story = StoryObj<typeof PaymentHistory>;

export const Default: Story = {};
