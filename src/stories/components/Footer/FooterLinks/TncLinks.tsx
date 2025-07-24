import React from 'react';

interface TncLinksProps {
  links: { text: string; href: string }[];
}

const TncLinks: React.FC<TncLinksProps> = ({ links }) => (
  <div className="footer-links">
    {links.map((link, idx) => (
      <a key={idx} href={link.href}>{link.text}</a>
    ))}
  </div>
);

export default TncLinks;