import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Link from '../../../components/Link/Link';
import Pagination from '../../../components/Pagination/Pagination';
import SearchTabButtons from '../../../components/SearchResult/SearchTabButtons/SearchTabButtons';
import SearchOffer from '../../../components/SearchResult/SearchOffer/SeachOffer';
import SearchProgram from '../../../components/SearchResult/SearchProgram/SearchProgram';
import SearchChannel from '../../../components/SearchResult/SearchChannel/SearchChannel';
import SearchTextOnly from '../../../components/SearchResult/SearchTextOnly/SearchTextOnly';
import '../SearchResultPage.scss';

export type SearchTabId = 'all' | 'offers' | 'program' | 'channels' | 'support' | 'others';
type FilterTabId = Exclude<SearchTabId, 'all'>;

export interface SearchResultPageProps {
  keyword?: string;
  initialTabId?: SearchTabId;
}

const SearchResultPage: React.FC<SearchResultPageProps> = ({
  keyword = 'sports',
  initialTabId = 'all',
}) => {
  const MAX_PREVIEW_ITEMS = 4;
  const MAX_RESULTS_PER_PAGE = 10;
  const [activeTabId, setActiveTabId] = useState<SearchTabId>(initialTabId);
  const [currentPageByTab, setCurrentPageByTab] = useState<Record<FilterTabId, number>>({
    offers: 1,
    program: 1,
    channels: 1,
    support: 1,
    others: 1,
  });
  const [transitionState, setTransitionState] = useState<'idle' | 'fade-out' | 'fade-in'>('idle');
  const fadeOutTimerRef = useRef<number | null>(null);
  const fadeInTimerRef = useRef<number | null>(null);

  const FADE_DURATION_MS = 220;

  useEffect(() => {
    return () => {
      if (fadeOutTimerRef.current) {
        window.clearTimeout(fadeOutTimerRef.current);
      }

      if (fadeInTimerRef.current) {
        window.clearTimeout(fadeInTimerRef.current);
      }
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    const nextTabId = tabId as SearchTabId;

    if (nextTabId === activeTabId) {
      return;
    }

    if (nextTabId !== 'all') {
      setCurrentPageByTab((prev) => ({
        ...prev,
        [nextTabId]: 1,
      }));
    }

    if (fadeOutTimerRef.current) {
      window.clearTimeout(fadeOutTimerRef.current);
    }

    if (fadeInTimerRef.current) {
      window.clearTimeout(fadeInTimerRef.current);
    }

    setTransitionState('fade-out');

    fadeOutTimerRef.current = window.setTimeout(() => {
      setActiveTabId(nextTabId);
      setTransitionState('fade-in');

      fadeInTimerRef.current = window.setTimeout(() => {
        setTransitionState('idle');
      }, FADE_DURATION_MS);
    }, FADE_DURATION_MS);
  };

  const offers = [
    {
      href: '#',
      imageSrc: 'https://www.nowtv.now.com/media/Campaign-folder/:Combo:SportElite:square.png',
      imageAlt: 'Sports Combo',
      title: <><span className="keywords">Sports</span> Combo</>,
      description: <>
        For all-rounded <span className="keywords">sports</span> lovers, you get exciting
        international sporting events and a full spectrum of movies.
      </>,
      price: '$148',
    },
    {
      href: '#',
      imageSrc: 'https://prod.nowtv.now.com/media/Campaign-folder/:Combo:SoccerFever:square.png',
      imageAlt: 'Soccer Combo',
      title: 'Soccer Combo',
      description: <>
        Catch the full season of Premier League and LaLiga with world-class <span className="keywords">sports</span>.
      </>,
      price: '$168',
    },
  ];

  const programs = [
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=202208171729514&type=product',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_vodproduct_desc_t/202208/en_us/original_vertical/202208171729514_400_600',
      imageAlt: 'Liverpool TV beIN Sports',
      title: <>The Day <span className="keywords">Sports</span> Stood Still</>,
      channel: 'HBO Max',
      description: 'Emmy®-winning director Antoine Fuqua (HBO’s What’s My Name | Muhammad Ali) and Oscar®-winning producers Ron Howard and Brian Grazer (A Beautiful Mind) offer a definitive window into 2020’s extraordinary sports season, chronicling its abrupt pause, complex return to competition, and most notably, athletes’ role in the nationwide reckoning on racial injustice that took hold during the pandemic. At the heart of the documentary is a first-person account from executive producer and NBA All-Star Chris Paul, who relives his experience – from playing in the first game that was suspended in March, to suddenly living in quarantine, to his crucial role in helping reopen the NBA safely inside the “bubble.” Featuring a broad collection of in-depth, emotional interviews with a range of sports figures – from athletes in the NBA, MLB, NHL, and Olympics, to team owners, league commissioners, and more – The Day Sports Stood Still spotlights the industry’s critical platform and explores how the pandemic',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S201705260041924&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/201705/en_us/original_vertical/s201705260041924_400_600',
      imageAlt: 'Liverpool TV beIN Sports',
      title: <>Free <span className="keywords">Sports</span> Highlights</>,
      channel: 'Now Sports',
      description: 'Get all the latest sports highlights.',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?id=S202002140102044&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044',
      imageAlt: 'Liverpool TV beIN Sports',
      title: <>Liverpool TV beIN <span className="keywords">Sports</span></>,
      channel: 'beIN Sports',
      description: 'Features every Liverpool FC match in all competitions, including post match analysis.',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202309080169384&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202309/en_us/original_vertical/s202309080169384_400_600',
      imageAlt: 'Liverpool TV beIN Sports',
      title: <>Now <span className="keywords">Sports</span> Junior Anchor</>,
      channel: 'Now Sports',
      description: 'Now TV once again held the "Now Sports Junior Anchor Contest" this year and also produced an online self-study mini series - "Now Sports Junior Anchor Classroom". Now Sports Anchors: Keyman Ma, Kayan Cheung and Gigi Lee are the hosts of the lessons.',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202004240106285&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202004/en_us/original_vertical/s202004240106285_400_600',
      imageAlt: 'ONE Championship',
      title: <>ONE Championship</>,
      channel: 'beIN Sports',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?id=S202112280143584&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202112/en_us/original_vertical/s202112280143584',
      imageAlt: 'ATP Tour Highlights',
      title: <>ATP Tour Highlights</>,
      channel: 'Now Sports',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202212020159186&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202212/en_us/original_vertical/s202212020159186_400_600',
      imageAlt: 'Champions Cup',
      title: <>Champions Cup</>,
      channel: 'PREMIER SPORTS',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?id=S202606100203384&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202606/en_us/original_vertical/s202606170203645',
      imageAlt: 'Best Goals',
      title: <>Best Goals</>,
      channel: 'Now Sports',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?id=S201808020065824&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/201808/en_us/original_vertical/s201808020065824',
      imageAlt: 'PL Online',
      title: <>PL Online</>,
      channel: 'Now Sports',
      description: 'Get all the latest Premier League match highlights after every match day.',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202308180168650&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202308/en_us/original_vertical/s202308180168650_400_600',
      imageAlt: 'Bundesliga Highlights',
      title: <>Bundesliga Highlights</>,
      channel: 'beIN Sports',
      description: 'All the highlights from the latest round of games in Bundesliga.',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202303070162684&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202303/en_us/original_vertical/s202303070162684_400_600',
      imageAlt: 'Formula 2',
      title: <>Formula 2</>,
      channel: 'beIN Sports',
      description: 'FIA Formula 2 Championship',
      ctaLabel: 'See Details in NowPlayer',
    },
    {
      href: 'https://nowplayer.now.com/ondemand/detail?fromSearch=true&id=S202303070162684&type=series',
      target: '_blank' as const,
      imageSrc: 'https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/201508/en_us/original_vertical/s201508170019367',
      imageAlt: 'LaLiga EA Sports Highlights',
      title: <>LaLiga EA <span className="keywords">Sports</span> Highlights</>,
      channel: 'LALIGA',
      description: 'All the highlights from the latest round of matches in LaLiga, Spain\'s top division of football.',
      ctaLabel: 'See Details in NowPlayer',
    },
  ];

  const channels = [
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/621-wbg-e.png',
      imageAlt: 'Now Sports Premier League 1',
      title: <>CH 621 Now <span className="keywords">Sports</span> Premier League 1</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/621/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/622-wbg-e.png',
      imageAlt: 'Now Sports Premier League 2',
      title: <>CH 622 Now <span className="keywords">Sports</span> Premier League 2</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/622/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/623-wbg-e.png',
      imageAlt: 'Now Sports Premier League 3',
      title: <>CH 623 Now <span className="keywords">Sports</span> Premier League 3</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/623/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/624-wbg-e.png',
      imageAlt: 'Now Sports Premier League 4',
      title: <>CH 624 Now <span className="keywords">Sports</span> Premier League 4</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/624/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/625-wbg-e.png',
      imageAlt: 'Now Sports Premier League 5',
      title: <>CH 625 Now <span className="keywords">Sports</span> Premier League 5</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/625/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/626-wbg-e.png',
      imageAlt: 'Now Sports Premier League 6',
      title: <>CH 626 Now <span className="keywords">Sports</span> Premier League 6</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/626/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/627-wbg-e.png',
      imageAlt: 'Now Sports Premier League 7',
      title: <>CH 627 Now <span className="keywords">Sports</span> Premier League 7</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/627/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/631-wbg-e.png',
      imageAlt: 'Now Sports 1',
      title: <>CH 631 Now <span className="keywords">Sports</span> 1</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/631/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/632-wbg-e.png',
      imageAlt: 'Now Sports 2',
      title: <>CH 632 Now <span className="keywords">Sports</span> 2</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/632/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/633-wbg-e.png',
      imageAlt: 'Now Sports 3',
      title: <>CH 633 Now <span className="keywords">Sports</span> 3</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/633/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/634-wbg-e.png',
      imageAlt: 'Now Sports 4',
      title: <>CH 634 Now <span className="keywords">Sports</span> 4</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/634/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/635-wbg-e.png',
      imageAlt: 'Now Sports 5',
      title: <>CH 635 Now <span className="keywords">Sports</span> 5</>,
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/' },
        {
          label: 'See TV Guide',
          href: 'https://nowplayer.now.com/tvguide/channeldetail/635/1?isfromchannel=true',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/L00754-wbg-e.png',
      imageAlt: 'Premier League',
      title: 'Premier League',
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/#on-demand' },
        {
          label: 'Watch On Demand Programs',
          href: 'https://nowplayer.now.com/ondemand/seeall?filterType=appPlayable&nodeId=202001140000043',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/L00601-wbg-e.png',
      imageAlt: 'LaLiga',
      title: 'LaLiga',
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/#on-demand' },
        {
          label: 'Watch On Demand Programs',
          href: 'https://nowplayer.now.com/ondemand/seeall?filterType=appPlayable&nodeId=202001140000044',
          target: '_blank' as const,
        },
      ],
    },
    {
      imageSrc: 'https://www.nowtv.now.com/media/logo/L00367-wbg-e.png',
      imageAlt: 'Formula 1',
      title: 'Formula 1',
      links: [
        { label: 'See Details', href: 'https://www.nowtv.now.com/channel-overview/#on-demand' },
        {
          label: 'Watch On Demand Programs',
          href: 'https://nowplayer.now.com/ondemand/seeall?filterType=appPlayable&nodeId=202108260000123',
          target: '_blank' as const,
        },
      ],
    },
  ];

  const supportItems = [
    {
      href: '#',
      title: <>4K <span className="keywords">Sports</span> Video</>,
      description: 'FAQ: What do I need in order to watch 4K content via Now One?',
    },
    {
      href: '#',
      title: <><span className="keywords">Sports</span> Recording</>,
      description: 'Record selected TV channels and watch your favorite games whenever you want.',
    },
  ];

  const otherItems = [
    {
      href: '#',
      title: 'Advertise with Now TV',
      description: <>Reach more than 1.36m <span className="keywords">sports</span> subscriber households.</>,
    },
    {
      href: '#',
      title: 'Now TV Business',
      description: <>Explore business solutions powered by Now <span className="keywords">Sports</span>.</>,
    },
  ];

  const tabs = useMemo(() => [
    { id: 'all', label: 'All', count: offers.length + programs.length + channels.length + supportItems.length + otherItems.length },
    { id: 'offers', label: 'Offers', count: offers.length },
    { id: 'program', label: 'Program', count: programs.length },
    { id: 'channels', label: 'Channels & Catalogs', count: channels.length },
    { id: 'support', label: 'Support', count: supportItems.length },
    { id: 'others', label: 'Others', count: otherItems.length },
  ], [channels.length, offers.length, otherItems.length, programs.length, supportItems.length]);

  const shouldShow = (section: SearchTabId) => activeTabId === 'all' || activeTabId === section;

  const getVisibleItems = <T,>(section: SearchTabId, items: T[]): T[] => {
    if (activeTabId === 'all') {
      return items.slice(0, MAX_PREVIEW_ITEMS);
    }

    if (activeTabId === section) {
      const currentPage = currentPageByTab[section];
      const startIndex = (currentPage - 1) * MAX_RESULTS_PER_PAGE;
      return items.slice(startIndex, startIndex + MAX_RESULTS_PER_PAGE);
    }

    return items;
  };

  const shouldShowMoreResults = (totalItems: number): boolean => {
    return activeTabId === 'all' && totalItems > MAX_PREVIEW_ITEMS;
  };

  const handleMoreResultsClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetTabId: FilterTabId,
  ) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleTabChange(targetTabId);
  };

  const shouldShowPagination = (section: SearchTabId, totalItems: number): boolean => {
    return section !== 'all' && activeTabId === section && totalItems > MAX_RESULTS_PER_PAGE;
  };

  const handleResultsPageChange = (section: FilterTabId, page: number) => {
    setCurrentPageByTab((prev) => ({
      ...prev,
      [section]: page,
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="search-result-page">
      <Header status="normal" />

      <main className="search-result-main">
        <div className="pageheading">
          <div className="container">
            <h2>Search Result for "{keyword}"</h2>
          </div>
        </div>

        <section className="search-result-content">
          <div className="container">
            <SearchTabButtons
              tabs={tabs}
              activeTabId={activeTabId}
              onTabChange={handleTabChange}
            />

            <div className={`results-transition ${transitionState}`.trim()}>
            {shouldShow('offers') ? (
              <div className="support-search-box offers all">
                <div className="heading">
                  <h5>Offers</h5>
                  {shouldShowMoreResults(offers.length) ? (
                    <Link
                      href="#"
                      label="More Results"
                      className="link arrow"
                      onClick={(event) => handleMoreResultsClick(event, 'offers')}
                    />
                  ) : null}
                </div>
                <div className="seearticles">
                  {getVisibleItems('offers', offers).map((item) => (
                    <div className="articlesRow" key={`${item.imageSrc}-${item.price}`}>
                      <SearchOffer {...item} />
                    </div>
                  ))}
                </div>
                {shouldShowPagination('offers', offers.length) ? (
                  <Pagination
                    totalPages={Math.ceil(offers.length / MAX_RESULTS_PER_PAGE)}
                    currentPage={currentPageByTab.offers}
                    onPageChange={(page) => handleResultsPageChange('offers', page)}
                  />
                ) : null}
              </div>
            ) : null}

            {shouldShow('program') ? (
              <div className="support-search-box program all">
                <div className="heading">
                  <h5>Programs</h5>
                  {shouldShowMoreResults(programs.length) ? (
                    <Link
                      href="#"
                      label="More Results"
                      className="link arrow"
                      onClick={(event) => handleMoreResultsClick(event, 'program')}
                    />
                  ) : null}
                </div>
                <div className="seearticles">
                  {getVisibleItems('program', programs).map((item) => (
                    <div className="articlesRow" key={`${item.imageSrc}-${item.channel}`}>
                      <SearchProgram {...item} highlightKeyword={keyword} />
                    </div>
                  ))}
                </div>
                {shouldShowPagination('program', programs.length) ? (
                  <Pagination
                    totalPages={Math.ceil(programs.length / MAX_RESULTS_PER_PAGE)}
                    currentPage={currentPageByTab.program}
                    onPageChange={(page) => handleResultsPageChange('program', page)}
                  />
                ) : null}
              </div>
            ) : null}

            {shouldShow('channels') ? (
              <div className="support-search-box channels all">
                <div className="heading">
                  <h5>Channels and Catalogs</h5>
                  {shouldShowMoreResults(channels.length) ? (
                    <Link
                      href="#"
                      label="More Results"
                      className="link arrow"
                      onClick={(event) => handleMoreResultsClick(event, 'channels')}
                    />
                  ) : null}
                </div>
                <div className="seearticles">
                  {getVisibleItems('channels', channels).map((item) => (
                    <div className="articlesRow" key={`${item.imageSrc}-${item.imageAlt}`}>
                      <SearchChannel {...item} />
                    </div>
                  ))}
                </div>
                {shouldShowPagination('channels', channels.length) ? (
                  <Pagination
                    totalPages={Math.ceil(channels.length / MAX_RESULTS_PER_PAGE)}
                    currentPage={currentPageByTab.channels}
                    onPageChange={(page) => handleResultsPageChange('channels', page)}
                  />
                ) : null}
              </div>
            ) : null}

            {shouldShow('support') ? (
              <div className="support-search-box support all">
                <div className="heading">
                  <h5>Support</h5>
                  {shouldShowMoreResults(supportItems.length) ? (
                    <Link
                      href="#"
                      label="More Results"
                      className="link arrow"
                      onClick={(event) => handleMoreResultsClick(event, 'support')}
                    />
                  ) : null}
                </div>
                <div className="seearticles">
                  {getVisibleItems('support', supportItems).map((item) => (
                    <div className="articlesRow" key={`${item.href}-${String(item.title)}`}>
                      <SearchTextOnly {...item} />
                    </div>
                  ))}
                </div>
                {shouldShowPagination('support', supportItems.length) ? (
                  <Pagination
                    totalPages={Math.ceil(supportItems.length / MAX_RESULTS_PER_PAGE)}
                    currentPage={currentPageByTab.support}
                    onPageChange={(page) => handleResultsPageChange('support', page)}
                  />
                ) : null}
              </div>
            ) : null}

            {shouldShow('others') ? (
              <div className="support-search-box others all">
                <div className="heading">
                  <h5>Others</h5>
                  {shouldShowMoreResults(otherItems.length) ? (
                    <Link
                      href="#"
                      label="More Results"
                      className="link arrow"
                      onClick={(event) => handleMoreResultsClick(event, 'others')}
                    />
                  ) : null}
                </div>
                <div className="seearticles">
                  {getVisibleItems('others', otherItems).map((item) => (
                    <div className="articlesRow" key={`${item.href}-${String(item.title)}`}>
                      <SearchTextOnly {...item} />
                    </div>
                  ))}
                </div>
                {shouldShowPagination('others', otherItems.length) ? (
                  <Pagination
                    totalPages={Math.ceil(otherItems.length / MAX_RESULTS_PER_PAGE)}
                    currentPage={currentPageByTab.others}
                    onPageChange={(page) => handleResultsPageChange('others', page)}
                  />
                ) : null}
              </div>
            ) : null}
            </div>
          </div>
        </section>

        


      </main>

      <Footer status="normal" />
    </div>
  );
};

export default SearchResultPage;
