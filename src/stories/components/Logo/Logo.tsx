import React from 'react';
import './Logo.scss';
import logo from '../../assets/img/nowtv-logo.svg'; 

interface LogoProps {
    href: string;
    /** Optional click handler */
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ href, onClick }) => {
    return (
        <a href={href} onClick={onClick}>
            <img src={logo}  className="nowtv-logo" alt="Now TV Logo" />
        </a>
    );
};

export default Logo;