import React from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PaymentHistory, { type PaymentHistoryItem } from '../../../components/MyAccount/PaymentHistory';

const paymentHistoryData: PaymentHistoryItem[] = [
    {
        id: '1',
        title: 'More Blue',
        date: '24 Dec 2023',
        reference: 'UOI678IUGIFU',
        description: 'Rental - Credit Card',
        amount: '$32'
    },
    {
        id: '2',
        title: 'Avengers: Infinity War',
        date: '24 Nov 2023',
        reference: 'OP1234555',
        description: 'Rental - Credit Card',
        amount: '$158'
    },
    {
        id: '3',
        title: 'Knowledge Pack',
        date: '24 Oct 2024',
        reference: 'MP02389687',
        description: 'Credit Card',
        amount: '$1,024'
    }
];

const PaymentHistoryPage: React.FC = () => {
    return (
        <div className='myaccount-wrapper'>
            <Header status="normal" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Payment History</h3>
                    </div>
                    <div className="section-content">
                        <PaymentHistory items={paymentHistoryData} />
                    </div>
                </div>
            </div>
            
            <Footer status="normal" />
        </div>
    );
};

export default PaymentHistoryPage;