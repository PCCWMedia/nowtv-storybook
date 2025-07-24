import React from 'react';
import Link from '../../../components/Link/Link';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';

interface Template1Props {
  title?: string;
  subTitle?: string;
  links?: Array<{
    label: string;
    href: string;
    className?: string;
  }>;
}

const Template1: React.FC<Template1Props> = ({ 
  title = "Set Top Box & Remote Control",
  subTitle = "Which TV Interface are you using?",
  links = [
    { label: "Set Top Box", href: "/support/set-top-box", className: "borderLink" },
    { label: "Remote Control", href: "/support/remote-control", className: "borderLink" }
  ]
}) => {
  const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Now Player', href: '#' },
    { label: 'FAQ', href: '#' },
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

export default Template1;