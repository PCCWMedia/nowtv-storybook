import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SearchTabButtons from './SearchTabButtons';

const tabs = [
	{ id: 'all', label: 'All', count: 20 },
	{ id: 'offers', label: 'Offers', count: 4 },
	{ id: 'program', label: 'Program', count: 20 },
	{ id: 'channels', label: 'Channels & Catalogs', count: 10 },
	{ id: 'support', label: 'Support', count: 4 },
	{ id: 'others', label: 'Others', count: 2 },
];

const meta: Meta<typeof SearchTabButtons> = {
	title: 'Components/SearchResult/SearchTabButtons',
	component: SearchTabButtons,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div style={{ width: 'min(100%, 1100px)', padding: '24px', background: '#fff' }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SearchTabButtons>;

export const Default: Story = {
	render: (args) => {
		const [activeTabId, setActiveTabId] = useState(args.activeTabId);

		return (
			<SearchTabButtons
				{...args}
				activeTabId={activeTabId}
				onTabChange={setActiveTabId}
			/>
		);
	},
	args: {
		tabs,
		activeTabId: 'all',
	},
};

export const ProgramActive: Story = {
	args: {
		tabs,
		activeTabId: 'program',
	},
};

export const CompactSet: Story = {
	args: {
		tabs: [
			{ id: 'all', label: 'All', count: 6 },
			{ id: 'offers', label: 'Offers', count: 2 },
			{ id: 'support', label: 'Support', count: 4 },
		],
		activeTabId: 'support',
	},
};
