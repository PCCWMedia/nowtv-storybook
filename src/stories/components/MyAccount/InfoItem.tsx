import React from 'react';

interface InfoItemProps {
  label: string;
  value?: React.ReactNode;
  controls?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, controls, className, children }) => (
  <div className={`item${className ? ' ' + className : ''}`}>
    <h6>{label}</h6>
    <div className="information">
      <div className="data">{value}</div>
      {controls && <div className="controls">{controls}</div>}
      {children}
    </div>
  </div>
);

export default InfoItem; 