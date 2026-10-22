import type { Meta, StoryObj } from '@storybook/react-vite';
import SubscribedDetails from './SubscribedDetails';

const meta: Meta<typeof SubscribedDetails> = {
    title: 'Pages/MyAccount/SubscribedDetails',
    component: SubscribedDetails,
    parameters: {
        layout: 'fullscreen',
        options: {
            bottomPanelHeight: 0,
        },
    },
};

export default meta;
type Story = StoryObj<typeof SubscribedDetails>;

export const Default: Story = {};