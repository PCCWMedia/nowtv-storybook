import React from 'react';
import Template3 from './Template-3';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Template3> = {
  title: 'pages/Support/Template-3',
  component: Template3,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    }
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Template3>;

const cardData = [
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2024/11/UX3A_TVInterfaces-2-updated_e2-2.png',
    label: 'Go to Now TV website and login.',
    description: 'Navigate to your account preferences to start the process.'
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u3-e-2-updated_e.png',
    label: 'Step 2: Select Bill Media',
    description: 'Choose the bill media option you want to update.'
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u2-e-2-1.png',
    label: 'Step 3: Update Email',
    description: 'Enter your new billing email address and save changes.'
  },
];

export const Default: Story = {
  args: {
    title: 'Change Bill Media & Email',
    subTitle: 'How to change my bill media and billing email address?',
    cardData: cardData,
  },
};
