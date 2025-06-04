import React, { useState } from 'react';
import './Search.scss';

interface SearchProps {
    /** Optional click handler */
    onClick?: () => void;
    /** Optional className for custom styling */
    className?: string;
}

const Search: React.FC<SearchProps> = ({ onClick, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onClick?.();
    };

    return (
        <div className={`search-container ${className}`}>
            <button 
                className="search-button"
                onClick={handleClick}
                aria-label="Search"
            >
                <i className="icon-search-icon"></i>
            </button>
            {/* {isOpen && (
                <div className="search-input-container">
                    <input 
                        type="text" 
                        className="search-input"
                        placeholder="Search..."
                        autoFocus
                    />
                </div>
            )} */}
        </div>
    );
};

export default Search; 