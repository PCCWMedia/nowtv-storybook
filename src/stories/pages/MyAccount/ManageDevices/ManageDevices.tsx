import React, { useState, useEffect } from 'react';
import '../MyAccount.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Link from '../../../components/Link/Link';
import {Button} from '../../../components/Button/Button';
import DeviceList, { type DeviceItem } from '../../../components/MyAccount/DeviceList';
import RemoveDevicesOverlay from '../../../components/Overlay/RemoveDevicesOverlay/RemoveDevicesOverlay';

const ManageDevices: React.FC = () => {
    const [devices, setDevices] = useState<DeviceItem[]>([
        { id: 'chrome', name: 'Chrome Browser', firstWatching: '26 Mar 2024' },
        { id: 'samsung', name: 'Bedroom Samsung', firstWatching: '27 Mar 2024' },
        { id: 'iPad', name: "David's iPad", firstWatching: '3 Dec 2023' },
        { id: 'jennysPhone', name: "Jenny's Phone", firstWatching: '15 Aug 2023' },
        { id: 'momsPhone', name: "Mom's Phone", firstWatching: '30 Apr 2023' }
    ]);

    const [remainingChanges, setRemainingChanges] = useState(12);
    const [removeModalOpen, setRemoveModalOpen] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState<DeviceItem | null>(null);

    const handleRemoveDevice = (deviceId: string) => {
        setDevices(devices.filter(device => device.id !== deviceId));
    };

    const handleRequestRemove = (device: DeviceItem) => {
        setSelectedDevice(device);
        setRemoveModalOpen(true);
    };
    const handleConfirmRemove = () => {
        if (selectedDevice) {
            setDevices(devices.filter(device => device.id !== selectedDevice.id));
            setRemainingChanges(prev => Math.max(0, prev - 1));
        }
        setRemoveModalOpen(false);
        setSelectedDevice(null);
    };
    const handleCancelRemove = () => {
        setRemoveModalOpen(false);
        setSelectedDevice(null);
    };

    useEffect(() => {
        if (removeModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [removeModalOpen]);

    return (
        <div className='myaccount-wrapper'>
            <Header status="normal" />
            <div className='subpages'>
                <div className="container">
                    <div className="section-title">
                        <h3>Manage Devices</h3>
                    </div>
                    <div className="section-content">
                        <div className='manage-devices-wrapper'>
                            <h6>You can stream or download on up to 5 devices at a time. <br/>You can change devices up to 12 times a year. </h6>

                            <div className="status">
                                <div className="changes"><b>Remaining changes</b>: {remainingChanges}</div>
                                <div className="renews"><b>Renews</b>: 15 Aug 2024</div>
                                <Link href="https://www.nowtv.now.com/support" label="Learn More" className=""/>
                            </div>

                            <DeviceList 
                                devices={devices} 
                                onRequestRemove={handleRequestRemove} 
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <Footer status="normal" />


            <RemoveDevicesOverlay
                open={removeModalOpen}
                deviceName={selectedDevice ? selectedDevice.name : ''}
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
                onClose={handleCancelRemove}
            />

        </div>
    );
};

export default ManageDevices;