import type { Meta, StoryObj } from '@storybook/react';
import SearchNoResult from './SearchNoResult';

const meta: Meta<typeof SearchNoResult> = {
	title: 'Pages/SearchResultPage/SearchNoResult',
	component: SearchNoResult,
	parameters: {
		layout: 'fullscreen',
		options: {
			bottomPanelHeight: 0,
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchNoResult>;

export const Default: Story = {
	args: {
	},
};