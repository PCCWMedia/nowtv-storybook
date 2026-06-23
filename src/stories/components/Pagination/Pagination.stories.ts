import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Pagination from './Pagination';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		totalPages: { control: 'number' },
		currentPage: { control: 'number' },
		maxVisiblePages: { control: 'number' },
	},
	args: {
		totalPages: 8,
		currentPage: 1,
		maxVisiblePages: 8,
		onPageChange: fn(),
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
	args: {
		currentPage: 1,
		totalPages: 8,
	},
};

export const MiddlePage: Story = {
	args: {
		currentPage: 4,
		totalPages: 8,
	},
};

export const LastPage: Story = {
	args: {
		currentPage: 8,
		totalPages: 8,
	},
};

export const Interactive: Story = {
	render: (args) => {
		const [page, setPage] = useState(args.currentPage);

		useEffect(() => {
			setPage(args.currentPage);
		}, [args.currentPage]);

		return React.createElement(Pagination, {
			...args,
			currentPage: page,
			onPageChange: (nextPage: number) => {
				setPage(nextPage);
				args.onPageChange?.(nextPage);
			},
		});
	},
	args: {
		currentPage: 3,
		totalPages: 12,
		maxVisiblePages: 7,
	},
};
