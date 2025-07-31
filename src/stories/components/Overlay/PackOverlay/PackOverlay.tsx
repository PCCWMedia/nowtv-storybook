import React, { useState, useRef, useEffect } from 'react';
import './PackOverlay.scss';
import ChannelSelection from '../../ChannelSelection/ChannelSelection';
import {Button} from '../../Button/Button';
import channelsData from '../../../assets/data/channels.json';


interface PackOverlayProps {
    image: string;
    title: string;
    packDescription: string;
    channels: Array<{
        id: string;
        name?: string;
        description?: string;
    }>;
    ondemands: Array<{
        id: string;
        name?: string;
        description?: string;
    }>;
    isOnDemand?: boolean;
    onClose: () => void;
}

const PackOverlay: React.FC<PackOverlayProps> = ({
    image,
    title,
    packDescription,
    channels,
    ondemands,
    isOnDemand = false,
    onClose
}) => {
    const [selectedChannel, setSelectedChannel] = useState<null | typeof channels[0]>(null);
    const [selectedOndemand, setSelectedOndemand] = useState<null | typeof ondemands[0]>(null);
    const [isDescriptionVisible, setDescriptionActive] = useState(false);
    const [descriptionPosition, setDescriptionPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const channelWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add a small delay to ensure the initial state is rendered
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    }, []);

    const handleItemClick = (
        item: typeof channels[0] | typeof ondemands[0],
        event: React.MouseEvent<HTMLLIElement>,
        type: 'channel' | 'ondemand'
    ) => {
        const clickedLi = event.currentTarget;
        const channelWrapper = channelWrapperRef.current;

        if (channelWrapper) {
            channelWrapper.querySelectorAll('li').forEach((li) => {
                li.style.marginBottom = '8px';
            });
            
            setDescriptionActive(false);

            const activeChannel = channelWrapper.querySelector('.active') as HTMLElement;
            if (activeChannel) {
                activeChannel.style.marginBottom = '8px';
            }

            // Fetch channel data from channelsData when a channel is clicked
            if (type === 'channel') {
                const channelFromData = channelsData.channels.find(channel => channel.number === item.id);
                if (channelFromData) {
                    setSelectedChannel({
                        id: channelFromData.number,
                        name: channelFromData.name,
                        description: channelFromData.description
                    });
                }
                setSelectedOndemand(null);
            } else {
                const ondemandFromData = channelsData.channels.find(channel => channel.number === item.id);
                if (ondemandFromData) {
                    setSelectedOndemand({
                        id: ondemandFromData.number,
                        name: ondemandFromData.name,
                        description: ondemandFromData.description
                    });
                }
                setSelectedChannel(null);
            }

            setTimeout(() => {
                setDescriptionActive(true);
            }, 50);

            setTimeout(() => {
                const wrapperRect = channelWrapper.getBoundingClientRect();
                const liRect = clickedLi.getBoundingClientRect();
                const position = liRect.bottom - wrapperRect.top + 8;

                setDescriptionPosition(position);
            }, 250);
            

            setTimeout(() => {
            
                const channelDescriptionElement = document.querySelector('.channel-description') as HTMLElement;
                if (channelDescriptionElement) {
                    console.log(channelDescriptionElement.offsetHeight);
                }
                channelDescriptionElement.classList.add('show');
                const activeChannelElement = channelWrapper.querySelector('.active') as HTMLElement;
                if (activeChannelElement) {
                    activeChannelElement.style.marginBottom = `${channelDescriptionElement.offsetHeight + 8}px`;
                }
            }, 350);
        }

        // Deselect if clicking the same item
        if (
            (type === 'channel' && selectedChannel?.id === item.id) ||
            (type === 'ondemand' && selectedOndemand?.id === item.id)
        ) {
            if (type === 'channel') {
                setSelectedChannel(null);
            } else {
                setSelectedOndemand(null);
            }
            setDescriptionActive(false);
        }
    };

    return (
        <div className={`modal-wrapper ${isVisible ? 'show' : ''}`} onClick={onClose}>
            <div className="modal-dialog" >
                <div className="modal-content-wrapper">
                    <div className="close-modal">
                        <Button className="close-btn" label="Close" onClick={onClose}/>
                    </div>

                    <div className="pack-overlay-wrapper" onClick={e => e.stopPropagation()}>
                        <img src={image} alt={title} className="pack-banner"/>

                        <div className="pack-about-wrapper">
                            <div className="container">
                                <h4>{title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: packDescription }}></p>
                            </div>
                        </div>

                        <div className="channel-wrapper" ref={channelWrapperRef}>
                            {isOnDemand && ondemands.length > 0 && (
                                <ChannelSelection
                                    title={`${ondemands.length} On-Demand Catalog${ondemands.length !== 1 ? 's' : ''}`}
                                    items={ondemands}
                                    selectedItem={selectedOndemand}
                                    onItemClick={(item, e) => handleItemClick(item, e, 'ondemand')}
                                />
                            )}

                            {channels.length > 0 && (
                                <ChannelSelection
                                    title={`${channels.length} Channel${channels.length !== 1 ? 's' : ''}`}
                                    items={channels}
                                    selectedItem={selectedChannel}
                                    onItemClick={(item, e) => handleItemClick(item, e, 'channel')}
                                />
                            )}

                            {/* channel description */}
                            <div 
                                className={`channel-description ${isDescriptionVisible && (selectedChannel || selectedOndemand) ? 'active' : ''}`}
                                style={{ top: `${descriptionPosition}px` }}
                            >
                                <div className="container">
                                    <div className="channel-name">
                                        {selectedChannel && <span>{`CH.${selectedChannel.id}`}</span>}
                                        <h6>{selectedChannel?.name || selectedOndemand?.name || ''}</h6>
                                    </div> 
                                    <p>{selectedChannel?.description || selectedOndemand?.description || ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackOverlay;