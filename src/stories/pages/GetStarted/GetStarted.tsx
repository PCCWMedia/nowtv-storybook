import React, { useRef, useEffect, useState } from 'react';
import './GetStarted.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AlertBar from '../../components/AlertBar/AlertBar';
import { CookiesBar } from '../../components/CookiesBar/CookiesBar';
import PlanCard from '../../components/Card/PlanCard/PlanCard';
import Plans from '../../components/Swiper/Plans/Plans';
import Link from '../../components/Link/Link';
import { Button } from '../../components/Button/Button';
import FilterChannelsOverlay from '../../components/Overlay/FilterChannelsOverlay/FilterChannelsOverlay';
import plansData from '../../assets/data/plans.json';
import LikeNowEOverlay from '../../components/Overlay/LikeNowEOverlay/LikeNowEOverlay';

import noweLogo from '../../assets/img/get-started/nowe_logo.svg';
import noweHelp from '../../assets/img/get-started/help-circle.svg';
import getstartedBox from '../../assets/img/get-started/tv-box-en.png';

interface GetStartedProps {
  showLikeNowEOverlayDefault?: boolean;
  isNowEParamDefault?: boolean;
}

const GetStarted: React.FC<GetStartedProps> = ({ showLikeNowEOverlayDefault = false, isNowEParamDefault = false }) => {
    const genreRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeGenres, setActiveGenres] = useState<{ [key: string]: boolean }>({});
    const [isFilterOverlayOpen, setIsFilterOverlayOpen] = useState(false);
    const [selectedFilterItem, setSelectedFilterItem] = useState<any>(null);
    const [showLikeNowEOverlay, setShowLikeNowEOverlay] = useState(showLikeNowEOverlayDefault);
    const [isNowEParam, setIsNowEParam] = useState(isNowEParamDefault);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('nowe') === 'y') {
            setShowLikeNowEOverlay(true);
            setIsNowEParam(true);
        }   
    }, []);

    useEffect(() => {
        if (isFilterOverlayOpen || showLikeNowEOverlay) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        // Clean up in case component unmounts while modal is open
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isFilterOverlayOpen, showLikeNowEOverlay]);

    // genres array will be defined after plan arrays

    // Height adjustment function
    const adjustRowHeights = () => {
        rowRefs.forEach(ref => {
            if (ref.current) {
                const tops = ref.current.querySelectorAll<HTMLElement>('.top');
                const includes = ref.current.querySelectorAll<HTMLElement>('.includes');
                tops.forEach(el => el.style.height = 'auto');
                includes.forEach(el => el.style.height = 'auto');
                let maxTop = 0, maxIncludes = 0;
                tops.forEach(el => { maxTop = Math.max(maxTop, el.offsetHeight); });
                includes.forEach(el => { maxIncludes = Math.max(maxIncludes, el.offsetHeight); });
                tops.forEach(el => el.style.height = `${maxTop}px`);
                includes.forEach(el => el.style.height = `${maxIncludes}px`);
            }
        });
    };

    // Scroll to genre
    const scrollToGenre = (index: number) => {
        const ref = genreRefs.current[index];
        if (ref) {
            const offset = window.innerWidth < 1199 ? 50 : 73;
            const top = ref.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    // Toggle genre active state and scroll
    const handleGenreClick = (genreKey: string, index: number) => {
        setActiveGenres(prev => {
            const isOpening = !prev[genreKey];
            const newState = { ...prev, [genreKey]: isOpening };
            if (isOpening) {
                setTimeout(() => scrollToGenre(index), 350); // Only scroll when opening
            }
            return newState;
        });
    };

    useEffect(() => {
        adjustRowHeights();
        window.addEventListener('resize', adjustRowHeights);
        return () => {
            window.removeEventListener('resize', adjustRowHeights);
        };
    }, []);

    const dayPassPlan = [
        {
          image: "https://www.nowtv.now.com/media/Pack-folder/PL-LL-Pack-banner.jpg",
          title: "Premier League and LALIGA EA SPORTS Day Pass",
          description: "Premier League and LALIGA EA SPORTS Day Pass offers channels dedicated to world class soccer – Premier League and LaLiga. Customer may also relive the exciting moments of selected sports events with the video-on-demand service.",
          planIncludes: ["Soccer Pack"],
          price: "128",
          notes: "Instant access. No installation needed.",
          subNow: "Subscribe Now",
          priceType: 'day' as const,
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/beIN-sports-pack-banner-2.jpg",
            title: "beIN SPORTS Super Pack Day Pass",
            description: "Offers a stellar selection of LIVE sport action all year-round including UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, Bundesliga, Formula One and more.",
            planIncludes: ["beIN SPORTS Super Pack"],
            price: "108",
            notes: "Instant access. No installation needed.",
            subNow: "Subscribe Now",
            priceType: 'day' as const,
        },{
            image: "https://www.nowtv.now.com/media/Pack-folder/nba-pack.jpg",
            title: "NBA Pack Day Pass",
            description: "Watching the selected NBA live games on Now TV, including regular season, In-season tournaments, All-star weekend, Playoffs and Finals. NBA TV channel also provides round-the-clock coverage of selected live games, game replays, and other exciting content.",
            planIncludes: ["NBA Pack"],
            price: "38",
            notes: "Instant access. No installation needed.",
            subNow: "Subscribe Now",
            priceType: 'day' as const,
        }
    ];

    const sportsPlan = [
        {
          image: "https://www.nowtv.now.com/media/Pack-folder/SSPP-Now-Signature-STEM-banner.jpg",
          title: "Super Sports & Entertainment Combo",
          description: "Watching world-class European football leagues: Premier League, LALIGA EASPORTS, UEFA Champions League, UEFA Europa League and other sports contents like Formula One. Get top-grossing Asian movies and drama series, documentary, and bring kid the STEM programs!",
          planIncludes: ["Super Sports Pack Plus", "Now Signature Pack", "STEM Learning Pack", "Starter Pack"],
          price: "388",
          notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/nba-pack.jpg",
            title: "NBA Pack",
            description: "Watching the selected NBA live games on Now TV, including regular season, In-season tournaments, All-star weekend, Playoffs and Finals. NBA TV channel also provides round-the-clock coverage of selected live games, game replays, and other exciting content.",
            planIncludes: ["NBA Pack"],
            price: "88",
            notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/Tennis-Pack-banner.jpg",
            title: "Now Tennis Pack",
            description: "Now Tennis Pack Broadcast a stellar selection of live tennis, featuring both the ATP and WTA, along with the Grand Slam tournament: Australian Open, Roland Garros, Wimbledon, and US Open! ",
            planIncludes: ["Now Tennis Pack"],
            price: "148",
            notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/beIN-sports-pack-banner-2.jpg",
            title: "beIN SPORTS Super Pack",
            description: "Offers a stellar selection of LIVE sport action all year-round including UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, Bundesliga, Formula One and more.",
            planIncludes: ["beIN SPORTS Super Pack"],
            price: "168",
            notes: "Instant access. No installation needed.",
        }
    ];

    const entertainmentPlan = [
        {
          image: "https://www.nowtv.now.com/media/Pack-folder/NSP-WSP-Pack-banner.jpg",
          title: "Signature Combo",
          description: "Signature Combo provides you with 20 channels and 18 On-Demand Services, along with the Max App, enabling you to immerse yourself in a diverse range of premium entertainment. From Hollywood and Asian blockbusters to captivating TV series, variety shows, and factual content, this package combines the best of our Western Signature Pack and Now Signature Pack. Plus, enjoy the thrill of various sports events with Now Sport 1!",
          planIncludes: ["Western Signature Pack", "Now Signature Pack"],
          price: "148",
          notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/Chinese-Entertainment-Pack-Banner.jpg",
            title: "Chinese Entertainment Pack",
            description: "Now Baogu Superstars offers classic Hong Kong Movies, featuring a monthly selection of award-winning titles to take you back to the glorious years of the local film industry. NowJelli and Now Chinese Drama feature the latest mainland variety entertainment programs and popular Chinese dramas for binge-watching.",
            planIncludes: ["Chinese Entertainment Pack"],
            price: "68",
            notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/NowTrue-banner.jpg",
            title: "On Demand - Now True",
            description: "Now True brings cutting edge documentary, lifestyle, and cultural programming. With biographies, art, business, food and travel, science and technology, society, nature and beyond, Now True reveals the world around us with insight and inspiration. Available on demand and with select content in 4K. ",
            planIncludes: ["Now Tennis Pack"],
            price: "88",
            notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/nowstudio-banner-2.jpg",
            title: "On Demand - Now Studio",
            description: "Binge the best In drama and entertainment, from the uncut edgy to the addictively entertaining.",
            planIncludes: ["On Demand - Now Studio"],
            price: "88",
            notes: "Instant access. No installation needed.",
        }
    ];

    const funLearnPlan = [
        {
          image: "https://www.nowtv.now.com/media/Pack-folder/STEMLearningPack-banner.jpg",
          title: "STEM Learning Pack",
          description: "Make play time educational. The STEM Learning Pack features a collection of STEM learning programs from Now Learn on demand & Da Vinci to inspire kids to fall in love with science, technology, engineering, mathematics, astronomy, arts and more.",
          planIncludes: ["STEM Learning Pack"],
          price: "88",
          notes: "Instant access. No installation needed.",
        },
        {
            image: "https://www.nowtv.now.com/media/Pack-folder/JuniorPack-banner.jpg",
            title: "Junior Pack",
            description: "The Junior Pack brings the kids' favourite channels & On-demand programs: Cartoon Network, CBeebies, Dreamworks, Moonbug, Nickelodeon, Nick Jr., Watch n Learn, Cartoon Network On Demand, CBeebies On Demand, Nickelodeon On Demand and DreamWorks On Demand.",
            planIncludes: ["Junior Pack"],
            price: "88",
            notes: "Instant access. No installation needed.",
        }
    ];

    const genres = [
      { key: 'dayPass', label: 'Day Pass', plans: dayPassPlan },
      { key: 'sports', label: 'Sports', plans: sportsPlan },
      { key: 'entertainment', label: 'Entertainment', plans: entertainmentPlan },
      { key: 'funLearn', label: 'Fun & Learn', plans: funLearnPlan },
      // Add more genres here as needed
    ];

    // ... after genres array is defined ...
    const rowCount = genres.length;
    const rowRefs = Array.from({ length: rowCount }, () => useRef<HTMLDivElement>(null));

    // Helper to find plan by channel/catalog id
    const findPlanByChannelId = (id: string) => {
        const planKeys = Object.keys(plansData.plans) as (keyof typeof plansData.plans)[];
        for (const planKey of planKeys) {
            const plan = plansData.plans[planKey];
            if (Array.isArray(plan.onDemandNumber) && (plan.onDemandNumber as string[]).includes(id)) {
                return plan;
            }
            if (Array.isArray(plan.channelsNumber) && (plan.channelsNumber as string[]).includes(id)) {
                return plan;
            }
        }
        return null;
    };

    return (
        <div className='getstarted-page'>
            <Header 
                status="normal"
            />

            <AlertBar 
                href="https://id.now.com/nowidform/login.form"
                btnLabel="Login"
                alertHeading="Already a subscriber?"
                alertMsg="Ensure you're seeing the right details"
                showCTA={true}
            />

            <div className='container'>
                <div className='heading'>
                    <h2>Choose a Streaming Plan</h2>
                    <h4>Enjoy these streaming-only plans. Instant access. No installation or set top box needed. Enjoy on Smart TVs, Mobiles, Tablets & PCs!</h4>
                    <h4
                        className={`likenowE${isNowEParam ? ' active' : ''}`}
                        onClick={() => setShowLikeNowEOverlay(true)}
                        style={{ cursor: 'pointer' }}
                    >
                        Just like <img src={noweLogo} alt="Now E" />, but better! <img src={noweHelp} alt="Help" />
                    </h4>
                </div>

                {/* filter plans*/}
                <div className='filter-wrapper'>
                    <div className={`button-wrapper${selectedFilterItem ? ' active' : ''}`}>
                    <Button 
                        className="filter-btn"
                        onClick={() => setIsFilterOverlayOpen(true)}
                    >
                        {selectedFilterItem ? (
                            <>
                                <span>Showing plans for:&nbsp;</span>
                                <img src={`https://www.nowtv.now.com/media/s-logo/${selectedFilterItem.id}_e.png`} alt="" />
                            </>
                        ) : (
                            'See plans for a catalog or channel'
                        )}
                    </Button>
                    <Button 
                        label=""
                        className="close-btn"
                        onClick={() => {
                            setSelectedFilterItem(null);
                            setTimeout(() => adjustRowHeights(), 0);
                        }}
                    />
                    </div>
                    
                    {selectedFilterItem && (() => {
                        // Find all plans that include the selected channel/catalog id
                        const planKeys = Object.keys(plansData.plans) as (keyof typeof plansData.plans)[];
                        const relatedPlans = planKeys
                            .map(planKey => plansData.plans[planKey])
                            .filter((plan: any) =>
                                (Array.isArray(plan.onDemandNumber) && plan.onDemandNumber.includes(selectedFilterItem.id)) ||
                                (Array.isArray(plan.channelsNumber) && plan.channelsNumber.includes(selectedFilterItem.id))
                            );
                        if (!relatedPlans.length) return null;
                        const filteredPlans = relatedPlans.map(plan => {
                            let annualPrice = '';
                            if (Array.isArray(plan.plansData)) {
                                const annualPlan = plan.plansData.find((p: any) => p.type === 'annual');
                                if (annualPlan && typeof annualPlan.price === 'string') {
                                    const match = annualPlan.price.replace(/,/g, '').match(/\$(\d+(?:\.\d+)?)/);
                                    if (match) {
                                        const yearly = parseFloat(match[1]);
                                        if (!isNaN(yearly)) {
                                            const perMonth = Math.round(yearly / 12);
                                            annualPrice = `$${perMonth}`;
                                        }
                                    }
                                }
                            }
                            return {
                                image: plan.plan_img,
                                title: plan.planName,
                                description: plan.description,
                                planIncludes: plan.includes,
                                price: annualPrice,
                                notes: 'Instant access. No installation needed.',
                                priceType: 'from' as const,
                            };
                        });
                        return (
                            <div className='filtered-plans-wrapper'>
                                <div className='plans-wrapper'>
                                    <Plans plans={filteredPlans} />
                                </div>
                                <Link 
                                    href="#"
                                    label="See all plans"
                                    className="arrow"
                                />
                            </div>
                        );
                    })()}

                </div>
                {isFilterOverlayOpen && (
                    <FilterChannelsOverlay
                        isOpen={isFilterOverlayOpen}
                        onClose={() => setIsFilterOverlayOpen(false)}
                        onSelect={item => {
                            setSelectedFilterItem(item);
                            setIsFilterOverlayOpen(false);
                        }}
                    />
                )}

                {showLikeNowEOverlay && (
                    <LikeNowEOverlay
                        onClose={() => setShowLikeNowEOverlay(false)}
                        onContinue={() => setShowLikeNowEOverlay(false)}
                    />
                )}

                {/* plan cards */}
                {!selectedFilterItem && <div className='plan-card-wrapper'>
                    <div className='row' ref={rowRefs[0]}>
                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/Tennis-Pack-banner.jpg"
                            title="Now Tennis Pack 3-Month Pass"
                            description="Now Tennis Pack Broadcast a stellar selection of live tennis, featuring both the ATP and WTA, along with the Grand Slam tournament: Australian Open, Roland Garros, Wimbledon, and US Open!"
                            planIncludes={['Now Tennis Pack', 'Starter Pack']}
                            price="504"
                            priceType="pass"
                            notes="Avg. $168 / month<br>Instant access. No installation needed."
                            buttonLabel="Subscribe Now"
                            buttonUrl="https://ssp.nowtv.now.com/choose-plan?campaign=CPKAL03PD504OTTSU1A"
                        />

                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/3Pack-Soccer-EntertainmentCombo.jpg"
                            title="3-Pack Soccer & Entertainment Combo 13-Month Pass"
                            description="Watching soccer matches of Premier League and LALIGA EA SPORTS 2024/25 - 2025/26 season, along with Now Sports Premier League TV (Ch 620), MUTV, and Now668 horse racing channel; plus Chinese Entertainment Pack - offering the latest Chinese dramas and variety shows, as well as Now Studio On Demand - delivering top-tier Western series."
                            planIncludes={['Soccer Pack', 'MUTV', 'Now Sports Premier League TV', 'On Demand - Now Studio', 'Chinese Entertainment Pack', 'Starter Pack']}
                            price="2880"
                            priceType="pass"
                            notes="Avg. $222 / month<br>Instant access. No installation needed."
                            buttonLabel="Subscribe Now"
                            buttonUrl="https://ssp.nowtv.now.com/choose-plan?campaign=FCBAL12PD2880OTTSECA"
                        />
                    </div>

                    <div className='row' ref={rowRefs[1]}>
                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/Now-Golf-Pack-banner.jpg"
                            title="Now Golf Pack"
                            description="Experience the thrill of world-class golf with live and 24/7 coverage! Don't miss the PGA Tour, DP World Tour, Asian Tour, LIV GOLF League and LPGA, plus the prestigious majors: The Masters and The Open!"
                            planIncludes={['Now Golf Pack', 'Starter Pack']}
                            price="128"
                            notes="Instant access. No installation needed."
                            buttonLabel="See Options"
                        />

                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/beIN-sports-pack-banner-2.jpg"
                            title="beIN SPORTS Super Pack"
                            description="Offers a stellar selection of LIVE sport action all year-round including UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, Bundesliga, Formula One and more."
                            planIncludes={['beIN SPORTS Super Pack', 'Starter Pack']}
                            price="168"
                            notes="Instant access. No installation needed."
                            buttonLabel="See Options"
                        />
                    </div>

                    <div className='row' ref={rowRefs[2]}>
                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/Now-Signature_Pack-banner.jpg"
                            title="Now Signature Pack"
                            description="Top-notch movies from Hong Kong and around the world, plus Asian TV series, factual, kids , live sports programmes all in one pack for every family members! You name it! 16K+ hours of on-demand programmes available!"
                            planIncludes={['Now Signature Pack', 'Starter Pack']}
                            price="98"
                            notes="Instant access. No installation needed."
                            buttonLabel="See Options"
                        />

                        <PlanCard 
                            image="https://www.nowtv.now.com/media/Pack-folder/Western-Signature-Pack-Banner.jpg"
                            title="Western Signature Pack"
                            description="Western Signature Pack offers a mix of Hollywood and European blockbusters, award-winning movies and drama series, most-watched series in the U.S, and Europe, and a range of English general entertainment like talk shows, reality competitions, and cooking programmes, through linear channels and on-demand services by Max, HBO, BBC, AXN and MOViE MOViE etc. Also, Now Studio curates a collection of exclusive, highly anticipated English TV series and shows strongly appealing to audiences."
                            planIncludes={['Western Signature Pack', 'Starter Pack']}
                            price="88"
                            notes="Instant access. No installation needed."
                            buttonLabel="See Options"
                        />
                    </div>
                </div>}

                {/* Or STB */}
                <div className="or-stb-wrapper">
                    <h2>OR</h2>
                    <div className="stb-wrapper">
                        <div className="content">
                            <h2>Upgrade to the Box!</h2>
                            <p>Get a Now TV plan with dedicated set top box. Enjoy full 4K support, low latency streaming and more.</p>

                            <div className="image">
                                <img src={getstartedBox} alt="Set Top Box"></img>
                            </div>

                            <div className="chats">
                                <Link
                                    href="/get-started-box/"
                                    label="See Boosted Bundles"
                                    className="btn primary"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Other Packages */}
                {!selectedFilterItem && <div className='more-packs-wrapper'>
                    <div className='heading'>
                        <h2>Looking for something else?</h2>
                        <h4>Scroll down to see more packs</h4>
                    </div>

                    <div className='genre-packs-wrapper'>
                        {genres.map((genre, index) => (
                            <div
                                key={genre.key}
                                ref={el => { genreRefs.current[index] = el; }}
                                className={`genre ${activeGenres[genre.key] ? 'active' : ''}`}
                            >
                                <h4 onClick={() => handleGenreClick(genre.key, index)}>{genre.label}</h4>
                                <div className="pack-row">
                                    <Plans plans={genre.plans} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Ask for Register */}
                <div className='watch-free-wrapper'>
                    <div className="register-first">
                        <Link
                            href="/register/"
                            label="Can't Decide? Register first!"
                            className="arrow"
                        />
                    </div>

                    <div className='notes'>
                        <p>Sign up with your mobile number & start watching selected free programmes, movies, TV series & live sports events on "Now TV App/Website" via mobile/tablet/website, as well as on "Now TV App" on Smart TV (Samsung TV, LG TV, Android TV and Panasonic Fire TV) today.</p>
                    </div>
                </div>

            </div>

            <Footer status="normal" />
            <CookiesBar isVisible={true} />

            
        </div>
    );
}
export default GetStarted;