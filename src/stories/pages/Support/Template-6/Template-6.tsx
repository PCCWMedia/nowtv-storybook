import React from 'react';
import Link from '../../../components/Link/Link';
import DevicesApp from '../../../components/Support/DevicesApp/DevicesApp';
import type { DeviceAppIcon } from '../../../components/Support/DevicesApp/DevicesApp';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';

interface Template6Props {
  title?: string;
  subTitle?: string;
  mainImage: string;
  mainImageAlt?: string;
  appIcons: DeviceAppIcon[];
  links?: Array<{
    label: string;
    href: string;
    className?: string;
  }>;
}

const Template6: React.FC<Template6Props> = ({
  title = 'Now TV App',
  mainImage,
  mainImageAlt = 'Now TV App Devices',
  appIcons,
  links = [
    { label: 'Now TV App Features', href: '#', className: 'borderLink' },
    { label: 'Login with Now ID', href: '#', className: 'borderLink' },
    { label: 'Now TV FAQ', href: '#', className: 'borderLink' },
  ],
}) => {
  const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Now TV', href: '#' },
    { label: 'App', href: '#' },
  ];

  return (
    <div className="support-pages">
      <Header status="normal" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="container">
        <div className="heading">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className='container'>
          <DevicesApp mainImage={mainImage} mainImageAlt={mainImageAlt} appIcons={appIcons} />

          <div className='text-section-wrapper'>
            <p className='text-center'>Enjoy more of your favorites on demand, Screen Cast to watch on TV, and control your set top box with the all new Now Player.</p>
            <p className='text-center'>Download and install Now TV for iOS and Android, or go to <a href="#">Now TV on the website</a> via your browser.</p>
          </div>

          <div className='button-link-wrapper'>
            {links.map((link, index) => (
              <Link
                key={index}
                label={link.label}
                href={link.href}
                className={link.className}
              />
            ))}
          </div>
          
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default Template6;