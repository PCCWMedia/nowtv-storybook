import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    name: {
      control: 'text',
      description: 'Name attribute of the checkbox',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checkbox state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Default unchecked checkbox
export const Default: Story = {
  args: {
    name: 'terms',
    checked: false,
    label: 'I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.',
    links: [
      { text: 'Terms and Conditions', href: '#' },
      { text: 'Personal Information Collection Statement', href: '#' },
    ],
  },
};

// Checked checkbox
export const Checked: Story = {
  args: {
    name: 'terms',
    checked: true,
    label: 'I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.',
    links: [
      { text: 'Terms and Conditions', href: '#' },
      { text: 'Personal Information Collection Statement', href: '#' },
    ],
  },
};
