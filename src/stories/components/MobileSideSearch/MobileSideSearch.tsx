import React from 'react';
import './MobileSideSearch.scss';
import SideSearchBox from './SideSearchBox/SideSearchBox';
import {InputBox} from '../Form/InputBox/InputBox';
import {Button} from '../Button/Button';


interface MobileSideSearchProps {
  onClose: () => void;
}

const recentSearches = [
  'Premier League',
  'Now Sports',
  'Laliga',
  '621',
  'Channel',
];

const popularSearches = [
  'Premier League',
  'NBA',
  'HBO',
  'OTT',
  'Offers',
];

const MobileSideSearch: React.FC<MobileSideSearchProps> = ({ onClose }) => {
  return (
    <div className="mobile-search-wrapper">
      <div className="search-input-section">
        <InputBox
            autoComplete="off"
            label=""
            name="Search"
            onChange={() => {}}
            placeholder="Search Now TV"
            submitButton
            submitButtonIcon
            submitButtonIconClass="icon-search-icon"
            submitButtonText=""
            type="text"
        />
        <Button
            className="close-btn"
            label=""
            onClick={onClose}
        />
      </div>
      <SideSearchBox title="Recent Searches" items={recentSearches} />
      <SideSearchBox title="Popular Searches" items={popularSearches} />
    </div>
  );
};

export default MobileSideSearch;
