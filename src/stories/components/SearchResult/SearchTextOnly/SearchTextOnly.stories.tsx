import type { Meta, StoryObj } from '@storybook/react';
import SearchTextOnly from './SearchTextOnly';

const meta: Meta<typeof SearchTextOnly> = {
  title: 'Components/SearchResult/SearchTextOnly',
  component: SearchTextOnly,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'min(100%, 960px)', padding: '24px', background: '#fff' }}>
        <div className="articlesRow">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SearchTextOnly>;

export const Default: Story = {
  args: {
    href: '#',
    title: (
      <>
        4K <span className="keywords">Sports</span> Video
      </>
    ),
    description: 'FAQ: What do I need in order to watch 4K content via Now One?',
  },
};

export const SportsRecording: Story = {
  args: {
    href: '#',
    title: (
      <>
        <span className="keywords">Sports</span> Recording
      </>
    ),
    description:
      'UX3 can record Now TV and Digital Terrestrial Television programs to a designated hard disk drive.',
  },
};
