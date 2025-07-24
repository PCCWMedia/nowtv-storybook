import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../../styles/swiper.scss';
import { Pagination, Navigation } from 'swiper/modules';
import BorderCard from '../../Card/BorderCard/BorderCard';

export interface BorderCardData {
  imageSrc: string;
  label: string;
  description: string;
}

export interface SwiperBorderCardProps {
  cardData: BorderCardData[];
  className?: string;
}

const SwiperBorderCard: React.FC<SwiperBorderCardProps> = ({ cardData, className }) => (
  <div className={className ? className + ' cardSwiper-wrapper' : 'cardSwiper-wrapper'}>
    <Swiper
      pagination={{
        type: 'fraction',
        renderFraction: (currentClass, totalClass) =>
          `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`,
        formatFractionCurrent: number => 'Step ' + number,
        formatFractionTotal: number => number
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {cardData.map((card, idx) => (
        <SwiperSlide key={idx}>
          <BorderCard
            imageSrc={card.imageSrc}
            label={card.label}
            description={card.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default SwiperBorderCard; 