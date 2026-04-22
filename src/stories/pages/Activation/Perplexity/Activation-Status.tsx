import React, { useState, useEffect } from 'react';
import '../Activation.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Link from '../../../components/Link/Link';
import perplexityVisual from '../../../assets/img/activationPages/perplexity-visual.jpg';
import iconWhatsapp from '../../../assets/img/icon/icon-chat-whatsapp.svg';
import iconPhone from '../../../assets/img/icon/icon-chat-phone.svg';

export interface ActivationStatusProps {
  /** The activation scenario to display */
  scenario: 'static-landing' | 'not-yet-activated' | 'already-activated' | 'non-enrolled' | 'activation-already-activated' | 'before-proceed' | 'activation-fail';
  /** User name for logged in scenarios */
  userName?: string;
  /** Show loading state */
  showLoading?: boolean;
  /** Callback for button clicks */
  onButtonClick?: () => void;
}

const ActivationStatus: React.FC<ActivationStatusProps> = ({
  scenario,
  userName = 'Wilson',
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
      case 'static-landing':
        return (
          <>
            <div className="message">
              <h2>Activate Perplexity Account</h2>
              <h3>In addition to enjoying shows on Now TV, you can now dive deeper and broaden your knowledge by activating your Perplexity account.</h3>
            </div>

            <div className="cta-buttons">
              <Link 
                href="https://id.now.com/nowidform/login.form?lang=en" 
                label="Start" 
                className="btn primary"
                onClick={onButtonClick}
              />
            </div>

            <div className="preview-img">
              <img src={perplexityVisual} alt="" />
            </div>
          </>
        );

      case 'not-yet-activated':
        return (
          <>
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>You're about to be redirected to the Perplexity website. Click on the button to continue:</p>
              </div>

              <div className="cta-buttons">
                <Link 
                  href="#" 
                  label="Go to Perplexity" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={perplexityVisual} alt="" />
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
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Your Perplexity account has already been activated.</p>
              </div>

              <div className="cta-buttons">
                <Link 
                  href="#" 
                  label="Go to Perplexity" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={perplexityVisual} alt="" />
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

      case 'non-enrolled':
        return (
          <>
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Sorry! We could not find any relevant subscription with your account.</p>
              </div>

              <div className="need-help">
                <h5>Need help?</h5>
                <div className="chat-options">
                  <div className="item">
                    <a href="https://api.whatsapp.com/send?phone=85296133533">
                      <div className="img-wrap">
                        <img src={iconWhatsapp} alt="" className="whatsapp" />
                      </div>
                      <h4>WhatsApp<br />Enquiry</h4>
                    </a>
                  </div>

                  <div className="item">
                    <a href="tel:1833888">
                      <div className="img-wrap">
                        <img src={iconPhone} alt="" className="phone" />
                      </div>
                      <h4>1833 888</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cta-buttons">
                <p><b>Not subscribed yet?</b></p>
                <Link 
                  href="#" 
                  label="Learn more about related plans" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={perplexityVisual} alt="" />
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

      case 'activation-already-activated':
        return (
          <>
            <div className="heading">
              <h2>Account Activated</h2>
            </div>

            <div className="message">
              <p>Your Perplexity account has already been activated.</p>
            </div>

            <div className="cta-buttons">
              <Link 
                href="#" 
                label="Go to Perplexity" 
                className="btn primary"
                onClick={onButtonClick}
              />
            </div>

            <div className="preview-img">
              <img src={perplexityVisual} alt="" />
            </div>
          </>
        );

      case 'before-proceed':
        return (
          <>
            <div className="heading">
              <h2>Activate Perplexity</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>You're about to be redirected to the Perplexity website. Click on the button to continue:</p>
              </div>

              <div className="cta-buttons">
                <Link 
                  href="#" 
                  label="Activate Perplexity account" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={perplexityVisual} alt="" />
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

      case 'activation-fail':
        return (
          <>
            <div className="name">
              <h2 className="name">Hi, {userName}!</h2>
            </div>

            <div className={`status-content ${isLoading ? '' : 'show'}`}>
              <div className="message">
                <p>Apologies, seems there is an error. We are unable to retrieve the information at the moment. Please try again later.</p>
              </div>

              <div className="cta-buttons">
                <Link 
                  href="https://www.nowtv.now.com/" 
                  label="Now TV Home" 
                  className="btn primary"
                  onClick={onButtonClick}
                />
              </div>

              <div className="preview-img">
                <img src={perplexityVisual} alt="" />
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
    'not-yet-activated',
    'already-activated',
    'non-enrolled',
    'activation-fail'
  ].includes(scenario);

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