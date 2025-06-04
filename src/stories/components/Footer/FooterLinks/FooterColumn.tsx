import React, { useState, useRef, useEffect } from 'react';

interface FooterColumnProps {
    title: string;
    links: { text: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
    return (
        <div className="column">
            <h5>{title}</h5>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;