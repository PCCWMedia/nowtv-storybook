import React, { useState, useRef, useEffect } from 'react';
import './SelectBox.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: SelectOption[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder = 'Select',
  defaultValue,
  onChange,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const [selectedLabel, setSelectedLabel] = useState<string>('');
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultValue) {
      const option = options.find(opt => opt.value === defaultValue);
      if (option) {
        setSelectedLabel(option.label);
      }
    }
  }, [defaultValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    setSelectedValue(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
    onChange?.(option.value);
  };

  const buttonText = selectedLabel || placeholder;
  const buttonClass = `select-button ${selectedValue ? 'withvalue' : ''} ${isOpen ? 'active' : ''}`;

  return (
    <div className="select-box-group" ref={selectRef}>
        <button
          type="button"
          className={buttonClass}
          onClick={handleButtonClick}
          data-value={selectedValue}
          data-type={name}
        >
          {buttonText}
        </button>
        <ul className={isOpen ? 'show' : ''}>
          {options.map((option, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default SelectBox;
