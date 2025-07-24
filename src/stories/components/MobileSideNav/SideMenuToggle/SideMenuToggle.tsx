import React, { useState, useRef, useEffect } from 'react';
import './SideMenuToggle.scss';

interface MenuToggleProps {
    title: string;
    children: React.ReactNode;
    isActive?: boolean;
    onToggle?: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ 
    title, 
    children, 
    isActive = false,
    onToggle 
}) => {
    const [isOpen, setIsOpen] = useState(isActive);
    const subMenuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (subMenuRef.current) {
            const subMenu = subMenuRef.current;
            if (isOpen) {
                const contentHeight = subMenu.scrollHeight;
                subMenu.style.height = `${contentHeight}px`;
            } else {
                subMenu.style.height = '0px';
            }
        }
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (onToggle) {
            onToggle();
        }
    };

    return (
        <li className={`hasSubMenu ${isOpen ? 'active' : ''}`}>
            <a href="javascript:void(0);"  className='openSubMenu-btn' onClick={handleToggle}>
                {title}
            </a>
            <ul ref={subMenuRef} className={`subMenu ${isOpen ? 'active' : ''}`}>
                {children}
            </ul>
        </li>
    );
};

export default MenuToggle; 