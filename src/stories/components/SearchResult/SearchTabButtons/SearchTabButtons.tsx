          import type { FC } from 'react';
          import SelectBox from '../../Form/SelectBox/SelectBox';
          import '../SearchResult.scss';

          export interface SearchTabItem {
            id: string;
            label: string;
            count?: number;
          }

          export interface SearchTabButtonsProps {
            tabs: SearchTabItem[];
            activeTabId: string;
            onTabChange?: (tabId: string) => void;
            className?: string;
          }

          const SearchTabButtons: FC<SearchTabButtonsProps> = ({
            tabs,
            activeTabId,
            onTabChange,
            className = '',
          }) => {
            const formattedLabel = (tab: SearchTabItem): string => {
              if (typeof tab.count !== 'number') {
                return tab.label;
              }

              return `${tab.label} (${tab.count})`;
            };

            const selectOptions = tabs.map((tab) => ({
              value: tab.id,
              label: formattedLabel(tab),
            }));

            return (
              <div className={`search-tab-buttons ${className}`.trim()}>
                <div className="filterrow" role="tablist" aria-label="Search result categories">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTabId;

                    return (
                      <div className="btn" key={tab.id}>
                        <button
                          type="button"
                          className={isActive ? 'active' : ''}
                          id={tab.id}
                          aria-pressed={isActive}
                          onClick={() => onTabChange?.(tab.id)}
                        >
                          {formattedLabel(tab)}
                        </button>
                      </div>
                    );
                  })}
                  <div className="clear" />
                </div>

                <div className="search-dropdown">
                  <SelectBox
                    key={activeTabId}
                    name="search_select"
                    options={selectOptions}
                    defaultValue={activeTabId}
                    placeholder="Search category"
                    onChange={(tabId) => onTabChange?.(tabId)}
                  />
                </div>
              </div>
            );
          };

          export default SearchTabButtons;