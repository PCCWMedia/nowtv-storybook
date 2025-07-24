// src/components/ChatOptions.tsx
import type { FC } from 'react';
import ChatOptionItem from './ChatItem';
import './ChatsWrapper.scss';

interface ChatOption {
  id: string;
  href: string;
  iconSrc: string;
  alt: string;
  text: string;
  target?: '_blank' | '_self';
}

const defaultChatOptions: ChatOption[] = [
  {
    id: 'phone',
    href: 'tel:1833888',
    iconSrc: '/src/stories/assets/img/icon/icon-chat-phone.svg',
    alt: 'phone',
    text: '1833888',
  },
  {
    id: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=85260551888',
    iconSrc: '/src/stories/assets/img/icon/icon-chat-whatsapp.svg',
    alt: 'whatsapp',
    text: 'WhatsApp',
    target: '_blank',
  },
  {
    id: 'email',
    href: 'mailto:cs@nowtv.now.com',
    iconSrc: '/src/stories/assets/img/icon/icon-chat-message.svg',
    alt: 'message',
    text: 'Email',
    target: '_blank',
  },
];

interface ChatOptionsProps {
  optionIds?: string[]; // 可選 prop，指定要顯示嘅選項 ID
}

const ChatOptions: FC<ChatOptionsProps> = ({ optionIds }) => {
  // 如果有 optionIds，篩選對應選項；否則用所有預設選項
  const options: ChatOption[] = optionIds
    ? defaultChatOptions.filter((option) => optionIds.includes(option.id))
    : defaultChatOptions;



  return (
    <div className='chats-wrapper'>
      {options.map((option) => (
        <ChatOptionItem
          key={option.id}
          href={option.href}
          iconSrc={option.iconSrc}
          alt={option.alt}
          text={option.text}
          target={option.target}
        />
      ))}
    </div>
  );
};

export default ChatOptions;