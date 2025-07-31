import React, { useEffect, useState } from 'react';
import './PlanOverlay.scss';
import PlanItem from './PlanItem';
import {Button} from '../../Button/Button';

interface PlanOverlayProps {
    planName: string;
    plans: Array<{
        href: string;
        label: string;
        planTitle: string;
        plansubTitle?: string;
        price: string;
        perUnit: string;
        planNotes: string;
        isButton?: boolean; 
        isToggle?: boolean; 
        disableAfterToggle?: boolean; 
    }>;
    remarksActive?: boolean; 
    remarks?: string[];
    onClose?: () => void;
}

const PlanOverlay: React.FC<PlanOverlayProps> = ({ 
    planName,
    plans,
    remarks,
    remarksActive,
    onClose
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a small delay to ensure the initial state is rendered
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    }, []);

    return (
        <div className={`modal-wrapper ${isVisible ? 'show' : ''}`}  onClick={onClose}>
            <div className="modal-dialog">
                <div className="modal-content-wrapper sm">
                    <div className="close-modal">
                        <Button className="close-btn" label="Close" onClick={onClose}/>
                    </div>

                    <div className='plan-wrapper' onClick={e => e.stopPropagation()}>
                        <h5>{planName}</h5>
                        <div className="plans-item-wrapper">
                            {plans.map((plan, index) => (
                                <PlanItem key={index} {...plan} />
                            ))}
                        </div>
                        
                        {remarksActive && remarks && remarks.length > 0 && (
                            <div className='remarks'>
                                {remarks.map((remark, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: remark }} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanOverlay;