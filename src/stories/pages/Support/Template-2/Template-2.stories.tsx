import React from 'react';
import Template2 from './Template-2';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Template2> = {
  title: 'pages/Support/Template-2',
  component: Template2,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    }
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Template2>;

const borderCard = [
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2024/11/UX3A_TVInterfaces-2-updated_e2-2.png',
    label: 'Now H1',
    linkHref: '/support/set-top-box',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u3-e-2-updated_e.png',
    label: 'UX3',
    linkHref: '/support/remote-control',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u2-e-2-1.png',
    label: 'UX2',
    linkHref: '/support/remote-control',
  }
];

export const Default: Story = {
  args: {
    title: 'TV Interfaces',
    subTitle: 'Which TV Interface are you using?',
    borderCardData: borderCard,
  },
}; 

export const SingleItem: Story = {
  args: {
    title: 'TV Interfaces',
    subTitle: 'Which TV Interface are you using?',
    borderCardData: [
      {
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2024/11/UX3A_TVInterfaces-2-updated_e2-2.png',
        label: 'Now H1',
        linkHref: '/support/set-top-box',
      }
    ],
  },
};

export const TwoItems: Story = {
  args: {
    title: 'TV Interfaces',
    subTitle: 'Which TV Interface are you using?',
    borderCardData: [
      {
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2024/11/UX3A_TVInterfaces-2-updated_e2-2.png',
        label: 'Now H1',
        linkHref: '/support/set-top-box',
      },
      {
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u3-e-2-updated_e.png',
        label: 'UX3',
        linkHref: '/support/remote-control',
      }
    ],
  },
};