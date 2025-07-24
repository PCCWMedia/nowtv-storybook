import React from 'react';
import './PriceTag.scss';

export type PriceTagProps = {
  price: number;
  prefix?: string;
  period?: 'month' | 'day' | 'Pass';
  showAverage?: boolean;
};

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  prefix = 'From',
  period = 'month',
  showAverage = false,
}) => {
  return (
    <div className="price-tag">
      {showAverage ? 'Avg.' : prefix} <b>${price.toLocaleString()}</b> / {period}
    </div>
  );
}; 