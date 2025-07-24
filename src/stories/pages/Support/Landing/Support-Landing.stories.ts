import type { Meta, StoryObj } from '@storybook/react';
import SupportLanding from './Support-Landing';

const meta: Meta<typeof SupportLanding> = {
  title: 'Pages/Support/Landing',
  component: SupportLanding,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SupportLanding>;

export const Default: Story = {}; 