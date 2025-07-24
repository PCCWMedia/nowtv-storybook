import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import Tabs from '../../../components/Tabs/Tabs';
import SwiperBorderCard from '../../../components/Support/SwiperBorderCard/SwiperBorderCard';

interface BorderCardData {
  imageSrc: string;
  label: string;
  description: string;
}

interface TabItem {
  label: string;
  content?: React.ReactNode;
  cardData?: BorderCardData[];
}

interface Template4Props {
  title?: string;
  subTitle?: string;
  tabsData: TabItem[];
}

const Template4: React.FC<Template4Props> = ({
  title = 'Bills Settings',
  subTitle = 'You can make a payment by credit card, in person, via Automated Teller Machine, PPS, Autopay or by mailing check.',
  tabsData
}) => {
  const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Bills & Payment', href: '#' },
  ];

  const tabs = tabsData.map(tab => ({
    label: tab.label,
    content: tab.content ?? (tab.cardData ? <SwiperBorderCard cardData={tab.cardData} /> : null)
  }));

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
          <Tabs tabs={tabs} />
        </div>

        <Footer status="normal" />
    </div>
  );
};

export default Template4;