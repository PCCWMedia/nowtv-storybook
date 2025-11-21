import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
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
  // Track expanded state for each slide and paragraph
  const [expanded, setExpanded] = useState<{ [slideId: string]: { [pIdx: number]: boolean } }>({});
  // Track overflow for each slide and paragraph
  const [overflow, setOverflow] = useState<{ [slideId: string]: { [pIdx: number]: boolean } }>({});

  // Helper to parse HTML string into array of strings (paragraphs)
  const parseParagraphs = (html: string): string[] => {
    // Match <p>...</p> blocks
    const matches = html.match(/<p[\s\S]*?>[\s\S]*?<\/p>/gi);
    if (matches) {
      return matches.map(p => p.replace(/<\/?p[\s\S]*?>/gi, ''));
    }
    // fallback: treat as one paragraph
    return [html];
  };

  // Refs for each paragraph to measure overflow
  const paraRefs = useRef<{ [slideId: string]: { [pIdx: number]: HTMLParagraphElement | null } }>({});

  useEffect(() => {
    slides.forEach(slide => {
      const slideId = slide.id;
      const paragraphs = parseParagraphs(slide.content.description);
      paragraphs.forEach((_, pIdx) => {
        const ref = paraRefs.current?.[slideId]?.[pIdx];
        if (ref) {
          const prevClamp = ref.style.webkitLineClamp;
          ref.style.webkitLineClamp = expanded[slideId]?.[pIdx] ? '7' : '4';
          const isOverflowing = ref.scrollHeight > ref.clientHeight + 1;
          setOverflow(prev => ({
            ...prev,
            [slideId]: {
              ...(prev[slideId] || {}),
              [pIdx]: isOverflowing,
            },
          }));
          ref.style.webkitLineClamp = prevClamp;
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides]);

  // Re-calculate overflow on window resize and when expanded state changes
  useEffect(() => {
    const handleResize = () => {
      slides.forEach(slide => {
        const slideId = slide.id;
        const paragraphs = parseParagraphs(slide.content.description);
        paragraphs.forEach((_, pIdx) => {
          const ref = paraRefs.current?.[slideId]?.[pIdx];
          if (ref) {
            const prevClamp = ref.style.webkitLineClamp;
            ref.style.webkitLineClamp = expanded[slideId]?.[pIdx] ? '7' : '4';
            const isOverflowing = ref.scrollHeight > ref.clientHeight + 1;
            setOverflow(prev => ({
              ...prev,
              [slideId]: {
                ...(prev[slideId] || {}),
                [pIdx]: isOverflowing,
              },
            }));
            ref.style.webkitLineClamp = prevClamp;
          }
        });
      });
    };
    window.addEventListener('resize', handleResize);
    // Run once on mount
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides, expanded]);

  const handleTermsClick = (terms: string[]) => {
    setCurrentTerms(terms);
    setIsTermsOverlayOpen(true);
  };

  const handleSeeMore = (slideId: string, pIdx: number) => {
    setExpanded(prev => ({
      ...prev,
      [slideId]: {
        ...(prev[slideId] || {}),
        [pIdx]: !prev[slideId]?.[pIdx],
      },
    }));
  };

  return (
    <>
      <div className="hero-banner">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide) => {
            const slideId = slide.id;
            const paragraphs = parseParagraphs(slide.content.description);
            // Prepare refs for this slide
            if (!paraRefs.current[slideId]) paraRefs.current[slideId] = {};
            return (
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
                  {paragraphs.map((text, pIdx) => (
                    <React.Fragment key={pIdx}>
                      <p
                        ref={el => { paraRefs.current[slideId][pIdx] = el; }}
                        className={expanded[slideId]?.[pIdx] ? 'clamp-max' : 'clamp-min'}
                        style={{ position: 'relative' }}
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                      {overflow[slideId]?.[pIdx] && (
                        <button
                          className="see-more-btn"
                          onClick={() => handleSeeMore(slideId, pIdx)}
                        >
                          {expanded[slideId]?.[pIdx] ? 'See Less' : 'See More'}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
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
            );
          })}
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
