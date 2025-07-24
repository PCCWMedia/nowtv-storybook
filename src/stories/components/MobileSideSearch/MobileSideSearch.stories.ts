import React from 'react';
import './MobileSideSearch.scss';
import MobileSideSearch from './MobileSideSearch';

export default {
  title: 'Components/MobileSideSearch',
  component: MobileSideSearch,
};

export const Default = () => {
  return React.createElement(MobileSideSearch, {
    isOpen: true,
    onClose: () => {},
  });
};
