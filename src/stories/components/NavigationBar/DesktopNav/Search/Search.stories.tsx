import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import Search from './Search';

const meta = {
    title: 'Components/NavigationBar/DesktopNav/Search',
    component: Search,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClick: fn(),
    },
};

export const WithCustomClass: Story = {
    args: {
        className: 'custom-search',
        onClick: fn(),
    },
}; 