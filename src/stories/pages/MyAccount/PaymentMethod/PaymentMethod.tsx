import React, { useState } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Button } from '../../../components/Button/Button';
import Link from '../../../components/Link/Link';
import SelectBox from '../../../components/Form/SelectBox/SelectBox';
import InputBox from '../../../components/Form/InputBox/InputBox';

const paymentType = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'amex', label: 'American Express' },
];

const cardExpiryMonth = [
    { value: '01', label: '1' },
    { value: '02', label: '2' },
    { value: '03', label: '3' },
    { value: '04', label: '4' },
    { value: '05', label: '5' },
    { value: '06', label: '6' },
    { value: '07', label: '7' },
    { value: '08', label: '8' },
    { value: '09', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
];

const cardExpiryYear = Array.from({ length: 11 }, (_, i) => {
    const year = 2025 + i;
    return { value: String(year), label: String(year) };
});

const PaymentMethod: React.FC = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        // Simulate save
        setTimeout(() => {
            setIsSaving(false);
            setHasChanges(false);
            console.log('Payment method saved!');
        }, 1000);
    };

    const handleCancel = () => {
        setSelectedType('');
        setSelectedMonth('');
        setSelectedYear('');
        setCardHolder('');
        setHasChanges(false);
    };

    return (
        <div className='myaccount-wrapper'>
            <Header status="logged-in" username="Now TV" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Change Payment Method</h3>
                    </div>
                    <div className="section-content">
                        <h4>My Payment Method</h4>
                        <div className="form-wrapper">
                            <div className="item">
                                <label>Credit Card Type</label>
                                <div className="box">
                                    <SelectBox
                                        options={paymentType}
                                        placeholder="-"
                                        defaultValue="visa"
                                        onChange={(value) => {
                                            setSelectedType(value);
                                            setHasChanges(true);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="item">
                                <label>Credit Card Number</label>
                                <div className="box">
                                    <b>4201********9966</b>
                                    <Link href="#" label="Edit" className=""/>
                                </div>
                            </div>
                            <div className="item">
                                <label>Expiry Date</label>
                                <div className="box month-year-wrap">
                                    <div className="month">
                                        <SelectBox
                                            options={cardExpiryMonth}
                                            placeholder="-"
                                            defaultValue={selectedMonth}
                                            onChange={(value) => {
                                                setSelectedMonth(value);
                                                setHasChanges(true);
                                            }}
                                        />
                                    </div>
                                    <span>-</span>
                                    <div className="year">
                                        <SelectBox
                                            options={cardExpiryYear}
                                            placeholder="-"
                                            defaultValue={selectedYear}
                                            onChange={(value) => {
                                                setSelectedYear(value);
                                                setHasChanges(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <label>Card Holder Name</label>
                                <div className="box">
                                    <InputBox
                                        name="cardholder-name"
                                        label=""
                                        placeholder=""
                                        autoComplete="off"
                                        value={cardHolder}
                                        onChange={(value) => {
                                            setCardHolder(value);
                                            setHasChanges(true);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="notes">
                                <p>1. The card holder and Now TV subscriber must be the same person.</p>
                                <p>2. Credit cards valid for less than two months on date of use are not acceptable.</p>
                                <p>3. New credit card information will be updated in your account the day after receipt of the change request. However, the change will become effective from your next monthly bill, if your request is submitted five calendar days or less before the bill issue date.</p>
                            </div>
                            <div className="cta-wrappers">
                                <Button
                                    label="Save"
                                    className="btn primary"
                                    disabled={!hasChanges || isSaving}
                                    onClick={handleSave}
                                />
                                <Button
                                    label="Cancel"
                                    className="btn secondary"
                                    onClick={handleCancel}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer status="normal" />
        </div>
    );
};

export default PaymentMethod;