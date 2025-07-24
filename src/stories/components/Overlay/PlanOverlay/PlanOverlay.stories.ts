import type { Meta, StoryObj } from '@storybook/react';
import PlanOverlay from './PlanOverlay';
import planData from '../../../assets/data/plans.json';

const meta = {
  title: 'Components/Overlay/PlanOverlay',
  component: PlanOverlay,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    planName: { control: 'text' },
    plans: { control: 'object' },
    remarksActive: { control: 'boolean' },
  },
} satisfies Meta<typeof PlanOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    planName: planData.plans["Super Sports & Entertainment Combo"].planName,
    plans: planData.plans["Super Sports & Entertainment Combo"].plansData,
    remarksActive: planData.plans["Super Sports & Entertainment Combo"].remarks.active,
    remarks: planData.plans["Super Sports & Entertainment Combo"].remarks.content
  }
};

export const WithRemarks: Story = {
  args: {
    planName: planData.plans["Max (Ultimate) / Max (Standard)"].planName,
    plans: planData.plans["Max (Ultimate) / Max (Standard)"].plansData,
    remarksActive: planData.plans["Max (Ultimate) / Max (Standard)"].remarks.active,
    remarks: planData.plans["Max (Ultimate) / Max (Standard)"].remarks.content
  }
};

export const ShoppingCart: Story = {
  args: {
    planName: planData.plans["NBA Pack"].planName,
    plans: planData.plans["NBA Pack"].plansData,
    remarksActive: planData.plans["NBA Pack"].remarks.active,
    remarks: planData.plans["NBA Pack"].remarks.content
  }
};