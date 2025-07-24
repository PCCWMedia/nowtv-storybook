import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';


const meta = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
      // layout: 'centered', // Optional parameter to center the component in the Canvas
    },
    tags: ['autodocs'],
    argTypes: {
      status: { control: 'select', options: ['normal', 'copyrightOnly'] }, // Adjusting argTypes for status
    },
  } satisfies Meta<typeof Footer>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Normal: Story = {
    args: {
      status: 'normal',
    },
  };
  
  export const CopyrightOnly: Story = {
    args: {
      status: 'copyrightOnly',
    },
  };
  