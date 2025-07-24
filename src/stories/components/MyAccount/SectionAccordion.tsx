import React, { useState, useRef, useEffect } from 'react';

interface SectionAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleExtra?: React.ReactNode;
  defaultOpenMobile?: boolean;
}

const SectionAccordion: React.FC<SectionAccordionProps> = ({
  title, children, className = '', titleExtra, defaultOpenMobile = false
}) => {
  const [open, setOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 767) {
        setOpen(defaultOpenMobile);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultOpenMobile]);

  useEffect(() => {
    if (contentRef.current) {
      if (windowWidth >= 767) {
        // Desktop: always show, no animation
        contentRef.current.style.height = 'auto';
      } else {
        // Mobile: slide up/down
        if (open) {
          contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
        } else {
          contentRef.current.style.height = '0px';
        }
      }
    }
  }, [open, children, windowWidth]);

  return (
    <section className={`${className}${open ? ' active' : ''}`}>
      <div className='container'>
        <div className="title" onClick={() => window.innerWidth < 767 && setOpen(o => !o)}>
          <h3>{title}</h3>
          {titleExtra}
        </div>
        <div className="account-details" ref={contentRef}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionAccordion; 