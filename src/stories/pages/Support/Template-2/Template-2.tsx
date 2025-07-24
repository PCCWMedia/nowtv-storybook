import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import BorderCard from '../../../components/Card/BorderCard/BorderCard';

interface BorderCard {
  imageSrc: string;
  label: string;
  linkHref: string;
}

interface Template2Props {
  title?: string;
  subTitle?: string;
  borderCardData: BorderCard[];
}

const Template2: React.FC<Template2Props> = ({
  title = 'TV Interfaces',
  subTitle = 'Which TV Interface are you using?',
  borderCardData
}) => {
  const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Set Top Box & Remote Control', href: '#' },
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
            <div className="borderCard-wrapper">
              {borderCardData.map((borderCard, index) => (
                <BorderCard
                  key={index}
                  imageSrc={borderCard.imageSrc}
                  label={borderCard.label}
                  linkHref={borderCard.linkHref}
                  className='center'
                />
              ))}
            </div>
          </div>
          
        </div>
      
      <Footer status="normal" />
    </div>
  );
};

export default Template2;