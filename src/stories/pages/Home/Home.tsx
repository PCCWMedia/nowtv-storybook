import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { HeroBanner } from '../../components/Swiper/HeroBanner/HeroBanner';
import { FullscreenBG } from '../../components/Fullscreen/FullscreenBG/FullscreenBG';
import PlanCard from '../../components/Card/PlanCard/PlanCard';
import SplitFeature from '../../components/SplitFeature/SplitFeature';
import { CookiesBar } from '../../components/CookiesBar/CookiesBar';
import slidePLMobile from '../../assets/img/home/Now-TV-PL2526-750X700-EN.jpg';
import slidePLDesktop from '../../assets/img/home/Now-TV-PL2526-1500X700-EN.jpg';
import slide1Mobile from '../../assets/img/home/uefa-mobile.jpg';
import slide1Desktop from '../../assets/img/home/uefa-desktop.jpg';
import slide1ChlibLogo from '../../assets/img/ch-logo/netflix-logo-r.svg';
import slide2Mobile from '../../assets/img/home/NowOTT_750x700-EN-1.jpg';
import slide2Desktop from '../../assets/img/home/NowOTT_1500x720-EN-1.jpg';
import slide3Mobile from '../../assets/img/home/Panda_CH_750x700_bkg_20250602_en.jpg';
import slide3Desktop from '../../assets/img/home/Panda_CH_1500x720_bkg_20250214_en.jpg';

import slideMovieMobile from '../../assets/img/home/NowTV-King-of-Movie-750X700-EN.jpg';
import slideMovieDesktop from '../../assets/img/home/NowTV-King-of-Movie-1500X720-EN.jpg';
import slide1TitleArt from '../../assets/img/home/uefa-title.png';

import slideFakeMobile from '../../assets/img/home/fake-mobile.jpg';
import slideFakeDesktop from '../../assets/img/home/fake-desktop.jpg';

// Fullscreen Split
import FullscreenSplit from '../../components/Fullscreen/FullscreenSplit/FullscreenSplit';
import subscribeTodayImage from '../../assets/img/home/aladin4.png';


// Now Signature Pack
import NowSignaturePackDesktop from '../../assets/img/home/h1_1920x1080.jpg';
import NowSignaturePackMobile from '../../assets/img/home/h1_750x650.jpg';


// Super Sports & Entertainment Combo 12-month Pass
import SuperSportsComboSquare from '../../assets/img/home/3-Pack-Soccer-Combo-Square.jpg';
import SuperSportsComboBanner from '../../assets/img/home/SSPP_Now_Signature_STEM_banner_12209d63f5.jpg';

// split section
import h1BGImage from '../../assets/img/home/h1-kb-bg.jpg';
import h1Logo from '../../assets/img/home/h1-w.svg';
import h1FeatureImage from '../../assets/img/home/h1-features.png';

import nowplayerBGImage from '../../assets/img/home/nowplayer-dark-bg.jpg';
import nowplayerFeatureImage from '../../assets/img/home/nowplayer-download_e.png';

// VE Section
import VEDesktopImage from '../../assets/img/home/1500x720_YourMovieExpress.jpg';
import VEMobileImage from '../../assets/img/home/750x700_YourMovieExpress.jpg';

// nowstudio
import nowstudioBGImage from '../../assets/img/home/nowstudio_bg.jpg';
import nowstudioLogo from '../../assets/img/home/nowstudio-logo-w.svg';
import nowstudioFeatureImage from '../../assets/img/home/nowstudio-poster_e.png';

// nowtrue
import nowtrueBGImage from '../../assets/img/home/nowtrue-bg.jpg';
import nowtrueLogo from '../../assets/img/home/nowtrue-w-logo.svg';
import nowtrueFeatureImage from '../../assets/img/home/nowtrue-poster.png';

// css
import './Home.scss';

