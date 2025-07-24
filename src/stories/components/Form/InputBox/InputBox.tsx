import React, { useState } from 'react';
import './InputBox.scss';

interface InputBoxProps {
  type?: 'text' | 'password' | 'email';
  name: string;
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  submitButton?: boolean;
  submitButtonText?: string;
  submitButtonIcon?: boolean;
  submitButtonIconClass?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  type = 'text',
  name,
  label,
  value = '',
  onChange,
  placeholder = '',
  autoComplete = 'off',
  submitButton = false,
  submitButtonText = '',
  submitButtonIcon = false,
  submitButtonIconClass = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`group ${submitButton ? 'hasSubmitBtn' : ''}`}>
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        autoComplete={autoComplete}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {type === 'password' && (
        <button
          type="button"
          className="toggle-pwd-btn"
          onClick={togglePasswordVisibility}
        >
          <img
            src={showPassword ? '/src/stories/assets/img/icon/visibility-on.svg' : '/src/stories/assets/img/icon/visibility-off.svg'}
            alt={showPassword ? 'Hide password' : 'Show password'}
          />
        </button>
      )}
      {submitButton && (
        <button type="submit" className="submit-button">
          {submitButtonIcon && <i className={submitButtonIconClass}></i>}
          {submitButtonText}
        </button>
      )}
    </div>
  );
};

export default InputBox;
