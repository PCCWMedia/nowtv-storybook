import React, { useState, useEffect } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Button } from '../../../components/Button/Button';
import RadioButton from '../../../components/Form/RadioButton/RadioButton';

const langOptions = [
    { id: 'lang-chinese', label: '中文', value: '中文' },
    { id: 'lang-english', label: 'English', value: 'English' },
];

const DEFAULTS = {
    langPreference: 'English' as '中文' | 'English',
};

const CommunicationPreference: React.FC = () => {
    const [langPreference, setLangPreference] = useState<'中文' | 'English'>(DEFAULTS.langPreference);

    const [isSaving, setIsSaving] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    
    const [isOptedIn, setIsOptedIn] = useState(false);

    useEffect(() => {
        const changed = langPreference !== DEFAULTS.langPreference;
        setHasChanges(changed);
    }, [langPreference]);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setHasChanges(false);
            console.log('Communication preferences saved!');
        }, 800);
    };

    const handleCancel = () => {
        setLangPreference(DEFAULTS.langPreference);
        setHasChanges(false);
    };

    const handleOptIn = () => {
        setIsOptedIn(true);
    };

    return (
        <div className='myaccount-wrapper'>
            <Header status="normal" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Communication Preferences</h3>
                    </div>
                    <div className="section-content">
                        <h4>Language Preferences</h4>
                        <p className="msg">Select your preferred language for communication. Please allow a day or two for preferences to take effect.</p>
                        <div className="form-wrapper">
                            <div className="item noBorder md-center">
                                <RadioButton
                                    key={langPreference}
                                    name="lang-preference"
                                    options={langOptions}
                                    defaultValue={langPreference}
                                    onChange={(value) => {
                                        setLangPreference(value as '中文' | 'English');
                                    }}
                                />
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

                        <hr />

                        <div className='offer-promotion'>
                            <h4>Offers and Promotions</h4>
                            <p className="msg">Opt back in our offers and promotion priority list?</p>
                            
                            <div className='form-wrapper'>
                                <div className="cta-wrappers">
                                    <Button
                                        label={isOptedIn ? "Thanks" : "Yes, I'm In"}
                                        className="btn primary"
                                        disabled={isOptedIn}
                                        onClick={handleOptIn}
                                    />
                                </div>
                            </div>
                            

                        </div>



                    </div>
                </div>
            </div>
            
            <Footer status="normal" />
        </div>
    );
};

export default CommunicationPreference;