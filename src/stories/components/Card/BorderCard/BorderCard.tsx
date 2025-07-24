import React from 'react';
import Link from '../../Link/Link';
import './BorderCard.scss';

interface BorderCardProps {
  imageSrc?: string;
  label?: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
  className?: string;
}

const BorderCard: React.FC<BorderCardProps> = ({
  imageSrc,
  label,
  description,
  linkLabel,
  linkHref,
  className,
}) => {
  const cardClass = imageSrc ? 'borderCard hasImg' : 'borderCard';
  return (
    <a href={linkLabel} className={cardClass}>
      {imageSrc && (
        <div className="image-wrapper">
          <img src={imageSrc} alt={label || ''} />
        </div>
      )}
      <div className={`content${className ? ' ' + className : ''}`}>
        <div className='upper'>
          {label && <h5>{label}</h5>}
          {description && <p>{description}</p>}
        </div>
        {linkLabel && linkHref && (
          <Link className="arrow" label={linkLabel} href={linkHref} />
        )}
      </div>
    </a>
  );
};

export default BorderCard;