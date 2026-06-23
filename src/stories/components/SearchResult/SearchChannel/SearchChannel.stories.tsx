import type { Meta, StoryObj } from '@storybook/react';
import SearchChannel from './SearchChannel';

const meta: Meta<typeof SearchChannel> = {
  title: 'Components/SearchResult/SearchChannel',
  component: SearchChannel,
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
type Story = StoryObj<typeof SearchChannel>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.nowtv.now.com/media/logo/621-wbg-e.png',
    imageAlt: 'Now Sports Premier League 1',
    title: (
      <>
        CH 621 Now <span className="keywords">Sports</span> Premier League 1
      </>
    ),
    links: [
      { label: 'See Details', href: '#' },
      {
        label: 'See TV Guide',
        href: 'https://nowplayer.now.com/tvguide/channeldetail/621/1?isfromchannel=true',
        target: '_blank',
      },
    ],
  },
};

export const OnDemandCatalog: Story = {
  args: {
    imageSrc: 'https://www.nowtv.now.com/media/logo/L00754-wbg-e.png',
    imageAlt: 'Premier League',
    title: 'Premier League',
    links: [
      { label: 'See Details', href: '#' },
      {
        label: 'Watch On Demand Programs',
        href: 'https://nowplayer.now.com/ondemand/seeall?filterType=appPlayable&nodeId=202011230000082',
        target: '_blank',
      },
    ],
  },
};
