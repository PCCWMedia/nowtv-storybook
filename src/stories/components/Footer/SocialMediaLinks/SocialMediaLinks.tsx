import React from 'react';
import './SocialMediaLinks.scss';

import fbLogo from "../../../assets/img/footer/facebook-logo.svg";
import igLogo from "../../../assets/img/footer/ig-logo.svg";
import ytLogo from "../../../assets/img/footer/youtube-logo.svg";

interface SocialMediaLink {
    href: string;
    src: string;
    alt: string;
    className: string;
}

const socialMediaLinks: SocialMediaLink[] = [
    {
        href: 'https://www.facebook.com/NowTV.hongkong/',
        src: fbLogo,
        alt: 'Facebook',
        className: 'fb'
    },
    {
        href: 'https://www.instagram.com/nowtv.hk',
        src: igLogo,
        alt: 'Instagram',
        className: 'ins'
    },
    {
        href: 'https://www.youtube.com/user/nowtv',
        src: ytLogo,
        alt: 'YouTube',
        className: 'yt'
    }
];

const SocialMediaLinks: React.FC = () => {
    return (
        <div className='social-media-wrapper'>
            {socialMediaLinks.map((link, index) => (
                <div key={index} className='item'>
                    <a href={link.href} target='_blank' className={link.className}>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SocialMediaLinks; 