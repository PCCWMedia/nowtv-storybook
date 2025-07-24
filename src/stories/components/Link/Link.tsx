import React from 'react';
import './Link.scss';

interface LinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
}

const Link: React.FC<LinkProps> = ({ href, label, className, onClick, target }) => {
  return (
    <a href={href} className={className} onClick={onClick} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {label}
    </a>
  );
};

export default Link;