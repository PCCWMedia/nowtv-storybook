import React from 'react';
import './FullscreenSplit.scss';
import { PriceTag } from '../../PriceTag/PriceTag';
import Link from '../../Link/Link';

interface FullscreenSplitProps {
    image: string;
    title: string;
    subtitle: string;
    priceText: string;
    startingPrice: string;
    ctaUrl: string;
    ctaText: string;
}

const FullscreenSplit: React.FC<FullscreenSplitProps> = ({
    image,
    title,
    subtitle,
    priceText,
    startingPrice,
    ctaUrl,
    ctaText
}) => {
    return (
        <div className="fullscreen-split">
            <div className='container'>
                <div className="left">
                    <img src={image} alt={title} />
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <h6>{subtitle}</h6>
                    <h6>{priceText}</h6>
                    <PriceTag price={parseInt(startingPrice.replace(/[^0-9]/g, ''))} period="month" />
                    <Link
                        href={ctaUrl}
                        label={ctaText}
                        className="btn primary"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default FullscreenSplit; 