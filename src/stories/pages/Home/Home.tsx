import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { HeroBanner } from '../../components/Swiper/HeroBanner/HeroBanner';
import { FullscreenBG } from '../../components/Fullscreen/FullscreenBG/FullscreenBG';
import PlanCard from '../../components/Card/PlanCard/PlanCard';
import SplitFeature from '../../components/SplitFeature/SplitFeature';
import slide1Mobile from '../../assets/img/home/Now_Netflix_750x700_en.jpg';
import slide1Desktop from '../../assets/img/home/Now_Netflix_1500x720_en.jpg';
import slide1ChlibLogo from '../../assets/img/ch-logo/netflix-logo-r.svg';
import slide2Mobile from '../../assets/img/home/NowOTT_750x700-EN-1.jpg';
import slide2Desktop from '../../assets/img/home/NowOTT_1500x720-EN-1.jpg';


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
      id: '1',
      image: {
        mobile: slide1Mobile,
        desktop: slide1Desktop
      },
      content: {
        title: 'Get Max & More only on Now TV',
        description: 'Endless Epic Western Entertainment<br>Limited Time Offer<br>As low as $78/month for designated customers*',
        buttonText: 'Learn More',
        buttonLink: 'https://www.nowtv.now.com/west/',
        isDark: false,
        isCentered: false,
        backgroundColor: '#0b0b0b',
        termsText: '*Terms and conditions apply',
        chlibLogo: slide1ChlibLogo,
      }
    },
    {
      id: '2',
      image: {
        mobile: slide2Mobile,
        desktop: slide2Desktop
      },
      content: {
        title: 'Immerse in entertainment at its finest with Now TV. ',
        description: 'Take yourself into the new streaming experience & indulge in top-notch sports, news, movies, and drama on your mobile, tablet, or smart TV@. Enjoy the freedom to watch with or without a set-top box – anywhere, anytime in HK.',
        buttonText: 'Learn More',
        buttonLink: 'https://www.nowtv.now.com/page/thenewnow/',
        isDark: false,
        isCentered: false,
        terms: [
          '<sup>@*</sup>Terms and Conditions apply, pls refer to the Terms and Conditions of Now TV, Now TV Contract/Application '
        ],
      }
    }
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
    </div>
  );
};

export default Home;
