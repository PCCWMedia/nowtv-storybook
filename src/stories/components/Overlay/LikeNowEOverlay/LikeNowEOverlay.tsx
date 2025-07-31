import React, { useEffect, useState } from "react";
import { Button } from "../../Button/Button";
import Link from '../../Link/Link';
import noweLogo from "../../../assets/img/get-started/nowe_logo.svg";
import noweToTV from "../../../assets/img/get-started/e-tv-arrow.svg";
import nowtvLogo from "../../../assets/img/nowtv-logo.svg";

import nowtvChecked from "../../../assets/img/get-started/nowtv-checked.svg";
import nowEChecked from "../../../assets/img/get-started/nowe-checked.svg";
import minusIcon from "../../../assets/img/get-started/icon-minus.svg";



import './LikeNowEOverlay.scss';

export interface LikeNowEOverlayProps {
  onClose: () => void;
  onContinue?: () => void;
}

const LikeNowEOverlay: React.FC<LikeNowEOverlayProps> = ({ onClose, onContinue }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  return (
    <div className={`modal-wrapper${isVisible ? ' show' : ''}`} onClick={onClose}>
      <div className="modal-dialog">
        <div className="modal-content-wrapper md">
          <div className="close-modal">
            <Button className="close-btn" label="Close" onClick={onClose} />
          </div>

          <div className="likenowe-wrapper" onClick={e => e.stopPropagation()}>
            <h4>
              Just like Now E, yet better.
            </h4>
            <p>
              We've made Now TV go "OTT" with the same flexible plans Now E users have been enjoying. Watch anywhere with or without a box. The choice is yours.
            </p>
            <div className="e-to-TV">
              <div className="nowe-logo">
                <img src={noweLogo} alt="Now E Logo"/>
              </div>
              <div className="arrow">
                <img src={noweToTV} alt="" />
              </div>
              <div className="nowtv-logo">
                <img src={nowtvLogo} alt="Now TV Logo"/>
              </div>
            </div>
            <div className="comparison-table-wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>No contract,<br /> no commitment period</td>
                    <td><img src={nowEChecked} alt="" /></td>
                    <td><img src={nowtvChecked} alt="" /></td>
                  </tr>
                  <tr>
                    <td>Instant access and easy one-off passes</td>
                    <td><img src={nowEChecked} alt="" /></td>
                    <td><img src={nowtvChecked} alt="" /></td>
                  </tr>
                  <tr>
                    <td>Better apps with more features</td>
                    <td><img src={minusIcon} alt="" /></td>
                    <td>
                        <img src={nowtvChecked} alt="" />
                      <ul>
                        <li>On more smart TVs</li>
                        <li>Richer contents</li>
                        <li>Multi user profiles</li>
                        <li>Easy channel browsing</li>
                        <li>and more</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>IPTV Set Top Box</td>
                    <td><img src={minusIcon} alt="" /></td>
                    <td>
                        <img src={nowtvChecked} alt="" />
                      <div>
                        <h6>Optional upgrade</h6>
                        <a href="/get-started-box/" className="link arrow">
                          See Box Plans
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="continue">
              <Link
                href="#"
                label="Continue to See Options"
                className="link arrow"
                onClick={e => {
                  e.preventDefault();
                  onClose();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeNowEOverlay;
