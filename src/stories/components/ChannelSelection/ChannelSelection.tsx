import React from 'react';
import './ChannelSelection.scss';

interface ChannelSelectionProps {
    title: string;
    items: Array<{
        id: string;
        channelNo?: string;
        name?: string;
        description?: string;
        type?: string;
    }>;
    selectedItem: any;
    onItemClick: (item: any, event: React.MouseEvent<HTMLLIElement>) => void;
    disableActiveClass?: boolean;
}

const ChannelSelection: React.FC<ChannelSelectionProps> = ({
    title,
    items,
    selectedItem,
    onItemClick,
    disableActiveClass = false,
}) => {
    return (
        <>
            <div className="title-header">
                <div className="container">
                    <h6>{title}</h6>
                </div>
            </div>

            <div className="channel-list-wrapper">
                <div className="container">
                    <ul>
                        {items.map(item => (
                            <li 
                                key={item.id}
                                className={
                                  !disableActiveClass && selectedItem?.id === item.id ? 'active' : ''
                                }
                                data-type={item.type}
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