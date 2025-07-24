import React, { useState } from 'react';
import './RadioButton.scss';

interface RadioOption {
  id: string;
  label: string;
  value: string;
}

interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  defaultValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="radio-btn-group">
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            name={name}
            id={option.id}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
