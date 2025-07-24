import React from 'react';
import './SearchInputForm.scss';
import { InputBox } from '../../../../Form/InputBox/InputBox';

interface SearchInputFormProps {
    isOpen: boolean;
}

const SearchInputForm: React.FC<SearchInputFormProps> = ({ isOpen }) => {
    return (
        <div className={`search-input-container ${isOpen ? 'open' : ''}`}>
            <div className='container'>
                <form action="">
                    <InputBox
                        type="text"
                        name="search"
                        label=""
                        placeholder="Search Now TV"
                        autoComplete="off"
                        submitButton={true}
                        submitButtonText=""
                        submitButtonIcon={true}
                        submitButtonIconClass="icon-search-icon"
                    />
                </form>
                
            </div>
        </div>
    );
};

export default SearchInputForm; 