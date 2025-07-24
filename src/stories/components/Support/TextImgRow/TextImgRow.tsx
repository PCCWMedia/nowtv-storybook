import React from 'react';
import Link from '../../../components/Link/Link';
import './TextImgRow.scss';

export interface TextImgRowItem {
  content: React.ReactNode;
  image: { src: string; alt?: string; border?: boolean };
}

export interface TextImgRowProps {
  items: TextImgRowItem[];
  className?: string;
}

const TextImgRow: React.FC<TextImgRowProps> = ({ items, className = '' }) => (
  <div className={`textImg-wrapper ${className}`}>
    {items.map((item, idx) => (
      <div className="item" key={idx}>
        <div className="content">
          {item.content}
        </div>
        <div className="image">
          <img src={item.image.src} alt={item.image.alt || ''} className={item.image.border ? 'border' : undefined} />
        </div>
      </div>
    ))}
  </div>
);

export default TextImgRow; 