import React from 'react';
import './SocialMediaLinks.scss';

interface SocialMediaLink {
    href: string;
    src: string;
    alt: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        href: 'https://www.facebook.com/NowTV.hongkong/',
        src: '/src/stories/assets/img/facebook-logo.svg',
        alt: 'Facebook'
    },
    {
        href: 'https://www.instagram.com/nowtv.hk',
        src: '/src/stories/assets/img/ig-logo.svg',
        alt: 'Instagram'
    },
    {
        href: 'https://www.youtube.com/user/nowtv',
        src: '/src/stories/assets/img/youtube-logo.svg',
        alt: 'YouTube'
    }
];

const SocialMediaLinks: React.FC = () => {
    return (
        <div className='sideMenu-social-media'>
            {socialMediaLinks.map((link, index) => (
                <div key={index} className='item'>
                    <a href={link.href} target='_blank'>
                        <img src={link.src} alt={link.alt} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SocialMediaLinks; 