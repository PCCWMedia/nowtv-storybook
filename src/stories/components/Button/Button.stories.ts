import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isToggle: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    className: 'btn primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    className: 'btn secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    className: 'btn outline',
    disabled: false,
  },
};

export const Select: Story = {
  args: {
    label: 'Select',
    className: 'btn primary',
    disabled: false,
    isToggle: true,
  },
};

export const CloseButton: Story = {
  args: {
    label: "Close",
    className: 'close-btn',
    disabled: false,
  },
};


export const FilterButton: Story = {
  args: {
    label: "Filter Button",
    className: 'filter-btn',
    disabled: false,
  },
};
