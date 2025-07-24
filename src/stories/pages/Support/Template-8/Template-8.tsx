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

interface Template8Props {
  title?: string;
  subTitle?: string;
  borderCardData: BorderCard[];
  moreBoxData?: BorderCard[];
}

const Template8: React.FC<Template8Props> = ({
  title = 'Set Top Box',
  subTitle = 'Please choose your Set Top Box model:',
  borderCardData,
  moreBoxData = [],
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
          <div className="borderCard-wrapper sm">
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

          {moreBoxData.length > 0 && (
            <>
              <div className='text-section-wrapper'>
                <h6 className='text-center'>More Boxes</h6>
                <p className='text-center'>(<a href="#">Contact us</a> to upgrade to a new box for free)</p>
              </div>
              <div className="borderCard-wrapper sm">
                {moreBoxData.map((borderCard, index) => (
                  <BorderCard
                    key={index}
                    imageSrc={borderCard.imageSrc}
                    label={borderCard.label}
                    linkHref={borderCard.linkHref}
                    className='center'
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default Template8;