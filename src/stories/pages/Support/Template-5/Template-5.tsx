import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import FAQToggle from '../../../components/Support/FAQToggle/FAQToggle';
import type { FAQItem } from '../../../components/Support/FAQToggle/FAQToggle';

const breadcrumbItems = [
    { label: 'Support - Home', href: '#' },
    { label: 'Now TV', href: '#' },
    { label: 'FAQ', href: '#' },
  ];

const title = 'Frequently Asked Questions';
const subTitle = 'Find answers to common questions below.';

const faqs: FAQItem[] = [
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

const Template5: React.FC = () => {
  return (
    <div className="support-pages">
      <Header status="normal" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="container">
        <div className="heading">
          <h2>{title}</h2>
          <h6>{subTitle}</h6>
        </div>
      </div>
      <div className="content-wrapper">
        <div className='container'>
          <FAQToggle faqs={faqs} showTitle={false}/>
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default Template5;