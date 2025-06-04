import type { Meta, StoryObj } from '@storybook/react';
import MenuList from './MenuList';

const meta: Meta<typeof MenuList> = {
    title: 'Components/MobileSideNav/MenuList',
    component: MenuList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['normal', 'logged-in'],
            description: 'User status',
        },
        tabActive: {
            control: 'boolean',
            description: 'Whether the tab is active',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MenuList>;

// Normal user menu
export const NormalUser: Story = {
    args: {
        status: 'normal',
        items: [
            {
                type: 'link',
                title: 'Home',
                href: '#',
                isActive: true,
            },
            {
                type: 'toggle',
                title: 'Subscribe',
                subItems: [
                    {
                        title: 'New Customer',
                        href: '#',
                    },
                    {
                        title: 'Existing Customer',
                        href: '#',
                    },
                ],
            },
        ],
    },
};

// Logged in user menu
export const LoggedInUser: Story = {
    args: {
        status: 'logged-in',
        items: [
            {
                type: 'link',
                title: 'Home',
                href: '#',
            },
            {
                type: 'link',
                title: 'Upgrade',
                href: '#',
                isActive: true,
            },
        ],
    },
}; 