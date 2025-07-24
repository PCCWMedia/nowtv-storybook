import React, { useState, useEffect } from "react";
import './Tabs.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs?: TabItem[];
}

const defaultTabs: TabItem[] = [
  { label: "Credit Card", content: (<><h2>Credit Card</h2><p>Tab content 1</p></>) },
  { label: "In Person", content: (<><h2>In Person</h2><p>Tab content 2</p></>) },
  { label: "ATM", content: (<><h2>ATM</h2><p>Tab content 3</p></>) },
  { label: "PPS", content: (<><h2>Heading 4</h2><p>Tab content 4</p></>) },
  { label: "Autopay", content: (<><h2>Heading 5</h2><p>Tab content 5</p></>) },
  // { label: "Faster Payment System (FPS)", content: (<><h2>Heading 6</h2><p>Tab content 5</p></>) },
];

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 991 : false);
  const tabList = tabs && tabs.length > 0 ? tabs : defaultTabs;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 計算 breakpoints
  let swiperBreakpoints;
  if (tabList.length >= 3) {
    swiperBreakpoints = {
      0: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 3 },
    };
  } else if (tabList.length === 2) {
    swiperBreakpoints = {
      0: { slidesPerView: 1 },
      575: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
    };
  } else {
    swiperBreakpoints = {
      0: { slidesPerView: 1 },
      575: { slidesPerView: 1 },
      767: { slidesPerView: 1 },
    };
  }

  return (
    <div className="tabs-wrapper">
        <div className="tabs-options">
            <div className="container">
                {isMobile ? (
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={tabList.length >= 3 ? 3 : tabList.length}
                    navigation
                    spaceBetween={0}
                    className="tabs-swiper"
                    breakpoints={swiperBreakpoints}
                    slidesPerGroup={tabList.length >= 3 ? 3 : tabList.length}
                    onBreakpoint={(swiper, breakpointParams) => {
                      const spv = breakpointParams.slidesPerView;
                      if (typeof spv === 'number') {
                        swiper.params.slidesPerGroup = spv;
                        swiper.update();
                      }
                    }}
                  >
                    {tabList.map((tab, idx) => (
                      <SwiperSlide key={tab.label}>
                        <div
                          className={activeTab === idx ? "active" : ""}
                          onClick={() => setActiveTab(idx)}
                          style={{ cursor: "pointer", listStyle: "none" }}
                        >
                          {tab.label}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <ul>
                    {tabList.map((tab, idx) => (
                    <li
                        key={tab.label}
                        className={activeTab === idx ? "active" : ""}
                        onClick={() => setActiveTab(idx)}
                        style={{ cursor: "pointer" }}
                    >
                        {tab.label}
                    </li>
                    ))}
                  </ul>
                )}
            </div>
            
        </div>
      
      <div className="tabs-content-wrapper">
        <div className="container">
            <div className="tabs-content">{tabList[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;