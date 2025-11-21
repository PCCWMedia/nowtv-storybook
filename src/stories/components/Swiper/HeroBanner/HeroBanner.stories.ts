import type { Meta, StoryObj } from '@storybook/react';
import { HeroBanner } from './HeroBanner';

// Import images
import slideMovieMobile from '../../../assets/img/home/NowTV-King-of-Movie-750X700-EN.jpg';
import slideMovieDesktop from '../../../assets/img/home/NowTV-King-of-Movie-1500X720-EN.jpg';
import slidePLMobile from '../../../assets/img/home/Now-TV-PL2526-750X700-EN.jpg';
import slidePLDesktop from '../../../assets/img/home/Now-TV-PL2526-1500X700-EN.jpg';
import slide1Mobile from '../../../assets/img/home/uefa-mobile.jpg';
import slide1Desktop from '../../../assets/img/home/uefa-desktop.jpg';
import slide1TitleArt from '../../../assets/img/home/uefa-title.png';
import slide2Mobile from '../../../assets/img/home/NowOTT_750x700-EN-1.jpg';
import slide2Desktop from '../../../assets/img/home/NowOTT_1500x720-EN-1.jpg';
import slide3Mobile from '../../../assets/img/home/Panda_CH_750x700_bkg_20250602_en.jpg';
import slide3Desktop from '../../../assets/img/home/Panda_CH_1500x720_bkg_20250214_en.jpg';
import slide4Mobile from '../../../assets/img/home/Now-TV-x-Netflix-750X700-EN.jpg';
import slide4Desktop from '../../../assets/img/home/Now-TV-x-Netflix-1500X720-EN.jpg';
import slide5Mobile from '../../../assets/img/home/NowTV-MITSUI-750X700-EN.jpg';
import slide5Desktop from '../../../assets/img/home/NowTV-MITSUI-1500X720-EN-white.jpg';
import slide6Mobile from '../../../assets/img/home/wsp_750x700_bkg_20241118_en.jpg';
import slide6Desktop from '../../../assets/img/home/wsp_1500x720_bkg_20241118_en_2.jpg';
import slide7Mobile from '../../../assets/img/home/iPhone-16-mobile.jpg';
import slide7Desktop from '../../../assets/img/home/iPhone-16-desktop.jpg';
import slide7Title from '../../../assets/img/home/iPhone-16-title.jpg';
import slide1ChlibLogo from '../../../assets/img/ch-logo/641_e.png';
import slide3ChlibLogo from '../../../assets/img/ch-logo/L00051_c.png';
import slide4ChlibLogo from '../../../assets/img/ch-logo/netflix-logo-r.svg';

import slideFakeMobile from '../../../assets/img/home/fake-mobile.jpg';
import slideFakeDesktop from '../../../assets/img/home/fake-desktop.jpg';


