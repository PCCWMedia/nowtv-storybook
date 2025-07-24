import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from './SelectBox';

const meta: Meta<typeof SelectBox> = {
  title: 'Components/Form/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of select options',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

const paymentOptions = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'Mastercard' },
  { value: 'amex', label: 'American Express' },
];

// Default select box
export const Default: Story = {
  args: {
    options: paymentOptions,
    placeholder: 'Select',
  },
};

// With value
export const WithValue: Story = {
  args: {
    options: paymentOptions,
    placeholder: 'Select',
    defaultValue: 'visa',
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    options: paymentOptions,
    placeholder: 'Choose payment method',
  },
};
