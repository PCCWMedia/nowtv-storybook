import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '../../Button/Button';
import ChannelSelection from '../../ChannelSelection/ChannelSelection';
import './FilterChannelsOverlay.scss';
import channelsData from '../../../assets/data/channels.json';
import plansData from '../../../assets/data/plans.json';

export interface FilterChannelsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (item: any) => void;
}

const channelCategories = [
  { label: 'All', className: 'all' },
  { label: 'Sports', className: 'Sports' },
  { label: 'Movies/Drama', className: 'Movie' },
  { label: 'Entertainment', className: 'Entertainment' },
  { label: 'Asian Entertainment', className: 'AsianEntertainment' },
  { label: 'Western Entertainment', className: 'WesternEntertainment' },
  { label: 'Travel', className: 'Travel' },
  { label: 'Knowledge', className: 'Knowledge' },
  { label: 'Kids/Learn', className: 'Kids' },
  { label: 'Infotainment', className: 'News' },
  { label: 'Foreign Language', className: 'Foreign' },
];

interface Channel {
  number: string;
  name: string;
  name_zh?: string;
  description?: string;
  description_zh?: string;
  type?: string;
}

const onDemandCatalogs = (channelsData.channels as Channel[])
  .filter((channel: Channel) => channel.number.startsWith('L'))
  .map((channel: Channel) => ({
    id: channel.number,
    type: channel.type,
    name: channel.name,
    description: channel.description,
  }));

const liveChannels = (channelsData.channels as Channel[])
  .filter((channel: Channel) => /^\d+$/.test(channel.number))
  .map((channel: Channel) => ({
    id: channel.number,
    type: channel.type,
    name: channel.name,
    description: channel.description,
  }));

// Get all available onDemandNumbers and channelsNumbers from plans
const getAvailableNumbersFromPlans = () => {
  const availableOnDemandNumbers = new Set<string>();
  const availableChannelsNumbers = new Set<string>();
  
  Object.values(plansData.plans).forEach((plan: any) => {
    if (plan.onDemandNumber) {
      plan.onDemandNumber.forEach((num: string) => availableOnDemandNumbers.add(num));
    }
    if (plan.channelsNumber) {
      plan.channelsNumber.forEach((num: string) => availableChannelsNumbers.add(num));
    }
  });
  
  return { availableOnDemandNumbers, availableChannelsNumbers };
};

// Filter catalogs and channels to only include those available in plans
const { availableOnDemandNumbers, availableChannelsNumbers } = getAvailableNumbersFromPlans();

const availableOnDemandCatalogs = onDemandCatalogs.filter(catalog => 
  availableOnDemandNumbers.has(catalog.id)
);

const availableLiveChannels = liveChannels.filter(channel => 
  availableChannelsNumbers.has(channel.id)
);

// Helper to find planName by channel/catalog id
const findPlanNameById = (id: string): string | null => {
  const planKeys = Object.keys(plansData.plans) as (keyof typeof plansData.plans)[];
  for (const planKey of planKeys) {
    const plan = plansData.plans[planKey];
    if (Array.isArray(plan.onDemandNumber) && (plan.onDemandNumber as string[]).includes(id)) {
      return plan.planName;
    }
    if (Array.isArray(plan.channelsNumber) && (plan.channelsNumber as string[]).includes(id)) {
      return plan.planName;
    }
  }
  return null;
};

export const FilterChannelsOverlay: React.FC<FilterChannelsOverlayProps> = ({ isOpen, onClose, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOnDemand, setSelectedOnDemand] = useState<any>(null);
  const [selectedLiveChannel, setSelectedLiveChannel] = useState<any>(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // Map label to className for filtering
  const categoryClassMap: Record<string, string> = channelCategories.reduce((acc, cur) => {
    acc[cur.label] = cur.className;
    return acc;
  }, {} as Record<string, string>);

  // Filtered on-demand and live channels based on selectedCategory
  const filteredOnDemandCatalogs = useMemo(() => {
    if (selectedCategory === 'All') return availableOnDemandCatalogs;
    const className = categoryClassMap[selectedCategory];
    return availableOnDemandCatalogs.filter((item: any) => item.type === className);
  }, [selectedCategory]);

  const filteredLiveChannels = useMemo(() => {
    if (selectedCategory === 'All') return availableLiveChannels;
    const className = categoryClassMap[selectedCategory];
    return availableLiveChannels.filter((item: any) => item.type === className);
  }, [selectedCategory]);

  useEffect(() => {
    if (isOpen) {
      // Add a small delay to ensure the initial state is rendered
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      setIsCategoryDropdownOpen(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal-wrapper${isVisible ? ' show' : ''}`} onClick={onClose}>
      <div className="modal-dialog">
        <div className="modal-content-wrapper">
          <div className="close-modal">
            <Button className="close-btn" label="Close" onClick={onClose} />
          </div>

          <div className="filter-channels-wrapper" onClick={e => e.stopPropagation()}>
            <div className='container'>
                <h4>See Plans for A Catalog Or Channel</h4>
                
                <button 
                  className={`mobile-select${isCategoryDropdownOpen ? ' active' : ''}`}
                  onClick={() => setIsCategoryDropdownOpen((open) => !open)}
                >
                  {selectedCategory}
                </button>

                <div className={`channel-options${isCategoryDropdownOpen ? ' show' : ''}`}>
                  {channelCategories.map((cat) => (
                    <button
                      key={cat.className}
                      className={`${cat.className}${selectedCategory === cat.label ? ' active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat.label);
                        setIsCategoryDropdownOpen(false);
                      }}
                      type="button"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

            </div>
            
            {/* Only show ChannelSelection if there are items */}
            {filteredOnDemandCatalogs.length > 0 && (
              <ChannelSelection
                title="On-Demand Catalogs"
                items={filteredOnDemandCatalogs}
                selectedItem={selectedOnDemand}
                onItemClick={(item, e) => {
                  setSelectedOnDemand(item);
                  if (onSelect) onSelect(item);
                }}
                disableActiveClass={true}
              />
            )}

            {filteredLiveChannels.length > 0 && (
              <ChannelSelection
                title="Live Channels"
                items={filteredLiveChannels}
                selectedItem={selectedLiveChannel}
                onItemClick={(item, e) => {
                  setSelectedLiveChannel(item);
                  if (onSelect) onSelect(item);
                }}
                disableActiveClass={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterChannelsOverlay;
