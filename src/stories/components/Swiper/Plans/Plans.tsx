import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Plans.scss';
import PlanCard from '../../Card/PlanCard/PlanCard';
import PackOverlay from '../../Overlay/PackOverlay/PackOverlay';
import PlanOverlay from '../../Overlay/PlanOverlay/PlanOverlay';
import packsData from '../../../assets/data/packs.json';
import plansData from '../../../assets/data/plans.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import '../../../../styles/swiper.scss';

interface SwiperDemoProps {
  plans?: Array<{
    image: string;
    imageSquare?: string;
    title: string;
    description: string;
    planIncludes: string[];
    price: string;
    notes: string;
    subNow?: string;
    priceType?: 'from' | 'avg' | 'day';
  }>;
}

export const SwiperDemo: React.FC<SwiperDemoProps> = ({ 
  plans = [
    {
      image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
      imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
      title: "Basic Plan",
      description: "Perfect for individuals",
      planIncludes: ["HD Streaming", "1 Device"],
      price: "$9.99",
      notes: "No contract required",
      priceType: 'from'
    },
    {
      image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
      imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
      title: "Standard Plan",
      description: "Great for families",
      planIncludes: ["4K Streaming", "2 Devices"],
      price: "$14.99",
      notes: "No contract required",
      priceType: 'avg'
    },
    {
      image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
      imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
      title: "Premium Plan",
      description: "Best value for groups",
      planIncludes: ["4K Streaming", "4 Devices"],
      price: "$19.99",
      notes: "No contract required",
      priceType: 'day'
    }
  ]
}) => {
  const swiperRef = useRef<any>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPlanOverlay, setShowPlanOverlay] = useState(false);
  const [selectedPack, setSelectedPack] = useState('');
  const [selectedPackData, setSelectedPackData] = useState<any>(null);
  const [selectedPlanData, setSelectedPlanData] = useState<any>(null);

  const handlePackClick = (pack: string, image: string, description: string) => {
    // Find the matching pack from packs.json
    const packData = packsData.packs.find(p => p.name === pack);
    if (packData) {
      setSelectedPack(pack);
      setSelectedPackData(packData);
      setShowOverlay(true);
    }
  };

  const handlePlanClick = (title: string) => {
    const planInfo = plansData.plans[title as keyof typeof plansData.plans];
    if (planInfo) {
      setSelectedPlanData(planInfo);
      setShowPlanOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleClosePlanOverlay = () => {
    setShowPlanOverlay(false);
  };

  const equalizeHeights = () => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;
    const slides = swiper.slides;
    
    // 重置所有高度
    slides.forEach((slide: HTMLElement) => {
      const top = slide.querySelector('.top') as HTMLElement;
      const includes = slide.querySelector('.includes') as HTMLElement;
      const bottomControl = slide.querySelector('.bottom-control') as HTMLElement;
      
      if (top) top.style.height = 'auto';
      if (includes) includes.style.height = 'auto';
      if (bottomControl) bottomControl.style.height = 'auto';
    });

    // 找出每個部分的最大高度
    const maxHeights = {
      top: 0,
      includes: 0,
      bottomControl: 0
    };

    slides.forEach((slide: HTMLElement) => {
      const top = slide.querySelector('.top') as HTMLElement;
      const includes = slide.querySelector('.includes') as HTMLElement;
      const bottomControl = slide.querySelector('.bottom-control') as HTMLElement;

      if (top) maxHeights.top = Math.max(maxHeights.top, top.offsetHeight);
      if (includes) maxHeights.includes = Math.max(maxHeights.includes, includes.offsetHeight);
      if (bottomControl) maxHeights.bottomControl = Math.max(maxHeights.bottomControl, bottomControl.offsetHeight);
    });

    // 設置所有卡片為最大高度
    slides.forEach((slide: HTMLElement) => {
      const top = slide.querySelector('.top') as HTMLElement;
      const includes = slide.querySelector('.includes') as HTMLElement;
      const bottomControl = slide.querySelector('.bottom-control') as HTMLElement;

      if (top) top.style.height = `${maxHeights.top}px`;
      if (includes) includes.style.height = `${maxHeights.includes}px`;
      if (bottomControl) bottomControl.style.height = `${maxHeights.bottomControl}px`;
    });
  };

  useEffect(() => {
    // 初始化和窗口大小改變時執行
    const resizeObserver = new ResizeObserver(() => {
      equalizeHeights();
    });

    let swiper: any = null;
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRef.current.swiper.el
    ) {
      swiper = swiperRef.current.swiper;
      resizeObserver.observe(swiper.el);
    }

    // 在 Swiper 初始化後執行一次
    setTimeout(equalizeHeights, 100);

    return () => {
      resizeObserver.disconnect();
      // Optionally, you can unobserve here if needed:
      // if (swiper && swiper.el) resizeObserver.unobserve(swiper.el);
    };
  }, [plans]);

  // 如果只有一個計劃，直接顯示卡片
  if (plans.length === 1) {
    return (
      <div className='plans-swiper-wrapper'>
        <PlanCard 
          {...plans[0]} 
          variant="sm" 
          buttonLabel={plans[0].subNow || "See Options"} 
          onButtonClick={() => handlePlanClick(plans[0].title)}
        />
        {showPlanOverlay && selectedPlanData && (
          <PlanOverlay
            planName={selectedPlanData.planName}
            plans={selectedPlanData.plansData}
            remarks={selectedPlanData.remarks.content}
            remarksActive={selectedPlanData.remarks.active}
            onClose={handleClosePlanOverlay}
          />
        )}
      </div>
    );
  }

  // 根據計劃數量設置不同的配置
  const getSwiperConfig = () => {
    if (plans.length >= 4) {
      return {
        breakpoints: {
          991: {
            slidesPerView: 3.15,
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          767: {
            slidesPerView: 2.3,
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          480: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          },
          320: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          }
        }
      };
    } else if (plans.length === 3) {
      return {
        breakpoints: {
          991: {
            slidesPerView: 3,
            spaceBetween: 8,
            slidesPerGroup: 3
          },
          767: {
            slidesPerView: 2.3,
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          480: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          },
          320: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          }
        }
      };
    } else if (plans.length === 2) {
      return {
        breakpoints: {
          991: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 2
          },
          480: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          },
          320: {
            slidesPerView: 1.15,
            spaceBetween: 8,
            slidesPerGroup: 1
          }
        }
      };
    }
  };

  return (
    <div className='plans-swiper-wrapper'>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={1}
        navigation
        {...getSwiperConfig()}
        onSlideChange={equalizeHeights}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <PlanCard
              {...plan}
              variant="sm"
              buttonLabel={plan.subNow || "See Options"}
              onPackClick={handlePackClick}
              useExternalOverlay={true}
              onButtonClick={() => handlePlanClick(plan.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showOverlay && selectedPackData && (
        <PackOverlay
          image={selectedPackData.packImage}
          title={selectedPackData.name}
          packDescription={selectedPackData.description}
          channels={selectedPackData.channelsNumber.map((id: string) => ({ id }))}
          ondemands={selectedPackData.onDemandNumber.map((id: string) => ({ id }))}
          isOnDemand={selectedPackData.onDemandNumber.length > 0}
          onClose={handleCloseOverlay}
        />
      )}
      {showPlanOverlay && selectedPlanData && (
        <PlanOverlay
          planName={selectedPlanData.planName}
          plans={selectedPlanData.plansData}
          remarks={selectedPlanData.remarks.content}
          remarksActive={selectedPlanData.remarks.active}
          onClose={handleClosePlanOverlay}
        />
      )}
    </div>
  );
};

export default SwiperDemo; 