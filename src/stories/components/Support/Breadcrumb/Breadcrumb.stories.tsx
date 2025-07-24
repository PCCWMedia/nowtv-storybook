import React from 'react';
import Breadcrumb from './Breadcrumb';
import type { BreadcrumbItem } from './Breadcrumb';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'components/Support/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const items: BreadcrumbItem[] = [
  { label: 'Support - Home', href: '#' },
  { label: 'Now Player', href: '#' },
  { label: 'FAQ', href: '#' },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Support - Home', href: '#' },
    ],
  },
}; 