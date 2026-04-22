import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBanner } from './ArticleBanner';

const meta: Meta<typeof ArticleBanner> = {
  title: 'Components/Swiper/ArticleBanner',
  component: ArticleBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    autoplayDelay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Autoplay delay in milliseconds',
    },
    autoplay: {
      control: 'boolean',
      description: 'Enable or disable autoplay',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleBanner>;

export const Default: Story = {
  args: {
    autoplayDelay: 3000,
    slides: [
      {
        href: 'blog-article-type1.html',
        image: {
          src: 'https://www.nowtv.now.com/wp-content/uploads/2025/02/Now-True-Exhibition-On-Screen-Cezanne-Renoir-cover.jpg',
          alt: 'Now True Exhibition On Screen Cezanne Renoir',
        },
      },
      {
        href: 'blog-article-type1.html',
        image: {
          src: 'https://www.nowtv.now.com/wp-content/uploads/2025/02/top-10-korean-movies-2024-cover.jpg',
          alt: 'Top 10 Korean Movies 2024',
        },
      },
      {
        href: 'blog-article-type1.html',
        image: {
          src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/Rob-N-Roll_cover.jpg',
          alt: 'Rob N Roll',
        },
      },
      {
        href: 'blog-article-type1.html',
        image: {
          src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/cover-1.jpg',
          alt: 'Article cover',
        },
      },
      {
        href: 'blog-article-type1.html',
        image: {
          src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/FA-Cup-cover.png',
          alt: 'FA Cup',
        },
      },
    ],
  },
};

