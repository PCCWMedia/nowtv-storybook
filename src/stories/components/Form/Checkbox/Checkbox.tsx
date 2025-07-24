import React, { useState } from 'react';
import './Checkbox.scss';

interface CheckboxProps {
  name: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  links?: {
    text: string;
    href: string;
  }[];
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked: initialChecked = false,
  onChange,
  label,
  links = [],
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  const renderLabel = () => {
    if (!label && links.length === 0) return null;

    const parts = label ? label.split(/(\{link\})/g) : [];
    let linkIndex = 0;

    return (
      <p>
        {parts.map((part, index) => {
          if (part === '{link}' && links[linkIndex]) {
            const link = links[linkIndex];
            linkIndex++;
            return (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            );
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <div className="checkbox-group">
      <label>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
      {renderLabel()}
    </div>
  );
};

export default Checkbox;
