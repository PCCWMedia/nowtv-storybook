import React from 'react';
import InfoItem from '../../../components/MyAccount/InfoItem';
import Link from '../../../components/Link/Link';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

const AccountSubscriptionsSection: React.FC = () => (
  <SectionAccordion title="Account & Subscriptions">
    <InfoItem
      label="Account Number"
      value={<b>A123569092</b>}
      controls={<Link href="#" label="Connect to Different Account / Set Top Box" target="_blank" className="arrow" />}
    />
    <InfoItem
      label="Name"
      value={<b>Chan Tai Man</b>}
    />
    <InfoItem
      label="Installation Address"
      value={<b>14/F Telecom Hse (14/F), 3 Gloucester Road, Wan Chai Hong Kong</b>}
    />
    <div className="other-links">
      <Link href="#" label="See Subscriptions Details and Renewal Dates" className="arrow" />
    </div>
  </SectionAccordion>
);

export default AccountSubscriptionsSection; 