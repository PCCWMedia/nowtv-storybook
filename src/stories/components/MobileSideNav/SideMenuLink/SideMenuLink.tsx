import React from 'react';
import './SideMenuLink.scss';

interface SideMenuLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
}

const SideMenuLink: React.FC<SideMenuLinkProps> = ({ 
    href, 
    children, 
    className = '', 
    target 
}) => {
    return (
        <li className={className}>
            <a 
                href={href} 
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        </li>
    );
};

export default SideMenuLink; 