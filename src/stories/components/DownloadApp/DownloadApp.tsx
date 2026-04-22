import React, { useEffect, useState } from 'react';
import './DownloadApp.scss';

interface AppLink {
  href: string;
  imageSrc: string;
  imageAlt: string;
  id?: string;
  platform?: 'ios' | 'android';
}

interface TvLogo {
  src: string;
  alt: string;
  className?: string;
}

interface DownloadAppProps {
  title?: string;
  subtitle?: string;
  deviceImage: string;
  appIconSrc: string;
  mobileLinks: AppLink[];
  tvLogos: TvLogo[];
}

export const DownloadApp: React.FC<DownloadAppProps> = ({
  title = 'Watch on Now TV',
  subtitle = 'Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.',
  deviceImage,
  appIconSrc,
  mobileLinks,
  tvLogos,
}) => {
  const [detectedPlatform, setDetectedPlatform] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      setDetectedPlatform('ios');
    } else if (/Android/.test(ua)) {
      setDetectedPlatform('android');
    }
  }, []);

  const visibleLinks = mobileLinks.filter((link) => {
    if (!link.platform) return true;
    if (detectedPlatform === 'other') return true;
    return link.platform === detectedPlatform;
  });

  return (
    <div className="download-nowtv">
      <div className="container">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>

        <div className="nowtv-apps-wrapper">
          <div className="image">
            <img src={deviceImage} alt="Now TV devices" />
          </div>
          <div className="apps-wrapper">
            <div className="nowtv-app">
              <img src={appIconSrc} alt="Now TV app" />
            </div>
            <div className="app-labels-wrapper">
              <div className="download-section mobile">
                <h5>On Mobile Device</h5>
                {visibleLinks.map((link, index) => (
                  <a key={index} href={link.href} id={link.id} target="_blank" rel="noreferrer">
                    <img src={link.imageSrc} alt={link.imageAlt} />
                  </a>
                ))}
              </div>
              <div className="download-section tv">
                <h5>On Smart TV</h5>
                {tvLogos.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} className={logo.className} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
