import React from 'react';
import './DevicesApp.scss';



export interface DeviceAppIcon {
  href: string;
  imgSrc: string;
  alt?: string;
}

export interface DevicesAppProps {
  mainImage: string;
  mainImageAlt?: string;
  appIcons: DeviceAppIcon[];
  className?: string;
}

const DevicesApp: React.FC<DevicesAppProps> = ({
  mainImage,
  mainImageAlt = '',
  appIcons,
  className = '',
}) => {
  return (
    <div className={`device-app-wrapper ${className}`}>
      <div className="devices-image">
        <img src={mainImage} alt={mainImageAlt} />
      </div>
      <div className="app-col-wrapper">
        {appIcons.map((icon, idx) => (
          <div className="item" key={idx}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.imgSrc} alt={icon.alt || ''} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage:
// <DevicesApp mainImage="/path/to/devices.png" appIcons={[{ href: '#', imgSrc: '/path/to/app1.png', alt: 'App 1' }]} />

export default DevicesApp;