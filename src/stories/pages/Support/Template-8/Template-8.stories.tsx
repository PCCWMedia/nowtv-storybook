import React from 'react';
import Template8 from './Template-8';

export default {
  title: 'Pages/Support/Template-8',
  component: Template8,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

const setTopBoxData = [
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2021/07/AndroidBoxx.png',
    label: 'Now H1',
    linkHref: '#',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/nowone.png',
    label: 'Now One',
    linkHref: '#',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/6950.png',
    label: '6950',
    linkHref: '#',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/6845-2.png',
    label: '6845',
    linkHref: '#',
  },
  {
    imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/6828-2.png',
    label: '6828',
    linkHref: '#',
  },
  
];

const moreBoxData = [
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/6916-2.png',
      label: '6916',
      linkHref: '#',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/6911-2.png',
      label: '6911',
      linkHref: '#',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/8203-2.png',
      label: '8203',
      linkHref: '#',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/8206-2.png',
      label: '8206',
      linkHref: '#',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/5218-2.png',
      label: '5218',
      linkHref: '#',
    },
    {
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/10/5212-3.png',
        label: '5212',
        linkHref: '#',
    },
    
  ];

export const Default = () => (
  <Template8 borderCardData={setTopBoxData} moreBoxData={moreBoxData} />
); 