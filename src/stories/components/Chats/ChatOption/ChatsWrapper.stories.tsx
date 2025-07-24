// src/components/ChatOptions.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import ChatOptions from './ChatsWrapper';

const meta: Meta<typeof ChatOptions> = {
  title: 'Components/Chats/ChatOption/ChatsWrapper',
  component: ChatOptions,
  parameters: {
    docs: {
      description: {
        component: 'A container for chat options, composed of ChatOptionItem components. Use `optionIds` to filter displayed options.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChatOptions>;

export const Default: Story = {
  args: {
    optionIds: undefined, // 顯示所有選項（電話、WhatsApp、Email）
  },
};

export const PhoneWhatsapp: Story = {
  args: {
    optionIds: ['phone', 'whatsapp'], // 只顯示電話同 WhatsApp
  },
};
