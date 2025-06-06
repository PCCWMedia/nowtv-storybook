import React from 'react';
import './Link.scss';

interface LinkProps {
  href: string;
  label: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, label, className }) => {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

export default Link;