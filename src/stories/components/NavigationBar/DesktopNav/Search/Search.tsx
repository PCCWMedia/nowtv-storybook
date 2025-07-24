import React from 'react';
import './Search.scss';
import SearchInputForm from './SearchInputForm/SearchInputForm';

interface SearchProps {
    /** Optional click handler */
    onClick?: () => void;
    /** Optional className for custom styling */
    className?: string;
    isOpen?: boolean;
}

const Search: React.FC<SearchProps> = ({ onClick, className = '', isOpen }) => {

    const handleClick = () => {
        onClick?.();
    };

    return (
        <div className={`search-container ${className}`}>
            <button 
                className="search-button"
                onClick={handleClick}
                aria-label="Search"
            >
                <i className={isOpen ? "icon-close" : "icon-search-icon"}></i>
            </button>
            
        </div>
    );
};

export default Search; 