import React from 'react';
import Template4 from './Template-4';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Template4> = {
  title: 'pages/Support/Template-4',
  component: Template4,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Template4>;

const tabsData = [
  {
    label: 'ATM',
    cardData: [
      { 
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2024/11/UX3A_TVInterfaces-2-updated_e2-2.png',
        label: 'Go to Now TV website and login.',
        description: 'Navigate to your account preferences to start the process.'
      },
      { 
        imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/TVInterfaces-u3-e-2-updated_e.png',
        label: 'Step 2: Select Bill Media',
        description: 'Choose the bill media option you want to update.' 
      },
    ]
  },
  {
    label: 'Credit Card',
    content: <>
      <h2 className='text-center'>Credit Card</h2>
      <p className='text-center'>Click here to change your credit card information</p>
      <p className='text-center'>OR</p>
      <p className='text-center'>Call Now TV Customer Service Hotline 1833 888 for registration</p>
      <br></br>
      <small>Notes<br></br>This bill is in respect of fees for services provided by PCCW Limited and/or one or more of its subsidiaries (including companies within the HKT Group), including but not limited to Hong Kong Telecommunications (HKT) Limited, PCCW Global Limited, CSL Mobile Limited, Now TV Limited, PCCW OTT (Hong Kong) Limited, Moov (Hong Kong) Limited, HKT Services Limited and Netcare Limited. All enquiries or disputes concerning any bill must be made to the relevant service provider within 30 days from the relevant bill issue date. Otherwise, the bill will be deemed to be in order and accepted by the customer. Any tariff variation that comes into effect during this invoice period will be reflected in the next bill. To avoid service suspension or termination and the service reconnection fee of HK$100, please pay before the payment due date. This page is best viewed with browsers of Microsoft Internet Explorer 8 or above. It may take up to 5 working days for your balance to be updated.</small>
      </>,
  },
  {
    label: 'In Person',
    content: <>
      <h2 className='text-center'>In Person</h2>
      <p className='text-center'>1) Please pay your bill by Octopus, EPS or Visa / Master Credit Card via Payment Kiosk in csl. shops.</p>
      <p className='text-center'>2) Please bring along the bill to 7-Eleven for cash payment – applicable to Now TV bills and Web bills with bar code.</p>
    </>,
  }
  
];



export const Default: Story = {
  args: {
    title: 'Bills Settings',
    subTitle: 'You can make a payment by credit card, in person, via Automated Teller Machine, PPS, Autopay or by mailing check.',
    tabsData,
  },
};


export const TwoTabs: Story = {
  args: {
    title: 'Bills Settings',
    subTitle: 'Two payment methods available.',
    tabsData: [tabsData[0], tabsData[1]],
  },
};