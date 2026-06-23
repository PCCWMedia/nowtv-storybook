import type { Meta, StoryObj } from '@storybook/react';
import SearchOffer from './SeachOffer';

const meta: Meta<typeof SearchOffer> = {
  title: 'Components/SearchResult/SearchOffer',
  component: SearchOffer,
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
type Story = StoryObj<typeof SearchOffer>;

export const Default: Story = {
  args: {
    href: '#',
    imageSrc: 'https://www.nowtv.now.com/media/Campaign-folder/:Combo:SportElite:square.png',
    imageAlt: 'Sports Combo',
    title: (
      <>
        <span className="keywords">Sports</span> Combo
      </>
    ),
    description: (
      <>
        For all-rounded <span className="keywords">sports</span> lovers, you get exciting
        international sporting events and a full spectrum of movies.
      </>
    ),
    price: '$148',
  },
};

export const SuperSportsCombo: Story = {
  args: {
    href: '#',
    imageSrc: 'https://www.nowtv.now.com/media/Campaign-folder/:Combo:SportElite:square.png',
    imageAlt: 'Super Sports Combo',
    title: (
      <>
        Super <span className="keywords">Sports</span> Combo
      </>
    ),
    description:
      'The ultimate pack for sports fanatics with top European leagues and international events.',
    price: '$288',
  },
};
