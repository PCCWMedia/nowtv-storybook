import type { Meta, StoryObj } from '@storybook/react';
import PaymentMethod from './PaymentMethod';

const meta: Meta<typeof PaymentMethod> = {
  title: 'Pages/MyAccount/PaymentMethod',
  component: PaymentMethod,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
};

export default meta;
type Story = StoryObj<typeof PaymentMethod>;

export const Default: Story = {}; 