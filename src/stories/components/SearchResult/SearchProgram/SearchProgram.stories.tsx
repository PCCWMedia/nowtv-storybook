import type { Meta, StoryObj } from '@storybook/react';
import SearchProgram from './SearchProgram';

const meta: Meta<typeof SearchProgram> = {
  title: 'Components/SearchResult/SearchProgram',
  component: SearchProgram,
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
type Story = StoryObj<typeof SearchProgram>;

export const Default: Story = {
  args: {
    href: '#',
    imageSrc:
      'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/201305/en_us/original_vertical/s201305080000002',
    imageAlt: 'Sports Highlights',
    title: (
      <>
        <span className="keywords">Sports</span> Highlights
      </>
    ),
    channel: 'Premier League',
    description:
      'The ultimate pack for sports fanatics. Catch soccer action from top leagues live and on demand.',
  },
};

export const WithCta: Story = {
  args: {
    href: 'https://nowplayer.now.com/ondemand/detail?id=S202002140102044&type=series',
    target: '_blank',
    imageSrc:
      'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044',
    imageAlt: 'Liverpool TV beIN Sports',
    title: (
      <>
        Liverpool TV beIN <span className="keywords">Sports</span>
      </>
    ),
    channel: 'Now Baogu Movies',
    description: 'Features every Liverpool FC match in all competitions, including post match analysis.',
    ctaLabel: 'See Details in NowPlayer',
  },
};
