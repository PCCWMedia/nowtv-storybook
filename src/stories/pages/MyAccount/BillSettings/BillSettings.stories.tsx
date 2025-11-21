import type { Meta, StoryObj } from '@storybook/react';
import BillSettings from './BillSettings';

const meta: Meta<typeof BillSettings> = {
  title: 'Pages/MyAccount/BillSettings',
  component: BillSettings,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof BillSettings>;

export const Default: Story = {}; 