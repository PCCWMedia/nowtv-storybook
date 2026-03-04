import type { Meta, StoryObj } from '@storybook/react';
import CommunicationPreference from './CommunicationPreference';

const meta: Meta<typeof CommunicationPreference> = {
  title: 'Pages/MyAccount/CommunicationPreference',
  component: CommunicationPreference,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CommunicationPreference>;

export const Default: Story = {};