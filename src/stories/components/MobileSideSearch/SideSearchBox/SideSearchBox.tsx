import React from 'react';

interface SideSearchBoxProps {
  title: string;
  items: string[];
}

const SideSearchBox: React.FC<SideSearchBoxProps> = ({ title, items }) => (
  <div className="box">
    <h6>{title}</h6>
    <ul>
      {items.map((item, idx) => (
        <li key={idx}><a href="#">{item}</a></li>
      ))}
    </ul>
  </div>
);

export default SideSearchBox;
