import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import FAQToggle from '../../../components/Support/FAQToggle/FAQToggle';
import type { FAQItem } from '../../../components/Support/FAQToggle/FAQToggle';
import Link from '../../../components/Link/Link';
import TextImgRow, { type TextImgRowItem } from '../../../components/Support/TextImgRow/TextImgRow';

interface Template7Props {
  title?: string;
  subTitle?: string;
  faqs?: FAQItem[];
}

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

const breadcrumbItems = [
  { label: 'Support - Home', href: '#' },
  { label: 'Now TV', href: '#' },
  { label: 'App Features', href: '#' },
];

const items: TextImgRowItem[] = [
  {
    content: (
      <>
        <h4>Home Page</h4>
        <h6>Add All Your Favorites</h6>
        <p>Browse featured content, your favourite channels and receive personalized recommendations synced across TV.</p>
        <br/>
        <h6>Add All Your Favorites</h6>
        <p>Many TV programs added to the Watchlist will be automatically saved for you to watch later. You’ll see them marked '+ Save' in program details.</p>
        <a href="#" className="arrow">Learn More</a>
      </>
    ),
    image: { src: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/userguide_1-3-1.png' }
  },
  {
    content: (
      <>
        <h4>My Now</h4>
        <p>My Now is your personal video library. See your Watchlist, get recommendations, view your history, saved items, scheduled recordings and manage your downloads all in one place.</p>
        <Link href="#" label="Learn More" className="arrow" />
      </>
    ),
    image: { src: 'https://www.nowtv.now.com/wp-content/uploads/2025/07/userguide_2-2_e.png' }
  },
  {
    content: (
      <>
        <h4>On Demand</h4>
        <p>Enjoy the newly designed On Demand catalogs to discover more new content on Now TV.</p>
        <Link href="#" label="Learn More" className="arrow" />
      </>
    ),
    image: { src: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/userguide_3-3-1_e20250613.png' }
  }
];

const Template7: React.FC<Template7Props> = ({
  title = 'Now TV App Features',
  subTitle = '',
  faqs = defaultFaqs,
}) => {
  return (
    <div className="support-pages">
      <Header status="normal" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="container">
        <div className="heading">
          <h2>{title}</h2>
          {subTitle && <h6>{subTitle}</h6>}
        </div>
      </div>
      <div className="content-wrapper">
        <div className='container'>
            <TextImgRow items={items} />

            <FAQToggle faqs={faqs} />
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default Template7;