import type { Meta, StoryObj } from '@storybook/react';
import SubscribedChannels from './SubscribedChannels';

const meta: Meta<typeof SubscribedChannels> = {
  title: 'Pages/MyAccount/SubscribedChannels',
  component: SubscribedChannels,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
};

export default meta;
type Story = StoryObj<typeof SubscribedChannels>;

export const Default: Story = {}; 