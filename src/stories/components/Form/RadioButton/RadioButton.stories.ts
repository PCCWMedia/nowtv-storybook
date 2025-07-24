import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Form/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the radio group',
    },
    options: {
      control: 'object',
      description: 'Array of radio options',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

const defaultOptions = [
  { id: 'chinese', label: '中文', value: 'chinese' },
  { id: 'english', label: 'English', value: 'english' },
];

// Default with first option checked
export const Default: Story = {
  args: {
    name: 'lang',
    options: defaultOptions,
    defaultValue: 'chinese',
  },
};

// All options unchecked
export const Unchecked: Story = {
  args: {
    name: 'lang',
    options: defaultOptions,
  },
};
