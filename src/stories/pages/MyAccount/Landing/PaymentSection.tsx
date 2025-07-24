import React from 'react';
import InfoItem from '../../../components/MyAccount/InfoItem';
import Link from '../../../components/Link/Link';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

const PaymentSection: React.FC = () => (
  <SectionAccordion title="Payment Methods & Billings">
    <InfoItem
      label="Payment Method"
      value={<b>Visa: 1234 56XX XXXX 1234</b>}
      controls={<Link href="#" label="Change" className="arrow" />}
    />
    <InfoItem
      label="Payment History"
      value={<Link href="#" label="See Details" className="arrow" />}
    />
    <InfoItem
      label="Bill Media"
      value={<b>Email Bill</b>}
      controls={<Link href="#" label="Change" className="arrow" />}
    />
    <InfoItem
      label="Latest Bills"
      value={
        <div className="billdate">
          <Link href="#" label="18 Mar 2024" target="_blank" />
          <Link href="#" label="18 Feb 2024" target="_blank" />
          <Link href="#" label="18 Jan 2024" target="_blank" />
        </div>
      }
    />
    <InfoItem
      label="Current Outstanding Balance"
      value={<b>$0.00</b>}
    />
    <div className="other-links">
      <Link href="#" label="Your Bill Explained" className="arrow" />
    </div>
  </SectionAccordion>
);

export default PaymentSection; 