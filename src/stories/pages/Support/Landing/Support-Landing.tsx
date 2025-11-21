import React from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { CookiesBar } from '../../../components/CookiesBar/CookiesBar';
import InputBox from '../../../components/Form/InputBox/InputBox';
import Link from '../../../components/Link/Link';
import BorderCard from '../../../components/Card/BorderCard/BorderCard';
import FAQLinkColumn from '../../../components/Support/FAQLinkColumn/FAQLinkColumn';

const SupportLanding: React.FC = () => {
  const selectTopicData = [
    { href: '?path=/story/pages-support-template-3--default', label: 'My Account', className: 'borderLink' },
    { href: '?path=/story/pages-support-template-2--default', label: 'TV Interfaces', className: 'borderLink' },
    { href: '?path=/story/pages-support-template-1--default', label: 'Set Top Box & Remote Control', className: 'borderLink' },
    { href: '?path=/story/pages-support-template-4--default', label: 'Now Player', className: 'borderLink' },
    { href: '?path=/story/pages-support-template-5--default', label: 'Subscriptions', className: 'borderLink' },
    
  ];

  const commonSolutionsData = [
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/nowtv-app-e.png',
      label: 'How to Watch on Desktop & Mobile Devices',
      linkHref: '?path=/story/pages-support-template-6--default',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/web_group_devices02-2.png',
      label: 'Set Top Box & Viewing Errors',
      linkHref: '?path=/story/pages-support-template-7--default',
    },
    {
      imageSrc: 'https://www.nowtv.now.com/wp-content/uploads/2019/09/UX3A_remote-ux3-1-2.png',
      label: 'Remote Control',
      linkHref: '?path=/story/pages-support-template-8--default',
    },
    {
      label: 'Change your service PIN',
      description: 'Create and connect your Now ID with your Now TV set top box.',
      linkLabel: 'See Details',
      linkHref: '?path=/story/pages-support-template-9--default',
    },
    {
      label: 'How to Redeem Code',
      description: 'Browse here if you need assistance on Now TV code redemption.',
      linkLabel: 'See Details',
      linkHref: '#',
    },
    {
      label: 'Service PIN / Parental Lock',
      description: "The Service PIN is a preset 4-digit code used for TV channel and other service subscription on your set top box, as well as the Parental Lock. Parental Control has been designed to provide control over children's use of Now TV.",
      linkLabel: 'See Details',
      linkHref: '#',
    },
  ];

  const faqData = [
    {
      title: 'My Account',
      links: [
        { href: '#', label: 'Register Now ID and login our apps' },
        { href: '#', label: 'Check my subscriptions and billing' },
        { href: '#', label: 'Change language of my Now TV bill' },
        { href: '#', label: 'See more articles', className: 'arrow' },
      ],
    },
    {
      title: 'TV Interface',
      links: [
        { href: '#', label: 'How to pair up your remote control with your TV' },
        { href: '#', label: 'TV recording failure' },
        { href: '#', label: '4K quality viewing' },
        { href: '#', label: 'See more articles', className: 'arrow' },
      ],
    },
    {
      title: 'Set Top Box & Remote Control',
      links: [
        { href: '#', label: 'Installation & activation' },
        { href: '#', label: 'Reboots and error codes' },
        { href: '#', label: '4K Video, HDMI & HDCP' },
        { href: '#', label: 'See more articles', className: 'arrow' },
      ],
    },
    {
      title: 'Now Player',
      links: [
        { href: '#', label: 'How to watch Now TV program on desktop & mobile' },
        { href: '#', label: 'Programs available on Now Player' },
        { href: '#', label: 'Device compatibility' },
        { href: '#', label: 'See more articles', className: 'arrow' },
      ],
    },
    {
      title: 'Subscriptions',
      links: [
        { href: '#', label: 'Calculation of commitment period' },
        { href: '#', label: 'Multiple Now TV subscriptions in one address' },
        { href: '#', label: 'Payment method' },
        { href: '#', label: 'See more articles', className: 'arrow' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { href: '#', label: 'All video tutorials' },
        { href: '#', label: 'Program classifications' },
        { href: '#', label: 'Things to know before you buy' },
      ],
    },
  ];

  return (
    <div className='support-landing-page'>
      <Header status="normal" />
      <div className='subPages'>
        <div className='heading'>
          <h2>How Can We Help?</h2>
          <InputBox
            name="support-search"
            label=""
            placeholder="Search..."
            autoComplete="off"
            submitButton={true}
            submitButtonText="Search"
            submitButtonIcon={true}
            submitButtonIconClass="icon-search-icon"
          />
        </div>
        <section className='select-a-Topic'>
          <div className='container'>
            <h4>Select a Topic</h4>
            <div className='option-wrapper'>
                {selectTopicData.map((topic, index) => (
                  <Link 
                    key={index}
                    href={topic.href} 
                    label={topic.label} 
                    className={topic.className} 
                  />
                ))}
            </div>
          </div>
        </section>

        <section className='common-solutions'>
            <div className='container'>
                <h4>Common Solutions</h4>
                <div className='option-wrapper'>
                    {commonSolutionsData.map((solution, index) => (
                      <BorderCard
                        key={index}
                        imageSrc={solution.imageSrc}
                        label={solution.label}
                        description={solution.description}
                        linkLabel={solution.linkLabel}
                        linkHref={solution.linkHref}
                      />
                    ))}
                </div>
            </div>
        </section>

        <section className='frequently-read-articles'>
            <div className='container'>
                <h4>Frequently Read Articles</h4>
                <div className='link-wrapper'>
                    {faqData.map((column, index) => (
                      <FAQLinkColumn 
                        key={index}
                        title={column.title}
                        links={column.links}
                      />
                    ))}
                </div>
            </div>
        </section>

      </div>
      <Footer status="normal" />
      <CookiesBar isVisible={true} />
    </div>
  );
};

export default SupportLanding;
