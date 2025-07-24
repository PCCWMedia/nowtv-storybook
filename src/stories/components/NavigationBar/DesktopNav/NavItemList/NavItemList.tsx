import React from 'react';
import './NavItemList.scss';
import NavItem from '../NavItem/NavItem';

interface NavItemListProps {
    items: Array<{
        href?: string;
        label: string;
        dropdownItems?: Array<{
            href: string;
            label: string;
            target?: string;
        }>;
        className?: string;
        buttonClass?: string;
    }>;
    className?: string;
}

const NavItemList: React.FC<NavItemListProps> = ({ items, className = '' }) => {
    return (
        <ul className={`nav-item-list ${className}`}>
            {items.map((item, index) => (
                <NavItem
                    key={index}
                    href={item.href}
                    label={item.label}
                    dropdownItems={item.dropdownItems}
                    className={item.className}
                    buttonClass={item.buttonClass}
                />
            ))}
        </ul>
    );
};

export default NavItemList; 