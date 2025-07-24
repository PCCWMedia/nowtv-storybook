import type { Meta, StoryObj } from '@storybook/react';
import BorderCard from './BorderCard';

const meta: Meta<typeof BorderCard> = {
  title: 'Components/Card/BorderCard',
  component: BorderCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BorderCard>;

export const AllFields: Story = {
  args: {
    imageSrc: 'https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png',
    label: 'Label',
    description: 'Paragraph text text text ......',
    linkLabel: 'See Details',
    linkHref: '#',
  },
};


export const LabelAndDescription: Story = {
  args: {
    label: 'Label',
    description: 'Description only.',
  },
}; 