import React from 'react';
import './ChannelSelection.scss';

interface ChannelSelectionProps {
    title: string;
    items: Array<{
        id: string;
        channelNo?: string;
        name?: string;
        description?: string;
    }>;
    selectedItem: any;
    onItemClick: (item: any, event: React.MouseEvent<HTMLLIElement>) => void;
}

const ChannelSelection: React.FC<ChannelSelectionProps> = ({
    title,
    items,
    selectedItem,
    onItemClick,
}) => {
    return (
        <>
            <div className="title-header">
                <div className="container">
                    <h4>{title}</h4>
                </div>
            </div>

            <div className="channel-list-wrapper">
                <div className="container">
                    <ul>
                        {items.map(item => (
                            <li 
                                key={item.id}
                                className={`${selectedItem?.id === item.id ? 'active' : ''}`}
                                onClick={(e) => onItemClick(item, e)}
                            >
                                <img src={`https://www.nowtv.now.com/media/s-logo/${item.id}_e.png`} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ChannelSelection; 