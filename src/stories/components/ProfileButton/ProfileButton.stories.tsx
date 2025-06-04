import type { Meta, StoryObj } from '@storybook/react';
import ProfileButton from './ProfileButton';

const meta: Meta<typeof ProfileButton> = {
    title: 'Components/ProfileButton',
    component: ProfileButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['login', 'logged-in'],
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileButton>;

export const Login: Story = {
    args: {
        status: 'login',
    },
};

export const LoggedIn: Story = {
    args: {
        status: 'logged-in',
        username: 'Now TV',
    },
}; 