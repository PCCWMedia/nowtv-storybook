import type { Meta, StoryObj } from '@storybook/react';
import Template7 from './Template-7';
import type { FAQItem } from '../../../components/Support/FAQToggle/FAQToggle';

const meta: Meta<typeof Template7> = {
  title: 'Pages/Support/Template-7',
  component: Template7,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A support page template for Now TV App Features, displaying FAQs in an accordion style.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Main heading title' },
    subTitle: { control: 'text', description: 'Subtitle/description' },
    faqs: { control: 'object', description: 'Array of FAQ items' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultFaqs: FAQItem[] = [
  {
    question: 'What is NowTV?',
    answer:
      "<p>NowTV is a streaming service offering a wide range of movies, TV shows, and live channels.</p>",
  },
  {
    question: 'How do I subscribe?',
    answer:
      `<p>You can subscribe by visiting our website and choosing a plan that suits you best.</p>
      <ul>
      <li>Go to the <a href='#'>subscription page</a></li>
      <li>Select your plan</li>
      <li>Follow the instructions</li>
      </ul>`,
  },
  {
    question: 'How can I contact support?',
    answer:
      "<p>You can contact our support team via the Contact Us page or by calling our hotline.</p>",
  },
];

export const Default: Story = {
  args: {
    title: 'Now TV App Features',
    subTitle: '',
    faqs: defaultFaqs,
  },
}; 