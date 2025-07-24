import React, { useState, useRef, useEffect } from 'react';
import Link from '../../Link/Link';
import './FAQLinkColumn.scss';

interface FAQLink {
  href: string;
  label: string;
  className?: string;
}

interface FAQLinkColumnProps {
  title: string;
  links: FAQLink[];
}

const FAQLinkColumn: React.FC<FAQLinkColumnProps> = ({ title, links }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const linkWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
      if (window.innerWidth >= 767) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (linkWrapperRef.current) {
      const linkWrapper = linkWrapperRef.current;
      if (isMobile) {
        if (isActive) {
          const contentHeight = linkWrapper.scrollHeight;
          linkWrapper.style.height = `${contentHeight}px`;
        } else {
          linkWrapper.style.height = '0px';
        }
      } else {
        linkWrapper.style.height = 'auto';
      }
    }
  }, [isActive, isMobile]);

  const handleToggle = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div className={`faq-column ${isActive ? 'active' : ''}`}>
      <h5 onClick={handleToggle}>{title}</h5>
      <div ref={linkWrapperRef} className='col-link-wrapper'>
        {links.map((link, index) => (
          <Link 
            key={index}
            href={link.href} 
            label={link.label} 
            className={link.className}
          />
        ))}
      </div>
      
    </div>
  );
};

export default FAQLinkColumn; 