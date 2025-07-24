import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ChatBubble } from './ChatBubble';

const meta = {
  title: 'Components/Chats/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: { 
      control: 'boolean',
      description: 'Whether the chat bubble is visible'
    },
    className: { 
      control: 'text',
      description: 'Custom class name for styling'
    },
    onlineSalesLink: { 
      control: 'text',
      description: 'Online sales team WhatsApp link'
    },
    customerServiceLink: { 
      control: 'text',
      description: 'Customer service WhatsApp link'
    },
    onOnlineSalesClick: { 
      action: 'online sales clicked',
      description: 'Callback when online sales is clicked'
    },
    onCustomerServiceClick: { 
      action: 'customer service clicked',
      description: 'Callback when customer service is clicked'
    },
    onClose: { 
      action: 'close clicked',
      description: 'Callback when close button is clicked'
    },
  },
  args: {
    isVisible: true,
    onlineSalesLink: 'https://wa.me/1234567890',
    customerServiceLink: 'https://wa.me/0987654321',
    onOnlineSalesClick: fn(),
    onCustomerServiceClick: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default chat bubble
export const Default: Story = {
  args: {},
};

// Chat bubble with custom links
export const WithCustomLinks: Story = {
  args: {
    onlineSalesLink: 'https://wa.me/1234567890?text=Hi%20I%20need%20help%20with%20sales',
    customerServiceLink: 'https://wa.me/0987654321?text=Hi%20I%20need%20customer%20support',
  },
};
