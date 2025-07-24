import type { Meta, StoryObj } from '@storybook/react';
import LikeNowEOverlay from "./LikeNowEOverlay";

const meta: Meta<typeof LikeNowEOverlay> = {
  title: "components/Overlay/LikeNowEOverlay",
  component: LikeNowEOverlay,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof LikeNowEOverlay>;

export const Default: Story = {
  args: {
    onClose: () => console.log('Close clicked'),
  },
};


