import React, { useState, useEffect } from 'react';
import './ChatBubble.scss';
import chatMessageIcon from '../../../assets/img/icon/icon-chat-message.svg';
import whatsappIcon from '../../../assets/img/icon/icon-chat-whatsapp.svg';

export interface ChatBubbleProps {
  /** Whether the chat bubble is visible */
  isVisible?: boolean;
  /** Custom class name for styling */
  className?: string;
  /** Online sales team WhatsApp link */
  onlineSalesLink?: string;
  /** Customer service WhatsApp link */
  customerServiceLink?: string;
  /** Callback when online sales is clicked */
  onOnlineSalesClick?: () => void;
  /** Callback when customer service is clicked */
  onCustomerServiceClick?: () => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
}

export interface ChatOption {
  /** Icon source for the chat option */
  icon: string;
  /** Text label for the chat option */
  label: string;
  /** Link URL for the chat option */
  link?: string;
  /** Click handler for the chat option */
  onClick?: () => void;
}

/** Chat bubble component for customer support */
export const ChatBubble: React.FC<ChatBubbleProps> = ({
  isVisible = true,
  className = '',
  onlineSalesLink = '#',
  customerServiceLink = '#',
  onOnlineSalesClick,
  onCustomerServiceClick,
  onClose,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleOnlineSalesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOnlineSalesClick?.();
    if (onlineSalesLink && onlineSalesLink !== '#') {
      window.open(onlineSalesLink, '_blank');
    }
  };

  const handleCustomerServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onCustomerServiceClick?.();
    if (customerServiceLink && customerServiceLink !== '#') {
      window.open(customerServiceLink, '_blank');
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
      className={`livechat-btn-wrapper ${className} ${isMobile ? 'mobile' : ''}`}
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
          <img src="../img/icons/icon-close-w.svg" alt="Close" />
        </div>
      </div>

      <div className={`link-wrapper ${isExpanded ? 'show' : ''}`}>
        <div className="button-wrapper">
          <a href={onlineSalesLink} target="_blank" onClick={handleOnlineSalesClick}>
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>Online Sales Team</span>
          </a>
          <a href={customerServiceLink} target="_blank" onClick={handleCustomerServiceClick}>
            <img src={whatsappIcon} alt="WhatsApp" />
            <span>Customer Service</span>
          </a>
        </div>
      </div>
    </div>
  );
};
