import React from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import AlertBar from '../../../components/AlertBar/AlertBar';

import Link from '../../../components/Link/Link';
import ProfileSection from './ProfileSection';
import AccountSubscriptionsSection from './AccountSubscriptionsSection';
import PaymentSection from './PaymentSection';
import DeviceSection from './DeviceSection';
import CommunicationSection from './CommunicationSection';
import AccountDeletionSection from './AccountDeletionSection';

const MyAccount: React.FC = () => {
    const [headerUsername, setHeaderUsername] = React.useState('Now TV');

    return (
        <div className='myaccount-wrapper'>
            <Header status="logged-in" username={headerUsername}/>

            <AlertBar 
                href="https://www.nowtv.now.com/subscription-details"
                btnLabel="Find My Account Details"
                alertHeading="Already a subscriber?"
                alertMsg="Ensure you're seeing the right details"
                showCTA={true}
            />

            <div className='heading'>
                <div className='container'>
                    <h2>My Account</h2>
                    <h6>Thanks for being a subscriber!</h6>
                </div>
            </div>

            <div className='myaccount-section'>
                <ProfileSection onNicknameChange={setHeaderUsername} />
                <AccountSubscriptionsSection />
                <PaymentSection />
                <DeviceSection />
                <CommunicationSection />
                <AccountDeletionSection />

                <div className="logout-wrapper">
                    <Link href="#" label="Logout" className="btn primary"/>
                </div>
            </div>

            <Footer status="normal" />
        </div>
    );
};

export default MyAccount;