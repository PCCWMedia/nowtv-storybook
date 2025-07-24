import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { FilterChannelsOverlay } from './FilterChannelsOverlay';

const meta: Meta<typeof FilterChannelsOverlay> = {
  title: 'Components/Overlay/FilterChannelsOverlay',
  component: FilterChannelsOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof FilterChannelsOverlay>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};
