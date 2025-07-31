import type { Meta, StoryObj } from '@storybook/react';
import GetStarted from './GetStarted';

const meta: Meta<typeof GetStarted> = {
  title: 'Pages/GetStarted',
  component: GetStarted,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
};

export default meta;
type Story = StoryObj<typeof GetStarted>;

export const Default: Story = {}; 

export const LikeNowE: Story = {
  args: {
    showLikeNowEOverlayDefault: true,
    isNowEParamDefault: true,
  },
};