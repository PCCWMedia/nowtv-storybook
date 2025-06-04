import React from 'react';
import './BurgerMenu.scss';

interface BurgerMenuProps {
    onClick?: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
    return (
        <a 
            href="javascript:void(0);" 
            className="burger-menu-btn"
            onClick={onClick}
        >
            <i className="icon-menu"></i>
        </a>
    );
};

export default BurgerMenu; 