import React, { useState } from 'react';
import './button.scss';

export interface ButtonProps {
  /** Button contents */
  label?: string;
  children?: React.ReactNode;
  /** How large should the button be? */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Is the button disabled? */
  disabled?: boolean;
  /** Enable toggle behavior */
  isToggle?: boolean;
  /** Externally controlled selected state */
  isSelected?: boolean;
  /** Disable button after toggle (specific to ShoppingCart) */
  disableAfterToggle?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  children,
  className = 'btn',
  onClick,
  disabled = false,
  isToggle = false,
  isSelected: externalIsSelected,
  disableAfterToggle = false,
}: ButtonProps) => {
  const [internalIsSelected, setInternalIsSelected] = useState(false);
  const isSelected = externalIsSelected !== undefined ? externalIsSelected : internalIsSelected;

  const handleClick = () => {
    if (isToggle && externalIsSelected === undefined) {
      setInternalIsSelected(!internalIsSelected);
    }
    onClick?.();
  };

  const buttonLabel = isToggle && isSelected ? 'Selected' : label;
  const buttonClass = isToggle && isSelected ? `${className} selected` : className;
  const isDisabled = disabled || (isToggle && isSelected && disableAfterToggle);

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children ? children : buttonLabel}
    </button>
  );
};