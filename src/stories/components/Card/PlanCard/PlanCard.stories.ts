import type { Meta, StoryObj } from '@storybook/react';
import PlanCard from './PlanCard';
import array from '@storybook/addon-controls';

const meta = {
    title: 'Components/Card/PlanCard',
    component: PlanCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        image: { control: 'text' },
        imageSquare: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        planIncludes: { control: array },
        price: { control: 'text' },
        notes: { control: 'text' },
        priceType: {
            control: 'select',
            options: ['from', 'avg', 'day'],
            description: 'Price display format'
        }
    },
} satisfies Meta<typeof PlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;


const baseArgs = {
    image: 'https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png',
    title: 'Super Sports & Entertainment Combo',
    description: 'Draft Pack Description. This is a draft description for the pack. It includes all the necessary details about the pack.',
    planIncludes: ['Now Signature Pack', 'Super Sports Pack Plus', 'Soccer Pack'],
    price: '$888',
    notes: 'This is small note',
};

export const OneRowCard: Story = {
    args: {
        ...baseArgs,
        variant: 'onerow',
        imageSquare: 'https://www.nowtv.now.com/media/Pack-folder/default-img-square.png',
        priceType: 'avg'
    },
};

export const DefaultCard: Story = {
    args: {
        ...baseArgs,
        priceType: 'from'
    },
};

export const SmallCard: Story = {
    args: {
        ...baseArgs,
        variant: 'sm',
        priceType: 'day'
    },
};