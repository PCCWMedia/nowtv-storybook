import type { Meta, StoryObj } from '@storybook/react-vite';
import AlertBar from './AlertBar';

const meta = {
    title: 'Components/AlertBar',
    component: AlertBar,
    parameters: {
    //   layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      className: { control: 'text' },
      alertHeading: { control: 'text' },
      alertMsg: { control: 'text' },
    },
} satisfies Meta<typeof AlertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      href: '#',
      btnLabel: 'CTA',
      className: '',
      alertHeading: 'This is alert heading',
      alertMsg: 'This is message.',
      showCTA: true,
    },
};


export const WithoutCTA: Story = {
    args: {
      href: '#',
      btnLabel: 'CTA',
      className: '',
      alertHeading: 'This is alert heading',
      alertMsg: 'This is message.',
      showCTA: false,
    },
};




