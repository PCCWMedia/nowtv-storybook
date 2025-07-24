import React from 'react';
import './FullscreenBG.scss';
import Link from '../../Link/Link';
import { PriceTag } from '../../PriceTag/PriceTag';

export interface FullscreenBGProps {
  /**
   * Desktop background image URL
   */
  desktopImage: string;
  /**
   * Mobile background image URL
   */
  mobileImage: string;
  /**
   * Content position (left or right)
   */
  contentPosition: 'left' | 'right';
  /**
   * Section title
   */
  title: string;
  /**
   * Section description
   */
  description: string;
  /**
   * Channel logo image URL (optional)
   */
  channelLogo?: string;
  /**
   * Starting price (optional)
   */
  startingPrice?: string;
  /**
   * CTA button text
   */
  ctaText: string;
  /**
   * CTA link URL
   */
  ctaUrl: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}

export const FullscreenBG: React.FC<FullscreenBGProps> = ({
  desktopImage,
  mobileImage,
  contentPosition,
  title,
  description,
  channelLogo,
  startingPrice,
  ctaText,
  ctaUrl,
  backgroundColor
}) => {
  return (
    <div className="fullscreen-bg-template">
      <picture>
        <source
          type="image/jpeg"
          media="(max-width: 991px)"
          srcSet={mobileImage}
        />
        <source
          type="image/jpeg"
          media="(min-width: 992px)"
          srcSet={desktopImage}
        />
        <img
          src={desktopImage}
          srcSet={`${mobileImage} 991w, ${desktopImage} 992w`}
          alt=""
          className="bg-image"
        />
      </picture>

      <div 
      className={`content ${contentPosition}`}
      style={backgroundColor ? { '--banner-bg-color': backgroundColor } as React.CSSProperties : undefined}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        {channelLogo && (
          <img src={channelLogo} className="ch-logo" alt="Channel Logo" />
        )}
        {startingPrice && (
          <PriceTag price={parseInt(startingPrice.replace(/[^0-9]/g, ''))} period="month" />
        )}
        <Link
          href={ctaUrl}
          label={ctaText}
          className="btn primary"
        />
      </div>
    </div>
  );
};
