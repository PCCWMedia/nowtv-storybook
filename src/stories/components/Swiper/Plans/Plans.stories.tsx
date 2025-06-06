import type { Meta, StoryObj } from '@storybook/react';
import { SwiperDemo } from './Plans';

const meta: Meta<typeof SwiperDemo> = {
  title: 'Components/Swiper/Plans',
  component: SwiperDemo,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SwiperDemo>;

// 默認故事 - 4個計劃
export const ThreeOrMore: Story = {
  args: {
    plans: [
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/SSPP-Now-Signature-STEM-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Super Sports & Entertainment Combo",
        description: "Watching world-class European football leagues: Premier League, LALIGA EASPORTS, UEFA Champions League, UEFA Europa League and other sports contents like Formula One. Get top-grossing Asian movies and drama series, documentary, and bring kid the STEM programs!",
        planIncludes: ["Super Sports Pack Plus", "Now Signature Pack", "STEM Learning Pack", "Starter Pack"],
        price: "$428",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/NSP-WSP-Pack-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Signature Combo",
        description: "Signature Combo provides you with 20 channels and 18 On-Demand Services, along with the Max App, enabling you to immerse yourself in a diverse range of premium entertainment. From Hollywood and Asian blockbusters to captivating TV series, variety shows, and factual content, this package combines the best of our Western Signature Pack and Now Signature Pack. Plus, enjoy the thrill of various sports events with Now Sport 1!",
        planIncludes: ["Western Signature Pack", "Now Signature Pack"],
        price: "$148",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/Now-Signature_Pack-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Now Signature Pack",
        description: "Top-notch movies from Hong Kong and around the world, plus Asian TV series, factual, kids , live sports programmes all in one pack for every family members! You name it! 16K+ hours of on-demand programmes available!",
        planIncludes: ["Now Signature Pack", "Starter Pack"],
        price: "$98",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/nba-pack.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "NBA Pack",
        description: "Watching the selected NBA live games on Now TV, including regular season, In-season tournaments, All-star weekend, Playoffs and Finals. NBA TV channel also provides round-the-clock coverage of selected live games, game replays, and other exciting content.",
        planIncludes: ["NBA Pack"],
        price: "$88",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/beIN-sports-pack-banner-2.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "beIN SPORTS Super Pack",
        description: "Offers a stellar selection of LIVE sport action all year-round including UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, Bundesliga, Formula One and more.",
        planIncludes: ["beIN SPORTS Super Pack"],
        price: "$168",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      }
    ]
  },
};

// 3個計劃
export const ThreePlans: Story = {
  args: {
    plans: [
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/beIN-sports-pack-banner-2.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "beIN SPORTS Super Pack",
        description: "Offers a stellar selection of LIVE sport action all year-round including UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, Bundesliga, Formula One and more.",
        planIncludes: ["beIN SPORTS Super Pack"],
        price: "$168",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/NSP-WSP-Pack-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Signature Combo",
        description: "Signature Combo provides you with 20 channels and 18 On-Demand Services, along with the Max App, enabling you to immerse yourself in a diverse range of premium entertainment. From Hollywood and Asian blockbusters to captivating TV series, variety shows, and factual content, this package combines the best of our Western Signature Pack and Now Signature Pack. Plus, enjoy the thrill of various sports events with Now Sport 1!",
        planIncludes: ["Western Signature Pack", "Now Signature Pack"],
        price: "$148",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/Now-Signature_Pack-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Now Signature Pack",
        description: "Top-notch movies from Hong Kong and around the world, plus Asian TV series, factual, kids , live sports programmes all in one pack for every family members! You name it! 16K+ hours of on-demand programmes available!",
        planIncludes: ["Now Signature Pack", "Starter Pack"],
        price: "$98",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      }
    ]
  },
};

// 2個計劃
export const TwoPlans: Story = {
  args: {
    plans: [
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/nowstudio-banner-2.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "On Demand - Now Studio",
        description: "Binge the best In drama and entertainment, from the uncut edgy to the addictively entertaining.",
        planIncludes: ["On Demand - Now Studio"],
        price: "$88",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      },
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/NowTrue-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "On Demand - Now True",
        description: "Now True brings cutting edge documentary, lifestyle, and cultural programming. With biographies, art, business, food and travel, science and technology, society, nature and beyond, Now True reveals the world around us with insight and inspiration. Available on demand and with select content in 4K.",
        planIncludes: ["On Demand - Now True"],
        price: "$88",
        notes: "Instant access. No installation needed.",
        priceType: 'from'
      }
    ]
  },
};

// 1個計劃
export const SinglePlan: Story = {
  args: {
    plans: [
      {
        image: "https://www.nowtv.now.com/media/Pack-folder/PL-LL-Pack-banner.jpg",
        imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
        title: "Premier League and LALIGA EA SPORTS Day Pass",
        description: "Premier League and LALIGA EA SPORTS Day Pass offers channels dedicated to world class soccer – Premier League and LaLiga. Customer may also relive the exciting moments of selected sports events with the video-on-demand service.",
        planIncludes: ["Soccer Pack"],
        price: "$128",
        notes: "Instant access. No installation needed.",
        subNow: "Subscribe Now",
        priceType: 'day'
      }
    ]
  },
}; 