import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CookiesBar } from './CookiesBar';

const meta = {
  title: 'Components/CookiesBar',
  component: CookiesBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A cookies consent bar that sticks to the bottom of the page and slides down when the accept button is clicked.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content for the cookies notice (can include HTML)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label for the accept button',
    },
    isVisible: {
      control: 'boolean',
      description: 'Initial visibility state of the cookies bar',
    },
  },
  args: {
    onAccept: fn(),
  },
} satisfies Meta<typeof CookiesBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
  },
};

export const InitiallyHidden: Story = {
  args: {
    isVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The cookies bar can start in a hidden state.',
      },
    },
  },
};
