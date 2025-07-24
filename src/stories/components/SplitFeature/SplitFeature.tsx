import React from 'react';
import './SplitFeature.scss';
import Link from '../Link/Link';

interface SplitFeatureProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
  channelLogo?: string;
  posterImage: string;
  buttonLink?: string;
  buttonLabel?: string;
  detailsLink?: string;
  detailsLabel?: string;
  isDark: boolean;
}

export const SplitFeature: React.FC<SplitFeatureProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
  channelLogo,
  posterImage,
  buttonLink,
  buttonLabel,
  detailsLink,
  detailsLabel,
  isDark = false,
}) => {
  return (
    <div className="background-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={`content ${isDark ? 'dark' : ''}`}>
        <h3>{title}</h3>
        {subtitle && (
          <h6>{subtitle}</h6>
        )}
        {description && (
          <p>{description}</p>
        )}
        {channelLogo && (
          <img src={channelLogo} className="channel-logo" alt="Channel Logo" />
        )}
        <div className="cta-wrapper">
          {buttonLink && (
            <Link href={buttonLink} label={buttonLabel || "Learn More"} className="btn primary" />
          )}
          {detailsLink && (
            <Link href={detailsLink} label={detailsLabel || "More details"} className="link arrow" />
          )}
        </div>
        
      </div>
      <img src={posterImage} alt="Feature Poster" className="featured-poster" />
    </div>
    
  );
};

export default SplitFeature; 