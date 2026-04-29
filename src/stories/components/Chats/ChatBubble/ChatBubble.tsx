import React, { useState, useEffect } from 'react';
import './ChatBubble.scss';
import chatMessageIcon from '../../../assets/img/icon/icon-chat-message.svg';
import textChatIcon from '../../../assets/img/icon/textchat-d.svg';
import whatsappIcon from '../../../assets/img/icon/whatsapp-d.svg';
import closeChatIcon from '../../../assets/img/icon/icon-close-w.svg';



export interface ChatOption {
  /** Text label for the chat option */
  label: string;
  /** Link URL for the chat option */
  link: string;
  /** Icon to display for this option (defaults to WhatsApp icon) */
  icon?: string;
  /** Click handler for the chat option */
  onClick?: () => void;
}

export interface ChatBubbleProps {
  /** Whether the chat bubble is visible */
  isVisible?: boolean;
  /** Custom class name for styling */
  className?: string;
  /** Array of chat options to display */
  options?: ChatOption[];
  /** Callback when close button is clicked */
  onClose?: () => void;
}

/** Chat bubble component for customer support */
export const ChatBubble: React.FC<ChatBubbleProps> = ({
  isVisible = true,
  className = '',
  options = [
      { label: 'Live Chat with Sales<b>09:00 - 22:00</b>', link: 'https://shop.theclub.com.hk/live-chat?___store=en_US', icon: textChatIcon },
      { label: 'Sales Team<b>WhatsApp</b>', link: 'https://wa.me/85298766800', icon: whatsappIcon },
      { label: 'Customer Service<b>WhatsApp</b>', link: 'https://wa.me/85298766888', icon: whatsappIcon },
  ],
  onClose,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // Check scroll position to show bubble
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBubble(true);
      } else {
        setShowBubble(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Mobile|Tablet|iPad/i.test(userAgent);
      setIsMobile(isMobileDevice);
      
      if (isMobileDevice) {
        document.querySelector('.livechat-btn-wrapper')?.classList.add('mobile');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle document click to close mobile menu
  useEffect(() => {
    const handleDocumentClick = () => {
      if (isMobile && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobile, isExpanded]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOptionClick = (option: ChatOption) => (e: React.MouseEvent) => {
    e.preventDefault();
    option.onClick?.();
    if (option.link && option.link !== '#') {
      window.open(option.link, '_blank');
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`livechat-btn-wrapper ${className} ${isMobile ? 'mobile' : ''} ${showBubble ? 'show' : ''}`}
      onClick={handleWrapperClick}
    >
      <div 
        className={`content ${isExpanded ? 'active' : ''}`}
        onClick={handleContentClick}
      >
        <img src={chatMessageIcon} alt="Chat icon" />
        <div className="text">
          Need Help?<br />Let's Chat.
        </div>
        <div className="close" onClick={handleCloseClick}>
          <img src={closeChatIcon} alt="Close" />
        </div>
      </div>

      <div className={`link-wrapper ${isExpanded ? 'show' : ''}`}>
        <div className="button-wrapper">
          {options.map((option, index) => (
            <a 
              key={index}
              href={option.link} 
              target="_blank" 
              onClick={handleOptionClick(option)}
            >
              <img src={option.icon || whatsappIcon} alt={option.label} />
              <span dangerouslySetInnerHTML={{ __html: option.label }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
