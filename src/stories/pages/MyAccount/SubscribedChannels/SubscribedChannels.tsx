import React, { useState } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Button } from '../../../components/Button/Button';
import SubChItem from '../../../components/MyAccount/SubChItem';

const SubscribedChannels: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    type Item = { imageSrc: string; alt: string; title: string; details: string };
    const primaryItems: Item[] = [
        {
            imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2022/10/VIU-wbg-e.png',
            alt: 'Viu Channel',
            title: 'Viu Channel',
            details: 'CH 102 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2020/04/105-wbg-e.png',
            alt: 'Now Chinese Drama Channel',
            title: 'Now Chinese Drama Channel',
            details: 'CH 105 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/133-wbg-e.png',
            alt: 'Now Baogu Movies',
            title: 'Now Baogu Movies',
            details: 'CH 133 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/138-wbg-e.png',
            alt: 'Now Baogu Superstars',
            title: 'Now Baogu Superstars',
            details: 'CH 138 | Expires: 21 Dec 2024',
        },
    ];
    const moreItems: Item[] = [
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/333-wbg-e.png',
            alt: 'Now Business News Channel',
            title: 'Now Business News Channel',
            details: 'CH 333 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/440-wbg-e.png',
            alt: 'DreamWorks',
            title: 'DreamWorks',
            details: 'CH 440 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/447-wbg-e.png',
            alt: 'CBeebies',
            title: 'CBeebies',
            details: 'CH 447 | Expires: 21 Dec 2024',
        },
        {
            imageSrc: 'https://www.nowtv.now.com/media/logo/502-wbg-e.png',
            alt: 'BBC Lifestyle',
            title: 'BBC Lifestyle',
            details: 'CH 502 | Expires: 21 Dec 2024',
        },
    ];
    const renderItems = (items: Item[]) =>
        items.map((item) => (
            <SubChItem
                key={`${item.title}-${item.details}`}
                imageSrc={item.imageSrc}
                alt={item.alt}
                title={item.title}
                details={item.details}
            />
        ));
    return (
        <div className='myaccount-wrapper'>
            <Header status="normal" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Subscription Details and Renewal Dates</h3>
                    </div>
                    <div className="section-content">
                        <section className="subscribed-channels">
                            <h4 className='border'>Subscribed Channels</h4>
                            
                            <div className="wrapper">
                                {renderItems(primaryItems)}
                            </div>

                            {!expanded && (
                                <Button
                                    className="btn secondary"
                                    label="See all"
                                    onClick={() => setExpanded(true)}
                                />
                            )}

                            <div className={`wrapper${expanded ? '' : ' hide'}`}>
                                {renderItems(moreItems)}
                            </div>
                        </section>

                        <section className='value-added-services'>
                            <h4 className='border'>Value Added Services</h4>
                            <ul>
                                <li>4K Connection Service ($0)</li>
                                <li>Additional Box Service Charge</li>
                                <li>HD Connection Service ($0)</li>
                                <li>Now One Set Top Box Rental Fee</li>
                                <li>Now One Set Top Box Rental Fee (Orig.$48)</li>
                            </ul>
                        </section>

                    </div>

                    
                </div>
            </div>
            
            <Footer status="normal" />
        </div>
    );
};

export default SubscribedChannels;