import React, { useState } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import PackOverlay from '../../../components/Overlay/PackOverlay/PackOverlay';
import packsData from '../../../assets/data/packs.json';
import plansData from '../../../assets/data/plans.json';

const comboPlan = plansData.plans['Super Sports & Entertainment Combo'];
const signaturePlan = plansData.plans['Signature Combo'];
const getIncludedPacks = (planName: string, includes: string[]) =>
    includes.map((name) => {
        const pack = packsData.packs.find((packData) => packData.name === name);
        if (!pack) {
            throw new Error(`Pack data not found for "${name}" in ${planName}.`);
        }
        return pack;
    });
const comboPacks = getIncludedPacks(comboPlan.planName, comboPlan.includes);
const signaturePacks = getIncludedPacks(signaturePlan.planName, signaturePlan.includes);

const SubscribedDetails: React.FC = () => {
    const [isComboExpanded, setIsComboExpanded] = useState(false);
    const [isSignatureExpanded, setIsSignatureExpanded] = useState(false);
    const [selectedPack, setSelectedPack] = useState<(typeof comboPacks)[number] | null>(null);

    return (
        <div className="myaccount-wrapper">
            <Header status="normal" />
            <div className="subpages">
                <div className="container">
                    <div className="section-title">
                        <h3>Subscription Details and Renewal Dates</h3>
                    </div>
                    <div className="section-content">
                        <section className="subscription-combo">
                            <h4 className="border">Combo</h4>
                            <div className="item">
                                <div className={`subscribed${isComboExpanded ? ' active' : ''}`}>
                                    <button
                                        className="combo"
                                        type="button"
                                        aria-expanded={isComboExpanded}
                                        onClick={() => setIsComboExpanded((expanded) => !expanded)}
                                    >
                                        Super Sports &amp; Entertainment Combo 12-mth Pass
                                    </button>
                                    <p className="date">Renew on: 25 Jan 2025</p>
                                    <div className="packs-wrapper">
                                        <ul>
                                            {comboPacks.map((pack) => (
                                                <li key={pack.name}>
                                                    <button
                                                        type="button"
                                                        className="pack-link"
                                                        onClick={() => setSelectedPack(pack)}
                                                    >
                                                        {pack.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="subscription-combo">
                            <h4 className="border">Signature Combo</h4>
                            <div className="item">
                                <div className={`subscribed${isSignatureExpanded ? ' active' : ''}`}>
                                    <button
                                        className="combo"
                                        type="button"
                                        aria-expanded={isSignatureExpanded}
                                        onClick={() => setIsSignatureExpanded((expanded) => !expanded)}
                                    >
                                        Signature Combo
                                    </button>
                                    <p className="date">Renew on: 25 Jan 2025</p>
                                    <div className="packs-wrapper">
                                        <ul>
                                            {signaturePacks.map((pack) => (
                                                <li key={pack.name}>
                                                    <button
                                                        type="button"
                                                        className="pack-link"
                                                        onClick={() => setSelectedPack(pack)}
                                                    >
                                                        {pack.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer status="normal" />

            {selectedPack && (
                <PackOverlay
                    title={selectedPack.name}
                    channels={selectedPack.channelsNumber.map((id) => ({ id }))}
                    ondemands={selectedPack.onDemandNumber.map((id) => ({ id }))}
                    isOnDemand={selectedPack.onDemandNumber.length > 0}
                    centerTitle
                    showItemNames
                    disableItemDetails
                    onClose={() => setSelectedPack(null)}
                />
            )}
        </div>
    );
};

export default SubscribedDetails;