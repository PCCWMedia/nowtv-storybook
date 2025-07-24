import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import Logo from './Logo';

const meta = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#',
        onClick: fn(),
    },
};
