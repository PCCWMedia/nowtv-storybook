import type { Meta, StoryObj } from '@storybook/react';
import SearchResultPage from './SearchResultPage';

const meta: Meta<typeof SearchResultPage> = {
  title: 'Pages/SearchResultPage/SearchForResult',
  component: SearchResultPage,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchResultPage>;

export const Default: Story = {
  args: {
    keyword: 'sports',
    initialTabId: 'all',
  },
};

export const ProgramsOnly: Story = {
  args: {
    keyword: 'sports',
    initialTabId: 'program',
  },
};
