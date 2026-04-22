import type { Meta, StoryObj } from '@storybook/react';
import ActivationStatus from './Activation-Status';

const meta: Meta<typeof ActivationStatus> = {
  title: 'Pages/Activation/Perplexity',
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
        'static-landing',
        'not-yet-activated',
        'already-activated',
        'non-enrolled',
        'activation-already-activated',
        'before-proceed',
        'activation-fail'
      ],
      description: 'The activation scenario to display'
    },
    userName: {
      control: 'text',
      description: 'User name for logged in scenarios'
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
export const StaticLanding: Story = {
  args: {
    scenario: 'static-landing',
    showLoading: false,
  },
};

/**
 * Logged-in user who hasn't activated their Perplexity account yet
 */
export const NotYetActivated: Story = {
  args: {
    scenario: 'not-yet-activated',
    userName: 'Wilson',
    showLoading: true,
  },
};

/**
 * Logged-in user whose Perplexity account is already activated
 */
export const AlreadyActivated: Story = {
  args: {
    scenario: 'already-activated',
    userName: 'Wilson',
    showLoading: true,
  },
};

/**
 * Logged-in user who doesn't have an eligible subscription
 */
export const NonEnrolled: Story = {
  args: {
    scenario: 'non-enrolled',
    userName: 'Wilson',
    showLoading: true,
  },
};

/**
 * After activation attempt - account was already activated
 */
export const ActivationAlreadyActivated: Story = {
  args: {
    scenario: 'activation-already-activated',
    showLoading: false,
  },
};

/**
 * Before redirecting user to Perplexity for activation
 */
export const BeforeProceedToPerplexity: Story = {
  args: {
    scenario: 'before-proceed',
    showLoading: true,
  },
};

/**
 * Error state when activation fails
 */
export const ActivationFail: Story = {
  args: {
    scenario: 'activation-fail',
    userName: 'Wilson',
    showLoading: true,
  },
};
