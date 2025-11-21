
import { useState } from 'react';
import { Button } from '../Button/Button';
import './CookiesBar.scss';

export interface CookiesBarProps {
  /** Text content for the cookies notice (can include HTML) */
  text?: string;
  /** Button label */
  buttonLabel?: string;
  /** Optional click handler for the button */
  onAccept?: () => void;
  /** Initial visibility state */
  isVisible?: boolean;
}

/** Cookies consent bar component that sticks to the bottom and can slide down */
export const CookiesBar = ({
  text = 'By continuing to access/use this website, you agree to its use of cookies. To learn more about how you can manage your cookies setting and how our website uses cookies, please read our <a href="#" target="_blank" rel="noopener noreferrer">Cookies Policy</a>.',
  buttonLabel = "Accept and Close",
  onAccept,
  isVisible: initialIsVisible = true,
}: CookiesBarProps) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept?.();
  };

  return (
    <div className={`cookiesBar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <p className="cookiesBar__text" dangerouslySetInnerHTML={{ __html: text }} />
        <Button 
          label={buttonLabel}
          className="btn primary"
          onClick={handleAccept}
        />
      </div>
    </div>
  );
};
