import React, { useEffect, useState } from 'react';
import { Button } from '../../Button/Button';
import './HeroTermsOverlay.scss';

interface HeroTermsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  terms: string[];
}

export const HeroTermsOverlay: React.FC<HeroTermsOverlayProps> = ({
  isOpen,
  onClose,
  terms,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Add a small delay to ensure the initial state is rendered
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-wrapper ${isVisible ? 'show' : ''}`}  onClick={onClose}>
      <div className="modal-dialog">
        <div className="modal-content-wrapper sm">
          <div className="close-modal">
            <Button className="close-btn" label="Close" onClick={onClose} />
          </div>

          <div className="hero-terms-wrapper" onClick={e => e.stopPropagation()}>
            {terms.map((term, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: term }} />
            ))}
            <Button className="btn primary" label="OK" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
