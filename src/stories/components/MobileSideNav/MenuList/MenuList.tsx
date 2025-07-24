import React from 'react';
import SideMenuLink from '../SideMenuLink/SideMenuLink';
import SideMenuToggle from '../SideMenuToggle/SideMenuToggle';
import './MenuList.scss';

export interface MenuItem {
    type: 'link' | 'toggle';
    title: string;
    href?: string;
    isActive?: boolean;
    subItems?: Array<{
        title: string;
        href: string;
        icon?: string;
        target?: string;
    }>;
}

interface MenuListProps {
    items: MenuItem[];
    status: 'normal' | 'logged-in';
    tabActive?: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ items, status, tabActive }) => {
    return (
        <div className="menuList">
            <ul>
                {items.map((item, index) => {
                    if (item.type === 'link') {
                        return (
                            <SideMenuLink
                                key={index}
                                href={item.href || '#'}
                                className={item.isActive ? 'active' : ''}
                            >
                                {item.title}
                            </SideMenuLink>
                        );
                    } else if (item.type === 'toggle') {
                        return (
                            <SideMenuToggle
                                key={index}
                                title={item.title}
                                isActive={item.isActive}
                            >
                                {item.subItems?.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.href} target={subItem.target}>
                                            <span>{subItem.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </SideMenuToggle>
                        );
                    }
                    return null;
                })}
            </ul>
        </div>
    );
};

export default MenuList; 