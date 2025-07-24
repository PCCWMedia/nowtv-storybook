import React from 'react';
import Link from '../../../components/Link/Link';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

const CommunicationSection: React.FC = () => (
  <SectionAccordion
    title="Communication Preferences"
    titleExtra={<p>Select language for communications.</p>}
  >
    <div className="item">
      <h6>Language</h6>
      <div className="information">
        <div className="data">
          <b>中文</b>
        </div>
      </div>
    </div>
    <div className="other-links">
      <Link href="#" label="Edit Communication Preferences" className="arrow" />
    </div>
  </SectionAccordion>
);

export default CommunicationSection; 