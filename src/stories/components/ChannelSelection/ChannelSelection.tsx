import React from 'react';
import './ChannelSelection.scss';

interface ChannelSelectionItem {
    id: string;
    channelNo?: string;
    name?: string;
    description?: string;
    type?: string;
    app?: boolean;
}

interface ChannelSelectionProps {
    title: string;
    items: ChannelSelectionItem[];
    selectedItem: ChannelSelectionItem | null;
    onItemClick: (item: ChannelSelectionItem, event: React.MouseEvent<HTMLLIElement>) => void;
    disableActiveClass?: boolean;
    disableItemClick?: boolean;
    showItemLabel?: boolean;
    itemLabelPosition?: 'above' | 'below';
    itemLabelKey?: 'channelNo' | 'name';
    logoWrapperClassName?: string;
}

const ChannelSelection: React.FC<ChannelSelectionProps> = ({
    title,
    items,
    selectedItem,
    onItemClick,
    disableActiveClass = false,
    disableItemClick = false,
    showItemLabel = false,
    itemLabelPosition = 'above',
    itemLabelKey = 'name',
    logoWrapperClassName,
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
                        {items.map((item) => {
                            const logo = logoWrapperClassName ? (
                                <div className={logoWrapperClassName}>
                                    <img src={`https://www.nowtv.now.com/media/s-logo/${item.id}_e.png`} alt="" />
                                </div>
                            ) : (
                                <img src={`https://www.nowtv.now.com/media/s-logo/${item.id}_e.png`} alt="" />
                            );
                            const logoContent =
                                showItemLabel && itemLabelPosition === 'below' ? (
                                    <div className="channel-selection-logo-box">
                                        {item.app === true && (
                                            <p className="channel-app-label">3rd-Party App</p>
                                        )}
                                        {logo}
                                    </div>
                                ) : logo;

                            return (
                                <li
                                    key={item.id}
                                    className={[
                                        !disableActiveClass && selectedItem?.id === item.id ? 'active' : '',
                                        showItemLabel && itemLabelPosition === 'below' ? 'has-label-below' : '',
                                        disableItemClick ? 'non-interactive' : '',
                                    ].filter(Boolean).join(' ')}
                                    data-type={item.type}
                                    onClick={disableItemClick ? undefined : (event) => onItemClick(item, event)}
                                >
                                    {item.app === true && itemLabelPosition !== 'below' && (
                                        <p className="channel-app-label">3rd-Party App</p>
                                    )}
                                    {showItemLabel && itemLabelPosition === 'above' && item[itemLabelKey] && (
                                        <p className="channel-item-label">{item[itemLabelKey]}</p>
                                    )}
                                    {logoContent}
                                    {showItemLabel && itemLabelPosition === 'below' && item[itemLabelKey] && (
                                        <p className="channel-item-label">{item[itemLabelKey]}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ChannelSelection; 