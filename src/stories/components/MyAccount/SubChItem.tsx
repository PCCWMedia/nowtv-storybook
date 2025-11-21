import React from 'react';

export type SubChItemProps = {
    imageSrc: string;
    alt: string;
    title: string;
    details: string;
};

export const SubChItem: React.FC<SubChItemProps> = ({ imageSrc, alt, title, details }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={imageSrc} alt={alt} />
            </div>
            <div className="channel">
                <h5>{title}</h5>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default SubChItem; 