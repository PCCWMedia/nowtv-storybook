import type { Meta, StoryObj } from '@storybook/react';
import ChannelOverview from './ChannelOverview';

const meta: Meta<typeof ChannelOverview> = {
	title: 'Pages/ChannelOverview',
	component: ChannelOverview,
	parameters: {
		layout: 'fullscreen',
		options: {
			bottomPanelHeight: 0,
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChannelOverview>;

export const Default: Story = {};
