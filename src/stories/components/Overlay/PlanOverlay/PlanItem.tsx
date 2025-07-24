import React, { useState } from 'react';
import Link from '../../Link/Link';
import { Button } from '../../Button/Button';
import planData from '../../../assets/data/plans.json';

interface PlanItemProps {
  href?: string;
  label: string;
  planTitle: string;
  plansubTitle?: string;
  price: string;
  perUnit: string;
  planNotes: string;
  isButton?: boolean;
  isToggle?: boolean;
  disableAfterToggle?: boolean;
}

const PlanItem: React.FC<PlanItemProps> = ({
  href = '#',
  label,
  planTitle,
  plansubTitle,
  price,
  perUnit,
  planNotes,
  isButton = false,
  isToggle = false,
  disableAfterToggle = false,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    if (isToggle && !isSelected) {
      setIsSelected(true);
    }
  };

  const handleRemoveClick = () => {
    setIsSelected(false);
  };

  return (
    <div className="item">
      <h6>
        {planTitle}
        {plansubTitle && <span>{plansubTitle}</span>}
      </h6>
      <div className="details">
        <div className="offer">
          <div className="price">
            <b>{price}</b> {perUnit}
          </div>
          <p>{planNotes}</p>
        </div>
        <div className={`button-control ${isSelected ? 'active' : ''}`}>
          {isButton ? (
            <Button
              label={label}
              className="btn primary"
              isToggle={isToggle}
              isSelected={isSelected}
              disableAfterToggle={disableAfterToggle}
              onClick={handleSelectClick}
              disabled={isSelected && disableAfterToggle}
            />
          ) : (
            <Link href={href} className="btn primary" label={label} />
          )}
          <Button
            label="Remove"
            className="remove"
            onClick={handleRemoveClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanItem;