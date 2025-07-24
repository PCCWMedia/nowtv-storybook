import React from 'react';
import Link from '../../../components/Link/Link';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

const AccountDeletionSection: React.FC = () => (
  <SectionAccordion title="Account Deletion">
    <div className="single-link">
        <Link href="#" label="Delete Now ID" className="arrow warning" />
      </div>
  </SectionAccordion>
);

export default AccountDeletionSection; 