
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ChannelSelection from '../../components/ChannelSelection/ChannelSelection';
import Link from '../../components/Link/Link';
import channelsData from '../../assets/data/channels.json';
import './ChannelOverview.scss';
import SelectBox from '../../components/Form/SelectBox/SelectBox';

type TabType = 'channel' | 'on-demand';

const DESCRIPTION_PANEL_EXTRA_SPACING = 70;
const ALL_FILTER_VALUE = 'all';

interface FilterOption {
    value: string;
    label: string;
}

interface ChannelData {
    number: string;
    name: string;
    description?: string;
    type?: string;
}

interface ChannelSelectionItem {
    id: string;
    channelNo?: string;
    name: string;
    description?: string;
    type?: string;
}

const mapSelectionItem = (channel: ChannelData): ChannelSelectionItem => ({
    id: channel.number,
    channelNo: channel.number,
    name: channel.name,
    description: channel.description,
    type: channel.type,
});

const formatTypeLabel = (type: string): string =>
    type
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .trim();

const ChannelOverview: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('channel');
    const [selectedChannel, setSelectedChannel] = useState<ChannelSelectionItem | null>(null);
    const [selectedOnDemand, setSelectedOnDemand] = useState<ChannelSelectionItem | null>(null);
    const [isDescriptionVisible, setDescriptionActive] = useState(false);
    const [descriptionPosition, setDescriptionPosition] = useState(0);
    const [channelTypeFilter, setChannelTypeFilter] = useState(ALL_FILTER_VALUE);
    const [onDemandTypeFilter, setOnDemandTypeFilter] = useState(ALL_FILTER_VALUE);
    const contentWrapperRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const activeItemRef = useRef<HTMLLIElement | null>(null);
    const animationTimeoutsRef = useRef<number[]>([]);

    const channels = useMemo(
        () =>
            (channelsData.channels as ChannelData[])
                .filter((item) => /^\d/.test(item.number))
                .map(mapSelectionItem)
                .map((item) => ({
                    ...item,
                    channelNo: `CH ${item.channelNo ?? item.id}`,
                })),
        []
    );

    const onDemand = useMemo(
        () =>
            (channelsData.channels as ChannelData[])
                .filter((item) => item.number.startsWith('L'))
                .map(mapSelectionItem),
        []
    );

    const buildFilterOptions = (items: ChannelSelectionItem[]): FilterOption[] => {
        const uniqueTypes = Array.from(
            new Set(
                items
                    .map((item) => item.type?.trim())
                    .filter((type): type is string => Boolean(type))
            )
        );

        return [
            { value: ALL_FILTER_VALUE, label: 'All' },
            ...uniqueTypes.map((type) => ({ value: type, label: formatTypeLabel(type) })),
        ];
    };

    const channelTypeOptions = useMemo(() => buildFilterOptions(channels), [channels]);
    const onDemandTypeOptions = useMemo(() => buildFilterOptions(onDemand), [onDemand]);

    const filteredChannels = useMemo(
        () => channels.filter((item) => channelTypeFilter === ALL_FILTER_VALUE || item.type === channelTypeFilter),
        [channels, channelTypeFilter]
    );

    const filteredOnDemand = useMemo(
        () => onDemand.filter((item) => onDemandTypeFilter === ALL_FILTER_VALUE || item.type === onDemandTypeFilter),
        [onDemand, onDemandTypeFilter]
    );

    const clearAnimationTimeouts = () => {
        animationTimeoutsRef.current.forEach(window.clearTimeout);
        animationTimeoutsRef.current = [];
    };

    const queueAnimationTimeout = (callback: () => void, delay: number) => {
        const timeoutId = window.setTimeout(() => {
            animationTimeoutsRef.current = animationTimeoutsRef.current.filter((id) => id !== timeoutId);
            callback();
        }, delay);

        animationTimeoutsRef.current.push(timeoutId);
    };

    useEffect(() => () => clearAnimationTimeouts(), []);

    const equalizeChannelItemHeights = () => {
        const listItems = Array.from(
            contentWrapperRef.current?.querySelectorAll<HTMLLIElement>('.channel-list-wrapper li') ?? []
        );

        listItems.forEach((item) => {
            item.style.height = '';
        });

        const rows = listItems.reduce<Map<number, HTMLLIElement[]>>((rowMap, item) => {
            const rowTop = Math.round(item.offsetTop);
            const rowItems = rowMap.get(rowTop) ?? [];
            rowItems.push(item);
            rowMap.set(rowTop, rowItems);
            return rowMap;
        }, new Map());

        rows.forEach((rowItems) => {
            const rowHeight = Math.max(...rowItems.map((item) => item.getBoundingClientRect().height));

            rowItems.forEach((item) => {
                item.style.height = `${rowHeight}px`;
            });
        });
    };

    useEffect(() => {
        const updateRowHeights = () => {
            requestAnimationFrame(equalizeChannelItemHeights);
        };

        updateRowHeights();
        window.addEventListener('resize', updateRowHeights);

        return () => {
            window.removeEventListener('resize', updateRowHeights);
        };
    }, [activeTab, filteredChannels, filteredOnDemand]);

    const resetItemSpacing = () => {
        contentWrapperRef.current?.querySelectorAll('li').forEach((item) => {
            item.style.marginBottom = '';
        });
        activeItemRef.current = null;
    };

    const updateActiveItemSpacing = () => {
        const activeItemElement = activeItemRef.current;
        const descriptionContent = descriptionRef.current?.querySelector('.container');

        if (!activeItemElement || !descriptionContent) {
            return;
        }

        const descriptionContentHeight = descriptionContent.getBoundingClientRect().height;
        activeItemElement.style.marginBottom = `${descriptionContentHeight + DESCRIPTION_PANEL_EXTRA_SPACING}px`;
    };

    const hideDescription = () => {
        clearAnimationTimeouts();
        setDescriptionActive(false);
        resetItemSpacing();
    };

    useEffect(() => {
        if (activeTab === 'channel') {
            const isSelectedHidden = selectedChannel && !filteredChannels.some((item) => item.id === selectedChannel.id);

            if (isSelectedHidden) {
                setSelectedChannel(null);
                hideDescription();
            }
        }

        if (activeTab === 'on-demand') {
            const isSelectedHidden = selectedOnDemand && !filteredOnDemand.some((item) => item.id === selectedOnDemand.id);

            if (isSelectedHidden) {
                setSelectedOnDemand(null);
                hideDescription();
            }
        }
    }, [activeTab, filteredChannels, filteredOnDemand, selectedChannel, selectedOnDemand]);

    const setSelectedItem = (item: ChannelSelectionItem, type: TabType) => {
        if (type === 'channel') {
            setSelectedChannel(item);
            setSelectedOnDemand(null);
        } else {
            setSelectedOnDemand(item);
            setSelectedChannel(null);
        }
    };

    const showDescriptionForItem = (
        item: ChannelSelectionItem,
        clickedItem: HTMLLIElement,
        type: TabType
    ) => {
        const wrapperRect = contentWrapperRef.current?.getBoundingClientRect();
        const itemRect = clickedItem.getBoundingClientRect();

        if (!wrapperRect) {
            return;
        }

        resetItemSpacing();
        activeItemRef.current = clickedItem;
        setSelectedItem(item, type);
        setDescriptionPosition(itemRect.bottom - wrapperRect.top + 8);

        queueAnimationTimeout(() => {
            setDescriptionActive(true);
            equalizeChannelItemHeights();
            requestAnimationFrame(updateActiveItemSpacing);
            queueAnimationTimeout(updateActiveItemSpacing, 250);
        }, 50);
    };

    const handleTabChange = (tab: TabType) => {
        if (tab === activeTab) {
            return;
        }

        hideDescription();
        setChannelTypeFilter(ALL_FILTER_VALUE);
        setOnDemandTypeFilter(ALL_FILTER_VALUE);
        setActiveTab(tab);
    };

    const handleItemClick = (
        item: ChannelSelectionItem,
        event: React.MouseEvent<HTMLLIElement>,
        type: TabType
    ) => {
        const clickedItem = event.currentTarget;
        const isSelectedItem = type === 'channel'
            ? selectedChannel?.id === item.id
            : selectedOnDemand?.id === item.id;

        clearAnimationTimeouts();

        if (isSelectedItem && isDescriptionVisible) {
            if (type === 'channel') {
                setSelectedChannel(null);
            } else {
                setSelectedOnDemand(null);
            }
            hideDescription();
            return;
        }

        setDescriptionActive(false);

        if (isDescriptionVisible) {
            resetItemSpacing();
            queueAnimationTimeout(() => showDescriptionForItem(item, clickedItem, type), 250);
            return;
        }

        showDescriptionForItem(item, clickedItem, type);
    };

    const activeItem = selectedChannel || selectedOnDemand;

    const getPrimaryAction = () => {
        if (activeTab === 'channel' && selectedChannel) {
            if (selectedChannel.id.startsWith('9')) {
                return {
                    href: 'https://www.nowtv.now.com/site/enquiry3',
                    label: 'Contact Us',
                };
            }

            return {
                href: `https://www.nowtv.now.com/get-started?channelid=${selectedChannel.id}`,
                label: 'See Plans',
            };
        }

        if (activeTab === 'on-demand' && selectedOnDemand) {
            return {
                href: `https://www.nowtv.now.com/get-started?libid=${selectedOnDemand.id}`,
                label: 'See Plans',
            };
        }

        return null;
    };

    const primaryAction = getPrimaryAction();

    return (
        <div className="channel-overview-page">
            <Header status="normal" />

            <main className="channel-tabs-wrapper">
                <div className="tabs-options" role="tablist" aria-label="Channel options">
                    <div className="container">
                        <button
                            type="button"
                            className={activeTab === 'channel' ? 'active' : ''}
                            onClick={() => handleTabChange('channel')}
                            role="tab"
                            aria-selected={activeTab === 'channel'}
                        >
                            Channel
                        </button>
                        <button
                            type="button"
                            className={activeTab === 'on-demand' ? 'active' : ''}
                            onClick={() => handleTabChange('on-demand')}
                            role="tab"
                            aria-selected={activeTab === 'on-demand'}
                        >
                            On Demand
                        </button>
                    </div>
                </div>

                <div className="tabs-content-wrapper">

                    <div className="channel-content-wrapper" ref={contentWrapperRef}>
                        {activeTab === 'channel' && (
                            <section className="tabs-content" data-content="channel">
                                <div className="type-filter-wrapper">
                                    <div className="container">
                                        <h6>Genre</h6>
                                        <SelectBox
                                            options={channelTypeOptions}
                                            defaultValue={channelTypeFilter}
                                            onChange={(value) => {
                                                setChannelTypeFilter(value);
                                                hideDescription();
                                            }}
                                            placeholder="All"
                                            name="channel-type"
                                        />
                                    </div>
                                </div>

                                <div key={`channel-filter-${channelTypeFilter}`} className="filtered-content fade-in">
                                    <ChannelSelection
                                        title="Channel"
                                        items={filteredChannels}
                                        selectedItem={selectedChannel}
                                        onItemClick={(item, event) => handleItemClick(item, event, 'channel')}
                                        showItemLabel={true}
                                        itemLabelKey="channelNo"
                                        logoWrapperClassName="channel-logo"
                                    />
                                </div>
                            </section>
                        )}

                        {activeTab === 'on-demand' && (
                            <section className="tabs-content" data-content="on-demand">
                                <div className="type-filter-wrapper">
                                    <div className="container">
                                        <h6>Genre</h6>
                                        <SelectBox
                                            options={onDemandTypeOptions}
                                            defaultValue={onDemandTypeFilter}
                                            onChange={(value) => {
                                                setOnDemandTypeFilter(value);
                                                hideDescription();
                                            }}
                                            placeholder="All"
                                            name="ondemand-type"
                                        />
                                    </div>
                                </div>

                                <div key={`ondemand-filter-${onDemandTypeFilter}`} className="filtered-content fade-in">
                                    <ChannelSelection
                                        title="On Demand"
                                        items={filteredOnDemand}
                                        selectedItem={selectedOnDemand}
                                        onItemClick={(item, event) => handleItemClick(item, event, 'on-demand')}
                                        showItemLabel={true}
                                        itemLabelKey="name"
                                        logoWrapperClassName="channel-logo"
                                    />
                                </div>
                            </section>
                        )}

                        <div
                            ref={descriptionRef}
                            className={`channel-description ${isDescriptionVisible && activeItem ? 'active' : ''}`}
                            style={{ top: `${descriptionPosition}px` }}
                        >
                            <div className="container">
                                <div className="channel-name">
                                    <div className="channel-title">
                                        <h6>{activeItem?.name || ''}</h6>
                                    </div>

                                    {activeItem && (
                                        <div className="channel-actions">
                                            {activeTab === 'channel' && selectedChannel && (
                                                <Link
                                                    href={`https://nowplayer.now.com/tvguide/channeldetail/${selectedChannel.id}/1`}
                                                    label="Channel Schedule"
                                                    className="arrow"
                                                    target="_blank"
                                                />
                                            )}
                                            {activeTab === 'on-demand' && selectedOnDemand && (
                                                <Link
                                                    href="https://nowplayer.now.com/ondemand/seeall?filterType=appPlayable&nodeId=201510160000060"
                                                    label="Watch on Now TV App / Website"
                                                    className="arrow"
                                                    target="_blank"
                                                />
                                            )}
                                            {primaryAction && (
                                                <Link href={primaryAction.href} label={primaryAction.label} className="btn primary" />
                                            )}
                                        </div>
                                    )}
                                </div>
                                <p>{activeItem?.description || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer status="normal" />
        </div>
    );
};

export default ChannelOverview;
