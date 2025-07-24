import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import BorderCard from '../../../components/Card/BorderCard/BorderCard';
import SwiperBorderCard from '../../../components/Support/SwiperBorderCard/SwiperBorderCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../../styles/swiper.scss';
import { Pagination, Navigation } from 'swiper/modules';

interface BorderCardData {
  imageSrc: string;
  label: string;
  description: string;
}

interface Template3Props {
  title?: string;
  subTitle?: string;
  cardData: BorderCardData[];
}

const Template3: React.FC<Template3Props> = ({
  title = 'Change Bill Media & Email',
  subTitle = 'How to change my bill media and billing email address?',
  cardData
}) => {
  const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Account Preferences', href: '#' },
    { label: 'Change Bill Media', href: '#' },
  ];

  return (
    <div className="support-pages">
      <Header status="normal" />
      <Breadcrumb items={breadcrumbItems} />
      <div className='container'>
        <div className="heading">
          <h2>{title}</h2>
          <h6>{subTitle}</h6>
        </div>
      </div>

      <div className="content-wrapper">
        <div className='container'>
          <SwiperBorderCard cardData={cardData} />
        </div>
          
      </div>
      
      <Footer status="normal" />
    </div>
  );
};

export default Template3;