const Home: React.FC = () => {
  const heroSlides = [
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
        title: '6隻大熊貓全部登陸Now TV  ​獨家鏡頭即時睇',
        description: '熊貓BB「加加」（家姐）同「得得」（細佬）現已登場啦！即到200台收看熊貓直播，新增兩個獨家鏡頭，一齊隨時隨地捕捉6隻大熊貓獨家可愛一面！# 仲有更多熊貓絕密片段等緊你! 無論用Now TV應用程式或機頂盒都一樣方便！新用戶亦可免費下載登記',
        buttonText: '立即登記Now ID',
        terms: [
          '<sup>*</sup>直播時段將依照海洋公園展館的開放時間進行。請注意，時間表可能會根據場館實際情況而進行調整，直播內容與現場實際情況存在延遲。直播只限香港境內使用。*請下載及登入Now TV應用程式免費登記Now ID。熊貓 TV 200台只適用於成功登記Now ID 之客戶。'
        ],
        backgroundColor: '#e36623',
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
  ];

  return (
    <div className="home-page">
      <Header 
        status="normal"
        onLoginClick={() => console.log('Login clicked')}
      />
      <main>
        <HeroBanner slides={heroSlides} />


        <section>
          <FullscreenSplit
            image={subscribeTodayImage}
            title="Subscribe Today"
            subtitle="Pick your favourite genres and personalize your plan. Take advantage of online exclusive offers."
            priceText="Plans start from just"
            startingPrice="HK$88"
            ctaUrl="https://www.nowtv.now.com/subscribe/"
            ctaText="Get Started"
          />
        </section>

        <section>
          <FullscreenBG
            desktopImage={NowSignaturePackDesktop}
            mobileImage={NowSignaturePackMobile}
            contentPosition="right"
            title="Now Signature Pack"
            description="Top-notch movies from Hong Kong and around the world, plus Asian TV series, factual, kids , live sports programmes all in one pack for every family members! You name it! 16K+ hours of on-demand programmes available!"
            startingPrice="HK$98"
            ctaText="Subscribe Now"
            ctaUrl="https://www.nowtv.now.com/subscribe/"
            backgroundColor="#20130d"
          />
        </section>

        <section>
          <div className='container'>
            <PlanCard
              image={SuperSportsComboBanner}
              imageSquare={SuperSportsComboSquare}
              title="Super Sports & Entertainment Combo 12-month Pass"
              description="Watching world-class European football leagues: Premier League, LaLiga, Bundesliga, UEFA Champions League, UEFA Europa League, UEFA Europa Conference League and other sports contents like Formula One, MotoGP™ and all tennis grand slams. Get top-grossing Asian movies and drama series, documentary, and bring kid the STEM programs!"
              planIncludes={['Super Sports Pack Plus', 'Now Signature Pack', 'STEM Learning Pack', 'Starter Pack']}
              price="$388"
              notes="*Terms and conditions apply"
              variant="fullscreen"
              buttonLabel="Subscribe Now"
            />
          </div>
        </section>

        <section className='split-section'>
          <SplitFeature
            backgroundImage={h1BGImage}
            title="Your home just got smarter."
            subtitle="(Not to mention more fun.)"
            channelLogo={h1Logo}
            posterImage={h1FeatureImage}
            buttonLink="/learn-more"
            buttonLabel="Learn More"
            isDark={true}
          />
          <SplitFeature
            backgroundImage={nowplayerBGImage}
            title="Anytime, Anywhere with Now TV App and Smart TV App"
            description="Another option without Box! You can instantly watch live and on-demand on phone, tablet and Smart TV App. Free with your subscription, download Now TV App on your mobile or Now TV app on Smart TV. Bind your account, and start using now!"
            posterImage={nowplayerFeatureImage}
            buttonLink="/learn-more"
            buttonLabel="Download Now TV App"
            detailsLink="/smart-tv-details"
            detailsLabel="More details of Smart TV App"
            isDark={true}
          />
        </section>


        <section>
          <FullscreenBG
            desktopImage={VEDesktopImage}
            mobileImage={VEMobileImage}
            contentPosition="left"
            title="Your Movie Express"
            description="Enjoy the greatest titles from Video Express on a pay-per-view basis. "
            ctaText="Watch Now"
            ctaUrl="https://www.nowtv.now.com/subscribe/"
            backgroundColor="#205131"
          />
        </section>


        <section className='split-section'>
          <SplitFeature
            backgroundImage={nowstudioBGImage}
            title="Fresh from the West"
            description="Binge the best In drama and entertainment, from the uncut edgy to the addictively entertaining."
            channelLogo={nowstudioLogo}
            posterImage={nowstudioFeatureImage}
            buttonLink="/learn-more"
            buttonLabel="Learn More"
            isDark={true}
          />
          <SplitFeature
            backgroundImage={nowtrueBGImage}
            title="Now True"
            description="Cutting-edge and award-winning documentaries, lifestyle and culture."
            channelLogo={nowtrueLogo}
            posterImage={nowtrueFeatureImage}
            buttonLink="/learn-more"
            buttonLabel="Learn More"
            isDark={true}
          />
        </section>


      </main>


    <Footer status="normal" />
    <CookiesBar isVisible={true} />
    </div>
  );
};

export default Home;
