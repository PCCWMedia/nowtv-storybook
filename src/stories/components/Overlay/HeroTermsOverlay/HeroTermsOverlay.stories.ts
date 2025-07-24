import type { Meta, StoryObj } from '@storybook/react';
import { HeroTermsOverlay } from './HeroTermsOverlay';

const meta: Meta<typeof HeroTermsOverlay> = {
  title: 'Components/Overlay/HeroTermsOverlay',
  component: HeroTermsOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroTermsOverlay>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Close clicked'),
    terms: [
      '<sup>*</sup>Now TV will broadcast all Premier League matches in Hong Kong exclusively on pay TV for the seasons of 2024/25 to 2027/28.',
      '<sup>#</sup>The live broadcast period will be based on the Ocean Park’s opening hours of the animal habitat. Please note that the timetable may be adjusted based on actual venue conditions. Live broadcast content may be delayed compared to the actual situation. The live streaming service is only available for use within Hong Kong.​',
      'All program content and matches are subject to cancellation and/or suspension by the rights holders and/or event organizers.',
      'Dates and times of all aforementioned matches and sporting events may be subject to change from time to time, so please refer to official announcements by the rights holders and event organizers for the latest information.'
    ],
  },
};