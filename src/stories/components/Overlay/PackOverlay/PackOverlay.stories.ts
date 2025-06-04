import type { Meta, StoryObj } from '@storybook/react';
import PackOverlay from './PackOverlay';

const meta = {
    title: 'Components/Overlay/PackOverlay',
    component: PackOverlay,
    parameters: {
    //   layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        packDescription: { control: 'text' },
        channels: { control: 'object' },
        ondemands: { control: 'object' },
        onClose: { action: 'closed' }
    },
} satisfies Meta<typeof PackOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;


const baseArgs = {
    image: 'https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png',
    title: 'Pack Title',
    packDescription: 'Draft Pack Description. This is a draft description for the pack. It includes all the necessary details about the pack.',
    channels: [],
    ondemands: [],
    onClose: () => {}
};


export const Default: Story = {
    args: {
        ...baseArgs,
        isOnDemand: true,
        ondemands: ['L00754', 'L00601'].map(id => ({ id })),
        channels: ['611', '621', '622'].map(id => ({ id })),
    },
};

export const ChannelsOnly: Story = {
    args: {
        ...baseArgs,
        channels: ['621', '631', '622', '623', '624', '625', '626', '102', '105', '115', '320'].map(id => ({ id })),
    },
};

export const OnDemendOnly: Story = {
    args: {
        ...baseArgs,
        ondemands: ['L00754', 'L00601'].map(id => ({ id })),
        isOnDemand: true,
    },
};
