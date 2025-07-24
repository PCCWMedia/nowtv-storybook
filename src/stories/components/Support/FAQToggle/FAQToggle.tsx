import React, { useState, useRef, useEffect } from 'react';
import './FAQToggle.scss';

export interface FAQItem {
  question: string;
  answer: string; // HTML string
}

export interface FAQToggleProps {
  faqs: FAQItem[];
  showTitle?: boolean;
  faqTitle?: string;
  className?: string;
}

const FAQToggle: React.FC<FAQToggleProps> = ({ showTitle = true, faqTitle = "FQA", faqs, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    faqs.forEach((_, idx) => {
      const ref = contentRefs.current[idx];
      if (ref) {
        if (openIndex === idx) {
          const scrollHeight = ref.scrollHeight;
          ref.style.height = scrollHeight + 'px';
        } else {
          ref.style.height = '0px';
        }
      }
    });
  }, [openIndex, faqs]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`faq-toggle-wrapper ${className}`}>
      {showTitle && <h4>{faqTitle}</h4>}
      {faqs.map((faq, idx) => (
        <div
          className={`item${openIndex === idx ? ' active' : ''}`}
          key={idx}
        >
          <h5 onClick={() => handleToggle(idx)}>{faq.question}</h5>
          <div
            className="item-content"
            ref={el => { contentRefs.current[idx] = el; }}
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQToggle; 