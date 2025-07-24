import React, { useState } from 'react';
import '../Support.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Support/Breadcrumb/Breadcrumb';
import TextImgRow, { type TextImgRowItem } from '../../../components/Support/TextImgRow/TextImgRow';

import rebotImg from '../../../assets/img/Support/support-root-01.png';

import SelectBox from '../../../components/Form/SelectBox/SelectBox';
import Link from '../../../components/Link/Link';

interface Template9Props {
  title?: string;
}

const breadcrumbItems = [
  { label: 'Support - Home', href: '#' },
  { label: 'Set Top Box & Remote Control', href: '#' },
  { label: 'Set Top Box', href: '#' },
  { label: 'Now H1', href: '#' },
  { label: 'Reboot & Error codes', href: '#' },
];

const items: TextImgRowItem[] = [
  {
    content: (
      <>
        <h4>How to reboot</h4>
        <p>Reboot by pressing the power button located at the back of your set top.</p>
      </>
    ),
    image: { src: rebotImg, border: true }
  },
];

const errorOptions = [
  { value: 'activation', label: 'Now TV Offline - Activation Problem' },
  { value: 'modem', label: 'Now TV Offline - Modem & Connections Problem' },
  { value: 'wifi', label: 'Wi-Fi Problem' },
];

const errorContents: Record<string, React.ReactNode> = {
  activation: (
    <>
    <div className='sm-wrapper'>
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/in-line-message-box_En-1.png" alt="" />
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_Activate_e.png" alt="" />
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_MoreHelp_c-1.png" alt="" />
        <p>Please ensure your Now TV subscription is active, then enter the correct activation code<br></br>(The first 4 digits of Registered customer’s HKID/ Passport number). Press “Activate” or “Retry Activation” to try again.</p>
        <br></br>
        <p>If the problem persists, please contact our Customer Service hotline at 1833 888.</p>
    </div>
      
    </>
  ),
  modem: (
    <>
      <div className='sm-wrapper'>
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/in-line-message-box_En.png" alt="" />
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_Offline_e.png" alt="" />
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_NeedHelp_e.png" alt="" />
        <h6>Step 1</h6>
        <p>Reconnect the broadband cable</p>
        <h6>Step 2</h6>
        <p>Re-plug the modem power and wait till the lights turn on</p>
        <h6>Step 3</h6>
        <p>Restart the TV Box</p>
        <br></br><br></br>
        <small>*Please ensure the modem is supplied by HKT. Modem and internet service from other providers do not support Now TV.</small>
        <br></br><br></br><br></br>
        <p>If problem persists, please contact our Customer Service Hotline at 1833 888.</p>
    </div>
    </>
  ),
  wifi: (
    <>
      <div className='sm-wrapper'>
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_Notifications_marker_e-2.png" alt="" />
        <img src="https://www.nowtv.now.com/wp-content/uploads/2022/04/UX3A_Wi-Fi_Notifications_detail_e.png" alt="" />
        <h6>Step 1</h6>
        <p>Go to “Home” - “Settings” - “Android TV Box Settings” - “Network & Internet”</p>
        <h6>Step 2</h6>
        <p>Select a Wi-Fi network and key in your password</p>
        <p>If the problem persists, please check with your network provider.</p>
        <br></br>
        <Link href="https://www.nowtv.now.com/wp-content/uploads/2025/07/H1_Wifi-Set-Up-EN_20250620.mp4" target='_blank' label="Watch Tutorial Video" className="btn primary" />
    </div>
    </>
  ),
};

const Template9: React.FC<Template9Props> = ({ title = 'Reboot Your Box' }) => {
  const [selectedError, setSelectedError] = useState<string | undefined>(undefined);
  const selectedContent = selectedError ? errorContents[selectedError] : undefined;

  return (
    <div className="support-pages">
      <Header status="normal" />
      <Breadcrumb items={breadcrumbItems} />
      <div className="container">
        <div className="heading">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="content-wrapper">
        <div className='container'>
          <TextImgRow items={items} />
          <hr />
          <div className='selection-wrapper'>
            <h3 className='text-center'>Select an Error Code</h3>

            <div className='select-dropdown-menu'>
                <SelectBox
                    options={errorOptions}
                    placeholder="Select an Error Code"
                    onChange={setSelectedError}
                />
            </div>

            {selectedContent && (
              <div className='selected-content-wrapper'>
                {selectedContent}
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default Template9;