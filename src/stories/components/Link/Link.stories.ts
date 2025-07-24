import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
    title: 'Components/Link',
    component: Link,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      className: { control: 'text' },
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      href: '#',
      label: 'Primary Link',
      className: '',
    },
};

export const arrowLink: Story = {
    args: {
      href: '#',
      label: 'Arrow Link',
      className: 'arrow',
    },
};

export const newWindow: Story = {
  args: {
    href: '#',
    label: 'New Window',
    className: 'new-window',
  },
};

export const buttonLink: Story = {
  args: {
    href: '#',
    label: 'Button Link',
    className: 'btn primary',
  },
};

export const borderLink: Story = {
  args: {
    href: '#',
    label: 'Border Link',
    className: 'borderLink',
  },
};