import React from 'react';
import InputBox from '../Form/InputBox/InputBox';
import { Button } from '../Button/Button';
import Link from '../Link/Link';

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => void;
  validate?: (value: string) => string | null;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  addLabel?: string;
  isPassword?: boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onSave,
  validate,
  placeholder,
  type = 'text',
  addLabel,
  isPassword = false,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const [hasTriedSave, setHasTriedSave] = React.useState(false);

  React.useEffect(() => {
    if (!isEditing) {
      setInputValue(value);
      setHasTriedSave(false);
    }
  }, [isEditing, value]);

  const error = validate ? validate(inputValue) : null;

  return (
    <div className="item">
      <h6>{label}</h6>
      <div className={`information${isEditing ? ' editMode' : ''}${!value ? ' addnew' : ' update-now'}`}>
        <div className="data">
          {!value ? (
            <Link
              href="#"
              label={addLabel || `+ Add ${label}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();
                setIsEditing(true);
              }}
            />
          ) : (
            <b>{isPassword ? '**********' : value}</b>
          )}
        </div>
        <div className="controls">
          {value && (
            <Link
              href="#"
              label="Change"
              className="arrow"
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();
                setIsEditing(true);
                setInputValue(value);
              }}
            />
          )}
        </div>
        <div className="box">
          <InputBox
            name={label.toLowerCase().replace(/\s/g, '-')}
            label=""
            value={inputValue}
            placeholder={placeholder || label}
            autoComplete="off"
            type={type}
            onChange={setInputValue}
          />
          {hasTriedSave && error && <p className="error">{error}</p>}
          <div className="cta-buttons">
            <Button
              label="Save"
              className="btn primary"
              disabled={inputValue === value || !inputValue}
              onClick={() => {
                setHasTriedSave(true);
                if (!error) {
                  onSave(inputValue);
                  setIsEditing(false);
                }
              }}
            />
            <Button
              label={value ? 'Cancel' : 'Close'}
              className="btn outline"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableField; 