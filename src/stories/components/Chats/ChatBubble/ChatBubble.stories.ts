import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ChatBubble } from './ChatBubble';
import chatMessageIcon from '../../../assets/img/icon/icon-chat-message.svg';
import whatsappIcon from '../../../assets/img/icon/icon-chat-whatsapp.svg';

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
    options: { 
      control: 'object',
      description: 'Array of chat options to display'
    },
    onClose: { 
      action: 'close clicked',
      description: 'Callback when close button is clicked'
    },
  },
  args: {
    isVisible: true,
    options: [
      { 
        label: 'Live Chat</b>', 
        link: 'https://shop.theclub.com.hk/live-chat?___store=en_US',
        icon: chatMessageIcon,
        onClick: fn()
      },
      { 
        label: 'Online Sales Team', 
        link: 'https://wa.me/1234567890',
        icon: whatsappIcon,
        onClick: fn()
      },
      { 
        label: 'Customer Service', 
        link: 'https://wa.me/0987654321',
        icon: whatsappIcon,
        onClick: fn()
      },
    ],
    onClose: fn(),
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default chat bubble
export const Default: Story = {
  args: {},
};
