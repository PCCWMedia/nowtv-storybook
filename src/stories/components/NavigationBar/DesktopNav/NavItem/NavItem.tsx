import React from 'react';
import './NavItem.scss';

interface NavItemProps {
    href?: string;
    label: string;
    dropdownItems?: Array<{
        href: string;
        label: string;
        target?: string;
    }>;
    className?: string;
    buttonClass?: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
    href = '#', 
    label, 
    dropdownItems, 
    className = '',
    buttonClass = '',
    onClick 
}) => {
    return (
        <li className={`nav-item`}>
            <a 
                href={href} 
                onClick={onClick}
                className={`${className} ${dropdownItems ? 'has-dropdown' : ''} ${buttonClass}`}
            >
                {label}
            </a>
            {dropdownItems && (
                <ul className="dropDown">
                    {dropdownItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} target={item.target}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavItem; 