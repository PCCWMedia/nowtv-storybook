import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import NavItem from './NavItem';

const meta = {
    title: 'Components/NavigationBar/DesktopNav/NavItem',
    component: NavItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleLink: Story = {
    args: {
        label: 'Support',
        href: '#',
        onClick: fn(),
    },
};

export const SimpleLinkActive: Story = {
    args: {
        label: 'Support',
        href: '#',
        className: 'active',
        onClick: fn(),
    },
};

export const WithDropdown: Story = {
    args: {
        label: 'Subscribe',
        dropdownItems: [
            { href: '#', label: 'New Customer' },
            { href: '#', label: 'Existing Customer' },
            { href: '#', label: 'Now E Customer' }
        ],
        onClick: fn(),
    },
}; 