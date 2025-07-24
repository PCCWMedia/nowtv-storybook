import React from 'react';
import './Breadcrumb.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => (
  <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb; 