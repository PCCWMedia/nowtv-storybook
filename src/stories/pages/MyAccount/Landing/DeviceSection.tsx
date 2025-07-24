import React from 'react';
import Link from '../../../components/Link/Link';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

const DeviceSection: React.FC = () => (
  <SectionAccordion title="Manage Devices">
    <div className="single-link">
        <Link href="#" label="See Details" className="arrow" />
      </div>
  </SectionAccordion>
);

export default DeviceSection; 