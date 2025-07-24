import type { Meta, StoryObj } from '@storybook/react';
import MobileSideNav from './MobileSideNav';


const meta = {
    title: 'Components/MobileSideNav',
    component: MobileSideNav,
    parameters: {
      layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
      status: { control: 'select', options: ['normal', 'subscription', 'logged-in'] },
      tabActive: { control: 'boolean' },
    },
  } satisfies Meta<typeof MobileSideNav>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Normal: Story = {
    args: {
      status: 'normal',
      tabActive: false,
    },
  };
  
  export const LoggedIn: Story = {
    args: {
      status: 'logged-in',
      username: 'Now TV',
      tabActive: false,
    },
  };