import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ArticleBanner.scss';

interface ArticleSlide {
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ArticleBannerProps {
  slides: ArticleSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
}

export const ArticleBanner: React.FC<ArticleBannerProps> = ({
  slides,
  autoplay = false,
  autoplayDelay = 3000,
  loop = true,
}) => {
  return (
    <div className="article-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        grabCursor
        slidesPerView={1.6}
        centeredSlides
        roundLengths
        loop={loop}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
        breakpoints={{
          480: { slidesPerView: 1.3 },
          767: { slidesPerView: 1.6 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.href}>
              <img src={slide.image.src} alt={slide.image.alt} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArticleBanner;
