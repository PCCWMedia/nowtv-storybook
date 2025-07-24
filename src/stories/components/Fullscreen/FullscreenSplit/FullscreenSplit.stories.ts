import type { Meta, StoryObj } from '@storybook/react';
import FullscreenSplit from './FullscreenSplit';
import subscribeToday from '../../../assets/img/home/aladin4.png';

const meta = {
    title: 'Components/Fullscreen/FullscreenSplit',
    component: FullscreenSplit,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        image: { control: 'text' },
        title: { control: 'text' },
        subtitle: { control: 'text' },
        priceText: { control: 'text' },
        startingPrice: { control: 'text' },
        ctaUrl: { control: 'text' },
        ctaText: { control: 'text' },
    },
} satisfies Meta<typeof FullscreenSplit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        image: subscribeToday,
        title: 'Subscribe Today',
        subtitle: 'Pick your favourite genres and personalize your plan. Take advantage of online exclusive offers.',
        priceText: 'Plans start from just',
        startingPrice: '$888',
        ctaUrl: '#',
        ctaText: 'Get Started',
    },
};
