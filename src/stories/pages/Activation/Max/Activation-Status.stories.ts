import type { Meta, StoryObj } from '@storybook/react';
import ActivationStatus from './Activation-Status';

const meta: Meta<typeof ActivationStatus> = {
  title: 'Pages/Activation/Max',
  component: ActivationStatus,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0
    }
  },
  argTypes: {
    scenario: {
      control: 'select',
      options: [
        'landing',
        'before-proceed',
        'already-activated',
        'non-subscription',
        'activation-error'
      ],
      description: 'The activation scenario to display'
    },
    userName: {
      control: 'text',
      description: 'User name for logged in scenarios'
    },
    nowId: {
      control: 'text',
      description: 'Now ID for non-subscription scenario'
    },
    showLoading: {
      control: 'boolean',
      description: 'Show loading state initially'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ActivationStatus>;

/**
 * Static landing page shown to non-logged-in users
 */
export const Landing: Story = {
  args: {
    scenario: 'landing',
    showLoading: false,
  },
};

/**
 * Logged-in user who hasn't activated their Max account yet
 */
export const BeforeProceed: Story = {
  args: {
    scenario: 'before-proceed',
    userName: 'Wilson',
    showLoading: true,
  },
};

/**
 * Logged-in user whose Max account is already activated
 */
export const AlreadyActivated: Story = {
  args: {
    scenario: 'already-activated',
    userName: 'Wilson',
    showLoading: true,
  },
};

/**
 * Logged-in user without a valid HBO Max subscription
 */
export const NonSubscription: Story = {
  args: {
    scenario: 'non-subscription',
    userName: 'Wilson',
    nowId: '59427912',
    showLoading: false,
  },
};

/**
 * Error state when activation fails
 */
export const ActivationError: Story = {
  args: {
    scenario: 'activation-error',
    userName: 'Wilson',
    showLoading: true,
  },
};