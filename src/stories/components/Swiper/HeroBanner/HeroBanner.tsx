import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from '../../Button/Button';
import Link from '../../Link/Link';
import { HeroTermsOverlay } from '../../Overlay/HeroTermsOverlay/HeroTermsOverlay';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroBanner.scss';

interface Slide {
  id: string;
  image: {
    mobile: string;
    desktop: string;
  };
  content: {
    title?: string;
    subtitle?: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    staticLink?: string;
    staticLinkText?: string;
    termsText?: string;
    terms?: string[];
    isDark?: boolean;
    isCentered?: boolean;
    customImage?: string;
    backgroundColor?: string;
    chlibLogo?: string;
    titleArt?: string;
  };
}

interface HeroBannerProps {
  slides: Slide[];
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ slides }) => {
  const [isTermsOverlayOpen, setIsTermsOverlayOpen] = useState(false);
  const [currentTerms, setCurrentTerms] = useState<string[]>([]);

  const handleTermsClick = (terms: string[]) => {
    setCurrentTerms(terms);
    setIsTermsOverlayOpen(true);
  };

  return (
    <>
      <div className="hero-banner">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide 
              key={slide.id} 
              id={slide.id}
              style={slide.content.backgroundColor ? { '--banner-bg-color': slide.content.backgroundColor } as React.CSSProperties : undefined}
            >
              <picture>
                <source
                  type="image/jpeg"
                  media="(max-width: 991px)"
                  srcSet={slide.image.mobile}
                />
                <source
                  type="image/jpeg"
                  media="(min-width: 992px)"
                  srcSet={slide.image.desktop}
                />
                <img
                  src={slide.image.desktop}
                  srcSet={`${slide.image.mobile} 991w, ${slide.image.desktop} 992w`}
                  alt=""
                />
              </picture>

              <div className={`banner-content ${slide.content.isDark ? 'dark' : ''} ${slide.content.isCentered ? 'text-center' : ''}`}>
                {slide.content.titleArt && (
                  <img src={slide.content.titleArt} alt="" className="title-art" />
                )}
                {slide.content.subtitle && <h5>{slide.content.subtitle}</h5>}
                {slide.content.title && <h2>{slide.content.title}</h2>}
                <p dangerouslySetInnerHTML={{ __html: slide.content.description }} />
                {slide.content.chlibLogo && (
                  <img src={slide.content.chlibLogo} alt="" className="chlib-logo" />
                )}
                {slide.content.customImage && (
                  <img src={slide.content.customImage} alt="" />
                )}
                {slide.content.buttonText && (
                  <Button 
                    label={slide.content.buttonText}
                    className="btn primary"
                  />
                )}
                
                {slide.content.staticLink && (
                  <Link 
                    href={slide.content.staticLink}
                    label={slide.content.staticLinkText || ''}
                    className="link"
                  />
                )}
                {slide.content.terms && (
                  <Link 
                    href="#"
                    label="See Terms & Conditions"
                    className="arrow terms-link"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleTermsClick(slide.content.terms || []);
                    }}
                  />
                )}
                {slide.content.termsText && (
                  <small>{slide.content.termsText}</small>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <HeroTermsOverlay
        isOpen={isTermsOverlayOpen}
        onClose={() => setIsTermsOverlayOpen(false)}
        terms={currentTerms}
      />
    </>
  );
};
