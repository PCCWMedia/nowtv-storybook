import React, { useState, useEffect } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Button } from '../../../components/Button/Button';
import InputBox from '../../../components/Form/InputBox/InputBox';
import RadioButton from '../../../components/Form/RadioButton/RadioButton';

const billOptions = [
    { id: 'bill-email', label: 'Email', value: 'email' },
    { id: 'bill-printedBill', label: 'Printed Bill ($5/mth will be charged)', value: 'printed' },
];

const DEFAULTS = {
    billPreference: 'email' as 'email' | 'printed',
    billingEmail: 'davidchan@gmail.com',
    address1: 'Elle Garden Block 5, 82 Sheung Cheung Wai,',
    address2: 'Sheung Cheung Wai, Yuen Long,',
    address3: 'New Territories, HK',
    address4: '',
};

const BillSettings: React.FC = () => {
    const [billPreference, setBillPreference] = useState<'email' | 'printed'>(DEFAULTS.billPreference);

    const [billingEmail, setBillingEmail] = useState(DEFAULTS.billingEmail);

    const [address1, setAddress1] = useState(DEFAULTS.address1);
    const [address2, setAddress2] = useState(DEFAULTS.address2);
    const [address3, setAddress3] = useState(DEFAULTS.address3);
    const [address4, setAddress4] = useState(DEFAULTS.address4);

    const [isSaving, setIsSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        const changed =
            billPreference !== DEFAULTS.billPreference ||
            billingEmail !== DEFAULTS.billingEmail ||
            address1 !== DEFAULTS.address1 ||
            address2 !== DEFAULTS.address2 ||
            address3 !== DEFAULTS.address3 ||
            address4 !== DEFAULTS.address4;
        setHasChanges(changed);
    }, [billPreference, billingEmail, address1, address2, address3, address4]);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setHasChanges(false);
            console.log('Bill settings saved!');
        }, 800);
    };

    const handleCancel = () => {
        setBillPreference(DEFAULTS.billPreference);
        setBillingEmail(DEFAULTS.billingEmail);
        setAddress1(DEFAULTS.address1);
        setAddress2(DEFAULTS.address2);
        setAddress3(DEFAULTS.address3);
        setAddress4(DEFAULTS.address4);
        setHasChanges(false);
    };

    return (
        <div className='myaccount-wrapper'>
            <Header status="normal" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Bill Settings</h3>
                    </div>
                    <div className="section-content">
                        <h4>My Bill Preference</h4>
                        <div className="form-wrapper noBorder">
                            <div className="item">
                                <RadioButton
                                    key={billPreference}
                                    name="bill-preference"
                                    options={billOptions}
                                    defaultValue={billPreference}
                                    onChange={(value) => {
                                        setBillPreference(value as 'email' | 'printed');
                                    }}
                                />
                            </div>

                            {billPreference === 'email' && (
                                <div className='setup-emailBill'>
                                    <div className="item">
                                        <label>Billing Email Address</label>
                                        <div className="box">
                                            <InputBox
                                                type="email"
                                                name="billing-email-address"
                                                label=""
                                                placeholder=""
                                                autoComplete="off"
                                                value={billingEmail}
                                                onChange={(value) => {
                                                    setBillingEmail(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {billPreference === 'printed' && (
                                <div className='setup-printedBill'>
                                    <div className="item">
                                        <label>Address 1</label>
                                        <div className="box">
                                            <InputBox
                                                name="address-1"
                                                label=""
                                                placeholder=""
                                                autoComplete="off"
                                                value={address1}
                                                onChange={(value) => {
                                                    setAddress1(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>Address 2</label>
                                        <div className="box">
                                            <InputBox
                                                name="address-2"
                                                label=""
                                                placeholder=""
                                                autoComplete="off"
                                                value={address2}
                                                onChange={(value) => {
                                                    setAddress2(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>Address 3</label>
                                        <div className="box">
                                            <InputBox
                                                name="address-3"
                                                label=""
                                                placeholder=""
                                                autoComplete="off"
                                                value={address3}
                                                onChange={(value) => {
                                                    setAddress3(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>Address 4</label>
                                        <div className="box">
                                            <InputBox
                                                name="address-4"
                                                label=""
                                                placeholder=""
                                                autoComplete="off"
                                                value={address4}
                                                onChange={(value) => {
                                                    setAddress4(value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="notes">
                                        <p>1. The card holder and Now TV subscriber must be the same person.</p>

                                        <p>2. Credit cards valid for less than two months on date of use are not acceptable.</p>

                                        <p>3. New credit card information will be updated in your account the day after receipt of the change request. However, the change will become effective from your next monthly bill, if your request is submitted five calendar days or less before the bill issue date.</p>
                                    </div>
                                </div>
                            )}
                            
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

export default BillSettings;
