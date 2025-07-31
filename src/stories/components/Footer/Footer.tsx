import React from 'react';
// import FooterColumn from './components/FooterLinks/FooterColumn';
import ToggleFooterColumn from './FooterLinks/Toggle-FooterColumns';
import TncLinks from './FooterLinks/TncLinks';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

import './footer.scss';

import anHKTLogo from '../../assets/img/an-hkt-logo-w.png';

interface FooterProps {
    status: 'normal' | 'copyrightOnly';
}

const Footer: React.FC<FooterProps> = ({ status }) => {
    const columns = [
        { title: 'About', links: [{ text: 'Now TV', href: '#' }, { text: 'Advertising', href: '#' }, { text: 'Anti-Scam', href: '#' }] },
        { title: 'Subscribe', links: [{ text: 'New Customers', href: '#' }, { text: 'Existing Customers', href: '#' }, { text: 'Business Customers', href: '#' }, { text: 'All Packs', href: '#' }, { text: 'Redeem Gifts', href: '#' }] },
        { title: "What's On", links: [{ text: 'Channels & On Demand', href: '#' }] },
        { title: 'Watch Now TV', links: [{ text: 'Now TV', href: '#' }, { text: 'Set Top Box TV Interface', href: '#' }, { text: 'TV Guide', href: '#' }, { text: 'Set Top Box TV Tips for new users', href: '#' }] },
        { title: 'Account', links: [{ text: 'My Account', href: '#' }, { text: 'Support Centre', href: '#' }, { text: 'Service Termination', href: '#' }] },
        { title: 'Contact Us', links: [{ text: 'WhatsApp (CS)', href: '#' }, { text: 'WhatsApp (Sales)', href: '#' }, { text: 'See All Contacts', href: '#' }] },
        { title: 'More Now', links: [{ text: 'Now.com', href: '#' }, { text: 'Now Video Express', href: '#' }, { text: 'Now Sports', href: '#' }, { text: 'Apps', href: '#' }] },
    ];
    
    const tncLinksData = [
        { text: 'Sitemap', href: '#' },
        { text: 'Terms & Conditions', href: '#' },
        { text: 'Disclaimer & Copyrights', href: '#' },
        { text: 'Policies & Statements', href: '#' },
    ];

    return (
        <footer className="footer">

            {(status === 'normal') && 
            <div className='footer-wrapper'>
                <div className='container'>
                    <div className="inner">
                        {columns.map((column, index) => (
                            <ToggleFooterColumn key={index} title={column.title}>
                            {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ToggleFooterColumn>
                        ))}
                    </div>

                    <SocialMediaLinks />
                </div>
            </div>
            }
             
            <div className="copyright-wrapper">
                <div className='container'>
                    <div className='inner'>
                        <TncLinks links={tncLinksData} />
                        <div className="copyright-text">
                            <p>© PCCW Media Limited, 2025  <span className='note-DPMS'>DPMS Category A Registrant (Registration No. A-B-24-11-08337)</span></p>
                            <img src={anHKTLogo} alt=""/>
                            <small>
                            DPMS Category A Registrant (Registration No. A-B-24-11-08337)
                            </small>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;