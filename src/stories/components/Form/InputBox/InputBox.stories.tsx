import type { Meta, StoryObj } from '@storybook/react';
import { InputBox } from './InputBox';

const meta: Meta<typeof InputBox> = {
  title: 'Components/Form/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
      description: 'Type of input field',
    },
    name: {
      control: 'text',
      description: 'Name attribute of the input',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    value: {
      control: 'text',
      description: 'Value of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    autoComplete: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Autocomplete attribute',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when input value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

// Default text input
export const Default: Story = {
  args: {
    type: 'text',
    name: 'default',
    label: 'Default Input',
    autoComplete: 'off',
  },
};

// Password input
export const Password: Story = {
  args: {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: '',
    autoComplete: 'off',
  },
};

// With value
export const WithValue: Story = {
  args: {
    type: 'text',
    name: 'withValue',
    label: 'With Value',
    value: 'Pre-filled value',
    autoComplete: 'off',
  },
};

// With SubmitButton
export const WithSubmitButton: Story = {
  args: {
    type: 'text',
    name: 'Search',
    placeholder: 'Search...',
    autoComplete: 'off',
    submitButton: true,
    submitButtonText: 'Search',
    submitButtonIcon: true,
    submitButtonIconClass: 'icon-search-icon',
  },
};
