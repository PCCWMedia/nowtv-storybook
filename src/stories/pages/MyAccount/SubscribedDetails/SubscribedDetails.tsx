import React, { useState } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Button } from '../../../components/Button/Button';
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
const westernSignaturePack = getIncludedPacks(signaturePlan.planName, signaturePlan.includes)
    .find((pack) => pack.name === 'Western Signature Pack');

if (!westernSignaturePack) {
    throw new Error(`Western Signature Pack is not included in ${signaturePlan.planName}.`);
}

const nbaPack = packsData.packs.find((pack) => pack.name === 'NBA Pack');

if (!nbaPack) {
    throw new Error('Pack data not found for "NBA Pack".');
}

const SubscribedDetails: React.FC = () => {
    const [isComboExpanded, setIsComboExpanded] = useState(false);
    const [selectedPack, setSelectedPack] = useState<(typeof comboPacks)[number] | null>(null);
    const [isCancelRenewalModalOpen, setIsCancelRenewalModalOpen] = useState(false);
    const [isNbaRenewalCanceled, setIsNbaRenewalCanceled] = useState(false);

    return (
        <div className="myaccount-wrapper">
            <Header status="normal" />
            <div className="subpages">
                <div className="container">
                    <div className="section-title">
                        <h3>Subscription Details and Renewal Dates</h3>
                    </div>
                    <div className="section-content">
                        <section className="subscription-content">
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

                        <section className="subscription-content">
                            <h4 className="border">Add-on Packs</h4>
                            <div className="item">
                                <div className="subscribed">
                                    <button
                                        type="button"
                                        className="pack-link"
                                        onClick={() => setSelectedPack(westernSignaturePack)}
                                    >
                                        Western Signature Pack
                                    </button>
                                    <p className="date">Renew on: 25 Jan 2025</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="addon-row">
                                    <div className="subscribed">
                                        <button
                                            type="button"
                                            className="pack-link"
                                            onClick={() => setSelectedPack(nbaPack)}
                                        >
                                            NBA Pack
                                        </button>
                                        <p className="date">
                                            {isNbaRenewalCanceled ? 'Valid til: ' : 'Renew on: '}25 Jan 2025
                                        </p>
                                    </div>
                                    {!isNbaRenewalCanceled && (
                                        <div className="cta-button">
                                            <button
                                                type="button"
                                                className="cancel-renewal-btn"
                                                onClick={() => setIsCancelRenewalModalOpen(true)}
                                            >
                                                Cancel renewal
                                            </button>
                                        </div>
                                    )}
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

            {isCancelRenewalModalOpen && (
                <div
                    className="modal-wrapper cancel-auto-renew show"
                    onClick={() => setIsCancelRenewalModalOpen(false)}
                >
                    <div className="modal-dialog">
                        <div className="modal-content-wrapper sm">
                            <div className="close-modal">
                                <Button
                                    className="close-btn"
                                    label="Close"
                                    onClick={() => setIsCancelRenewalModalOpen(false)}
                                />
                            </div>
                            <div
                                className="cancel-auto-renew-wrapper"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="cancel-auto-renew-title"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <h2 id="cancel-auto-renew-title">Cancel Auto Renewal?</h2>
                                <h4>NBA Pack</h4>
                                <p>Renew on: 25 Jan 2025</p>
                                <p className="note">
                                    Once canceled, the renewal cannot be undone through the online portal. Any further
                                    changes may require contacting Customer Service at 1833 888.
                                </p>
                                <div className="cta-buttons">
                                    <Button
                                        className="btn secondary"
                                        label="Back"
                                        onClick={() => setIsCancelRenewalModalOpen(false)}
                                    />
                                    <Button
                                        className="btn outline"
                                        label="Confirm"
                                        onClick={() => {
                                            setIsNbaRenewalCanceled(true);
                                            setIsCancelRenewalModalOpen(false);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubscribedDetails;