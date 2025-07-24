// src/components/ChatOptionItem.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import ChatOptionItem from './ChatItem';

const meta: Meta<typeof ChatOptionItem> = {
  title: 'Components/Chats/ChatOption/ChatItem',
  component: ChatOptionItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    href: '#',
    iconSrc: 'https://via.placeholder.com/32',
    alt: 'placeholder',
    text: 'Option',
  },
};

export default meta;

type Story = StoryObj<typeof ChatOptionItem>;

export const Phone: Story = {
  args: {
    href: 'tel:1833888',
    iconSrc: 'src/stories/assets/img/icon/icon-chat-phone.svg',
    alt: 'phone',
    text: '1833888',
  },
};

export const Whatsapp: Story = {
  args: {
    href: 'https://api.whatsapp.com/send?phone=85260551888',
    iconSrc: 'src/stories/assets/img/icon/icon-chat-whatsapp.svg',
    alt: 'whatsapp',
    text: 'WhatsApp',
    target: '_blank',
  },
};

export const Message: Story = {
  args: {
    href: '#',
    iconSrc: 'src/stories/assets/img/icon/icon-chat-message.svg',
    alt: 'message',
    text: 'LiveChat',
    target: '_blank',
  },
};