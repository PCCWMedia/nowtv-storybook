import type { Meta, StoryObj } from '@storybook/react';
import { PriceTag } from './PriceTag';

const meta: Meta<typeof PriceTag> = {
  title: 'Components/PriceTag',
  component: PriceTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PriceTag>;

export const Default: Story = {
  args: {
    price: 99,
  },
};

export const AveragePrice: Story = {
  args: {
    price: 99,
    showAverage: true,
  },
};

export const DailyPrice: Story = {
  args: {
    price: 99,
    period: 'day',
  },
};

export const EventPass: Story = {
  args: {
    price: 99,
    prefix: '',
    period: 'Pass',
  },
};

