import type { Meta, StoryObj } from '@storybook/react';
import NavItemList from './NavItemList';

const meta = {
    title: 'Components/NavigationBar/DesktopNav/NavItemList',
    component: NavItemList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                label: 'Subscribe',
                dropdownItems: [
                    { href: '#', label: 'New Customer' },
                    { href: '#', label: 'Existing Customer' },
                    { href: '#', label: 'Now E Customer' }
                ]
            },
            {
                label: 'Support',
                href: '#'
            }
        ],
    },
};

export const WithActiveItem: Story = {
    args: {
        items: [
            {
                label: 'Subscribe',
                className: 'active',
                dropdownItems: [
                    { href: '#', label: 'New Customer' },
                    { href: '#', label: 'Existing Customer' },
                    { href: '#', label: 'Now E Customer' }
                ]
            },
            {
                label: 'Support',
                href: '#'
            }
        ],
    },
};
