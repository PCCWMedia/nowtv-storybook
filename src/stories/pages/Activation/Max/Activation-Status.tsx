import React, { useState, useEffect } from 'react';
import '../Activation.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Link from '../../../components/Link/Link';
import iconWhatsapp from '../../../assets/img/icon/icon-chat-whatsapp.svg';
import iconPhone from '../../../assets/img/icon/icon-chat-phone.svg';
import iconCart from '../../../assets/img/icon/icon-cart.svg';
import iconBox from '../../../assets/img/icon/icon-box.svg';
import iconNowId from '../../../assets/img/icon/icon-nowid.svg';
import maxLogo from '../../../assets/img/activationPages/max-logo.png';
import maxPreviewImg from '../../../assets/img/activationPages/hbomax-preview.png';

export interface ActivationStatusProps {
  /** The activation scenario to display */
  scenario: 'landing' | 'before-proceed' | 'already-activated' | 'non-subscription' | 'activation-error';
  /** User name for logged in scenarios */
  userName?: string;
  /** Now ID for non-subscription scenario */
  nowId?: string;
  /** Show loading state */
  showLoading?: boolean;
  /** Callback for button clicks */
  onButtonClick?: () => void;
}

const ActivationStatus: React.FC<ActivationStatusProps> = ({
  scenario,
  userName = 'Wilson',
  nowId = '59427912',
  showLoading = true,
  onButtonClick,
}) => {
  const [isLoading, setIsLoading] = useState(showLoading);

  useEffect(() => {
    if (showLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showLoading]);

  const renderContent = () => {
    switch (scenario) {
      case 'landing':
        return (
          <>
            <img src={maxLogo} alt="" className="logo" />

            <div className="message">
              <h2>Activate Max Account</h2>
              <h3>Besides watching Max shows on Now TV, you can also watch in the Max app by activating your Max account.</h3>
            </div>

            <div className="cta-buttons">
              <p>Login Now ID first and then activate your Max account</p>
              <Link 
                href="https://id.now.com/nowidform/login.form?lang=en" 
                label="Activate Max account" 
                className="btn primary"
                onClick={onButtonClick}
              />
            </div>

            <div className="preview-img">
              <img src={maxPreviewImg} alt="" />
            </div>
          </>
        );

      case 'before-proceed':
        return (
          <>
            <img src={maxLogo} alt="" className="logo" />
            
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Your Max account has not been activated yet. Please click the button below to proceed with the activation on the Max website.</p>
              </div>
              
              <div className="cta-buttons">
                <Link 
                  href="#" 
                  label="Activate Max account" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={maxPreviewImg} alt="" />
              </div>
            </div>

            {isLoading && (
              <div className="loading-wrapper show">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </>
        );

      case 'already-activated':
        return (
          <>
            <img src={maxLogo} alt="" className="logo" />
            
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Your Max account has already been activated.</p>
              </div>
              
              <div className="cta-buttons">
                <Link 
                  href="#" 
                  label="Back To Home" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={maxPreviewImg} alt="" />
              </div>
            </div>

            {isLoading && (
              <div className="loading-wrapper show">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </>
        );

      case 'non-subscription':
        return (
          <>
            <div className="activationPage-wrapper">
              <div className="heading">
                <h2>Subscription Not Found</h2>
              </div>
            </div>

            <div className="data-box">
              <div className="container">
                <h4>Logged in with Now ID:</h4>
                <b>{nowId}</b>
              </div>
            </div>

            <div className="no-subscription-wrapper">
              <div className="container">
                <p>We can't find your HBO Max subscription on this account. Please choose one of the options below to fix this:</p>
                <div className="fix-options">
                  <div className="item">
                    <h5><img src={iconBox} alt="" /> Have a Now TV Box?</h5>
                    <Link 
                      href="https://tvbinding.now.com/verifynowidpa/en/index.jsp" 
                      label="Link Now ID to your Now TV box" 
                      className="btn outline"
                      onClick={onButtonClick}
                    />
                  </div>
                  <div className="item">
                    <h5><img src={iconNowId} alt="" /> Customer without a Now TV Set-Top Box</h5>
                    <Link 
                      href="https://id.now.com/nowidform/login.form" 
                      label="Log in with another Now ID" 
                      className="btn outline"
                      onClick={onButtonClick}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-contact-wrapper">
              <div className="container">
                <hr />
                <h3>Need Help?</h3>
                <h5>Contact us for more information</h5>

                <div className="contact-items-wrapper">
                  <div className="item">
                    <a href="https://www.nowtv.now.com/get-started/?libid=L00101">
                      <div className="img-wrap"><img src={iconCart} alt="" className="cart" /></div>
                      <h5>Subscribe Online</h5>
                    </a>
                  </div>

                  <div className="item">
                    <a href="https://api.whatsapp.com/send?phone=85296133533">
                      <div className="img-wrap"><img src={iconWhatsapp} alt="" className="whatsapp" /></div>
                      <h5>WhatsApp Enquiry</h5>
                    </a>
                  </div>

                  <div className="item">
                    <a href="tel:1833888">
                      <div className="img-wrap"><img src={iconPhone} alt="" className="phone" /></div>
                      <h5>Call 2888 0008<br />Dial 2</h5>
                    </a>
                  </div>
                </div>

                <div className="notes">
                  <p>Now E user ?<br /><a href="#">Learn more here</a> about your HBO Max account activation.</p>
                </div>

                <img src="../../../assets/img/activationPages/hbomax-preview.png" alt="" className="preview-img" />
              </div>
            </div>
          </>
        );

      case 'activation-error':
        return (
          <>
            <img src={maxLogo} alt="" className="logo" />
            
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Apologies, seems there is an error. We are unable to retrieve the information at the moment.<br /><br />Please try again later.</p>
              </div>

              <div className="preview-img">
                <img src={maxPreviewImg} alt="" />
              </div>
            </div>

            {isLoading && (
              <div className="loading-wrapper show">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  // Determine if user is logged in based on scenario
  const isLoggedIn = [
    'before-proceed',
    'already-activated',
    'activation-error'
  ].includes(scenario);

  // Non-subscription scenario has a different layout
  if (scenario === 'non-subscription') {
    return (
      <div className="page-wrapper page-load">
        <Header status="logged-in" username={userName} />
        <div className="container">
          {renderContent()}
        </div>
        <Footer status="normal" />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Header 
        status={isLoggedIn ? 'logged-in' : 'normal'} 
        username={isLoggedIn ? userName : undefined}
      />
      <div className="container">
        <div className="activationPage-wrapper">
          {renderContent()}
        </div>
      </div>
      <Footer status="normal" />
    </div>
  );
};

export default ActivationStatus;