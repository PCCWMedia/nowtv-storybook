import React from 'react';
import './AlertBar.scss';
import Link from '../Link/Link';
import { Button } from '../Button/Button';
import alertIcon from '../../assets/img/icon/icon-alert.svg'; 

interface AlertBarProps {
    href: string;
    btnLabel: string;
    className?: string;
    alertHeading: string;
    alertMsg: string;
    showCTA?: boolean;
  }
  
  const AlertBar: React.FC<AlertBarProps> = ({ href, btnLabel, className, alertHeading, alertMsg, showCTA }) => {
    return (
        <div className={`notice ${className}`}>
            <div className="container">
                <div className="wrapper">
                    <div className="icon">
                        <img src={alertIcon} alt="Notice Icon" />
                    </div>
                    <div className="message-wrapper">
                        <div className="message">
                            <h6>{alertHeading}</h6>
                            <p>{alertMsg}</p>
                        </div>
                        {showCTA && (
                            <div className="cta-options">
                                <Link href={href} className="btn outline" label={btnLabel} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Button label="" className="close-btn"/>
        </div>
    );
  };
  
  export default AlertBar;
