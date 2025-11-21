import type { Meta, StoryObj } from '@storybook/react';
import ManageDevices from './ManageDevices';

const meta: Meta<typeof ManageDevices> = {
  title: 'Pages/MyAccount/ManageDevices',
  component: ManageDevices,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
};

export default meta;
type Story = StoryObj<typeof ManageDevices>;

export const Default: Story = {};