const meta: Meta<typeof HeroBanner> = {
  title: 'Components/Swiper/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
  args: {
    slides: [
      {
        id: 'slide-movie',
        image: {
          mobile: slideMovieMobile,
          desktop: slideMovieDesktop,
        },
        content: {
          title: 'Home to Every Movie Fan',
          description: 'Discover over 2,800* Chinese, Hollywood, Japanese, and Korean films — from timeless classics and blockbuster hits to exclusive premieresˇ and award-winning stories you won’t find anywhere else. <br><br> Dive into a rich mix of genres crafted to satisfy every movie lover’s craving starting from HK$68/month^',
          buttonText: 'Learn More',
          terms: [
            '*Limited time offer. This offer applicable to new subscription or existing Now TV/ 1O1O/ csl/ Club Sim/ Netvigator customers who subscribe to this offer via dedicated sales channel. This offer is not applicable to online subscription. Customers can subscribe to 3-pack Soccer Combo (with Set-Top Box or without Set-Top Box) with 24/36 commitment period at HK$228 per month. The subscription fees do not include the SD/HD/4K connection fee and rental fee of a Now TV Set-Top Box. The subscription fees shown here do not include the data usage and charges that incurred for viewing and streaming Now TV contents on Now TV app. Subject to the relevant terms and conditions, please refer to <a href="http://bit.ly/pl2526">bit.ly/pl2526</a>. Now TV services are provided by Now TV Limited and available in designated areas. Now TV is a registered trademark of the HKT group. Please contact the salesperson for details. Customer can visit <a href="http://www.pccw.com">http://www.pccw.com</a> for store location.'
          ],
          backgroundColor: '#000000',
        },
        
      },
      {
        id: 'slide-PL',
        image: {
          mobile: slidePLMobile,
          desktop: slidePLDesktop,
        },
        content: {
          title: 'Premier League kicks off on August 16!',
          description: 'True fans never miss a match! With Now TV’s 3-Pack Soccer Combo from $228/month*, watch every game live on smart TVs, phones, or tablets. Stream on two devices at once—no installation needed. Experience the excitement anywhere, anytime, and cheer your team through every high and low.',
          buttonText: 'Learn More',
          terms: [
            '*Limited time offer. This offer applicable to new subscription or existing Now TV/ 1O1O/ csl/ Club Sim/ Netvigator customers who subscribe to this offer via dedicated sales channel. This offer is not applicable to online subscription. Customers can subscribe to 3-pack Soccer Combo (with Set-Top Box or without Set-Top Box) with 24/36 commitment period at HK$228 per month. The subscription fees do not include the SD/HD/4K connection fee and rental fee of a Now TV Set-Top Box. The subscription fees shown here do not include the data usage and charges that incurred for viewing and streaming Now TV contents on Now TV app. Subject to the relevant terms and conditions, please refer to <a href="http://bit.ly/pl2526">bit.ly/pl2526</a>. Now TV services are provided by Now TV Limited and available in designated areas. Now TV is a registered trademark of the HKT group. Please contact the salesperson for details. Customer can visit <a href="http://www.pccw.com">http://www.pccw.com</a> for store location.'
          ],
          backgroundColor: '#a21f2d',
        },
        
      },
      {
        id: 'slide-1',
        image: {
          mobile: slide2Mobile,
          desktop: slide2Desktop,
        },
        content: {
          title: 'Immerse in entertainment at its finest with Now TV.',
          description: 'Take yourself into the new streaming experience & indulge in top-notch sports, news, movies, and drama on your mobile, tablet, or smart TV@. Enjoy the freedom to watch with or without a set-top box – anywhere, anytime in HK\n\nDownload & register to access designated free content*.',
          buttonText: 'Learn More',
          terms: [
            '<sup>*</sup>Now TV will broadcast all Premier League matches in Hong Kong exclusively on pay TV for the seasons of 2024/25 to 2027/28.',
            '<sup>#</sup>The live broadcast period will be based on the Ocean Park\'s opening hours of the animal habitat. Please note that the timetable may be adjusted based on actual venue conditions. Live broadcast content may be delayed compared to the actual situation. The live streaming service is only available for use within Hong Kong.',
            'All program content and matches are subject to cancellation and/or suspension by the rights holders and/or event organizers.',
            'Dates and times of all aforementioned matches and sporting events may be subject to change from time to time, so please refer to official announcements by the rights holders and event organizers for the latest information.'
          ],
        },
        
      },
      {
        id: 'slide-2',
        image: {
          mobile: slide1Mobile,
          desktop: slide1Desktop,
        },
        content: {
          titleArt: slide1TitleArt,
          description: 'The quadrennial big event is about to unveil! Subscribe designated service plan to get an Early Bird discount on the event pass at $350*(list price $880). Don’t miss the chance to enjoy all exclusive 51 matches* on Now TV!',
          buttonText: 'Learn More',
          terms: [
            '<sup>*</sup>Now TV will broadcast all Premier League matches in Hong Kong exclusively on pay TV for the seasons of 2024/25 to 2027/28.',
            '<sup>#</sup>The live broadcast period will be based on the Ocean Park\'s opening hours of the animal habitat. Please note that the timetable may be adjusted based on actual venue conditions. Live broadcast content may be delayed compared to the actual situation. The live streaming service is only available for use within Hong Kong.',
            'All program content and matches are subject to cancellation and/or suspension by the rights holders and/or event organizers.',
            'Dates and times of all aforementioned matches and sporting events may be subject to change from time to time, so please refer to official announcements by the rights holders and event organizers for the latest information.'
          ],
          backgroundColor: '#e77b0f',
        },
      },
      {
        id: 'slide-3',
        image: {
          mobile: slide3Mobile,
          desktop: slide3Desktop,
        },
        content: {
          title: 'All 6 Pandas Have Arrived!\nCatch the exclusive action now!',
          description: 'Panda twin cubs are here! Catch their adorable antics anytime on Panda TV Channel 200 with two exclusive live cameras. Sign up FREE* to enjoy nonstop panda action, live streams, and special clips on the Now TV App or your set-top box—bringing all six giant pandas closer than ever.',
          buttonText: 'Sign up Now ID now',
          terms: [
            '<sup>*</sup>This is a different set of terms for slide 3.',
            'These terms are specific to the content shown in slide 3.',
            'Please read carefully before proceeding.',
            'All terms and conditions are subject to change without notice.'
          ],
          backgroundColor: '#e36623',
          chlibLogo: slide3ChlibLogo,
        },
      },
      {
        id: 'slide-4',
        image: {
          mobile: slide4Mobile,
          desktop: slide4Desktop,
        },
        content: {
          subtitle: 'Now TV',
          title: 'Ultimate Sports & Entertainment Bundle',
          description: 'Experience the thrill of live sports and the best of Netflix with Now TV! Get incredible value and a variety of entertainment all in one place!',
          buttonText: 'Learn More',
          chlibLogo: slide4ChlibLogo,
        },
      },
      {
        id: 'slide-5',
        image: {
          mobile: slide5Mobile,
          desktop: slide5Desktop,
        },
        content: {
          title: 'MITSUI\nMultiple Shopping Privileges',
          description: 'Now TV is offering FREE ¥500 MITSUI Outlet shopping vouchers and up to 10% discount at 20 designated Mitsui Outlet branches and shopping centres in Japan, including Tokyo Kisarazu – the largest in the country. Enjoy a variety of shopping privileges on your trip!',
          buttonText: 'Grab the coupon NOW',
          isDark: true,
          backgroundColor: '#2c3e50',
        },
      },
      {
        id: 'slide-6',
        image: {
          mobile: slide6Mobile,
          desktop: slide6Desktop,
        },
        content: {
          title: 'Get Max & More only on Now TV',
          description: 'Endless Epic Western Entertainment\nLimited Time Offer\nAs low as $78/month for designated customers*',
          buttonText: 'Learn More',
          backgroundColor: '#bf5634',
          termsText: '*Terms and conditions apply',
        },
      },
      {
        id: 'slide-7',
        image: {
          mobile: slide7Mobile,
          desktop: slide7Desktop,
        },
        content: {
          customImage: slide7Title,
          staticLink: '#',
          staticLinkText: 'Buy Now',
          isDark: true,
          isCentered: true,
          description: '',
        },
      },
      {
        id: 'slide-fake',
        image: {
          mobile: slideFakeMobile,
          desktop: slideFakeDesktop,
        },
        content: {
          title: 'Beware of scammers posing as the company to steal bank information',
          description: 'Beware of scammers posing as telecom staff to steal bank or card details. Now TV never requests such info by phone. Confirm identities via SEM sender “Now TV” or official WhatsApp. Use the “My HKT” app for secure payments. If unsure, call 1000 or contact Anti-Fraud Support on WhatsApp 6800 0123.',
          buttonText: 'Learn More',
          backgroundColor: '#111022',
        },
      },
    ],
  },
};
