import type { Meta, StoryObj } from '@storybook/react';
import Template1 from './Template-1';

const meta: Meta<typeof Template1> = {
  title: 'Pages/Support/Template-1',
  component: Template1,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
    docs: {
      description: {
        component: 'A support landing page template with a title and navigation links. This template is designed for support pages that need to direct users to different support categories.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main heading title for the support page',
    },
    links: {
      control: 'object',
      description: 'Array of link objects with label, href, and optional className',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    title: 'Set Top Box & Remote Control',
    links: [
      { label: 'Set Top Box', href: '/support/set-top-box', className: 'borderLink' },
      { label: 'Remote Control', href: '/support/remote-control', className: 'borderLink' },
    ],
  },
};