import React, { useState } from 'react';
import './PlanCard.scss'; // Ensure you have this style file
import { Button } from '../../Button/Button';
import PackOverlay from '../../Overlay/PackOverlay/PackOverlay';
import PlanOverlay from '../../Overlay/PlanOverlay/PlanOverlay';
import packsData from '../../../assets/data/packs.json';
import plansData from '../../../assets/data/plans.json';
import { PriceTag } from '../../PriceTag/PriceTag';

interface PlanCardProps {
    image: string;
    imageSquare?: string;
    title: string;
    description: string;
    planIncludes: string[];
    price: string;
    notes: string;
    variant?: 'onerow' | 'default' | 'sm' | 'fullscreen';
    buttonLabel?: string;
    priceType?: 'from' | 'avg' | 'day' | 'pass';
    onPackClick?: (pack: string, image: string, description: string) => void;
    useExternalOverlay?: boolean;
    onButtonClick?: () => void;
    buttonUrl?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
    image,
    imageSquare,
    title,
    description,
    planIncludes,
    price,
    notes,
    variant = 'default',
    buttonLabel = "See Options",
    priceType = 'from',
    onPackClick,
    useExternalOverlay = false,
    onButtonClick,
    buttonUrl,
}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showPlanOverlay, setShowPlanOverlay] = useState(false);
    const [selectedPack, setSelectedPack] = useState('');
    const [selectedPackData, setSelectedPackData] = useState<any>(null);
    const [selectedPlanData, setSelectedPlanData] = useState<any>(null);

    const handlePackClick = (e: React.MouseEvent<HTMLAnchorElement>, pack: string) => {
        e.preventDefault();
        if (useExternalOverlay && onPackClick) {
            onPackClick(pack, image, description);
        } else {
            // Find the matching pack from packs.json
            const packData = packsData.packs.find(p => p.name === pack);
            if (packData) {
                setSelectedPack(pack);
                setSelectedPackData(packData);
                setShowOverlay(true);
            }
        }
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    const handleButtonClick = () => {
        if (buttonUrl) {
            window.location.href = buttonUrl;
            return;
        }
        const planInfo = plansData.plans[title as keyof typeof plansData.plans];
        if (planInfo) {
            setSelectedPlanData(planInfo);
            setShowPlanOverlay(true);
        }
    };

    const handleClosePlanOverlay = () => {
        setShowPlanOverlay(false);
    };

    const renderPrice = () => {
        const priceNumber = parseInt(price.replace(/[^0-9]/g, ''));
        switch (priceType) {
            case 'avg':
                return <PriceTag price={priceNumber} showAverage={true} />;
            case 'day':
                return <PriceTag price={priceNumber} period="day" />;
            case 'pass':
                return <PriceTag price={priceNumber} prefix="" period="Pass" />;
            default:
                return <PriceTag price={priceNumber} />;
        }
    };

    return (

            <div className={`plan-card${variant === 'sm' ? ' sm' : variant === 'onerow' ? ' onerow' : variant === 'fullscreen' ? ' fullscreen' : ''}`}>
            <div className='pack-img'>
                <img src={image} alt={title} className="pack-image-banner"/>
                <img src={imageSquare} alt={title} className="pack-image-square"/>
            </div>

            <div className="details">
                <div className="top">
                    {variant === 'fullscreen' ? <h2>{title}</h2> : <h4>{title}</h4>}
                    <p>{description}</p>
                </div>

                <div className="includes">
                    <h6>Plan includes:</h6>
                    <ul className="plan-includes">
                        {planIncludes.map((item, index) => (
                            <li key={index}><a href="#" data-pack={item} onClick={(e) => handlePackClick(e, item)}>{item}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="bottom-control">
                    <div className="price-wrap">
                        {renderPrice()}
                        <small dangerouslySetInnerHTML={{ __html: notes }} />
                    </div>

                    <div className="cta-buttons">
                        <Button 
                            className="btn primary" 
                            label={buttonLabel} 
                            data-plan={title} 
                            onClick={onButtonClick || handleButtonClick}
                        />
                    </div>
                </div>
            </div>
            {!useExternalOverlay && showOverlay && selectedPackData && (
                <PackOverlay
                    image={selectedPackData.packImage}
                    title={selectedPackData.name}
                    packDescription={selectedPackData.description}
                    channels={selectedPackData.channelsNumber.map((id: string) => ({ id }))}
                    ondemands={selectedPackData.onDemandNumber.map((id: string) => ({ id }))}
                    isOnDemand={selectedPackData.onDemandNumber.length > 0}
                    onClose={handleCloseOverlay}
                />
            )}
            {showPlanOverlay && selectedPlanData && (
                <PlanOverlay
                    planName={selectedPlanData.planName}
                    plans={selectedPlanData.plansData}
                    remarks={selectedPlanData.remarks.content}
                    remarksActive={selectedPlanData.remarks.active}
                    onClose={handleClosePlanOverlay}
                />
            )}
        </div>
        
    );
};

export default PlanCard;