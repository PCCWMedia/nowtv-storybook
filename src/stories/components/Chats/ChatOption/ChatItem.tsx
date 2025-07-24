// src/components/ChatOptionItem.tsx
import type { FC } from 'react'
import './ChatItem.scss';

interface ChatOptionItemProps {
  href: string;
  iconSrc: string;
  alt: string;
  text: string;
  target?: '_blank' | '_self';
}

const ChatOptionItem: FC<ChatOptionItemProps> = ({ href, iconSrc, alt, text, target = '_self' }) => {
  return (
    <div className="enquiry-item">
        <a href={href} target={target}>
          <div className="img-wrap">
            <img src={iconSrc} alt={alt} className={alt} />
          </div>
          <h6>{text}</h6>
        </a>
      </div>
    
  );
};

export default ChatOptionItem;