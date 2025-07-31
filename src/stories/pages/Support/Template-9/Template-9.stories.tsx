import type { Meta, StoryObj } from '@storybook/react';
import Template9 from './Template-9';

const meta: Meta<typeof Template9> = {
  title: 'Pages/Support/Template-9',
  component: Template9,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
    docs: {
      description: {
        component: 'A support page template for rebooting the Now One box, with step-by-step instructions and image.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Main heading title' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Reboot Your Box',
  },
}; 