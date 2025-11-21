import React, { useEffect, useState } from 'react';
import { Button } from '../../Button/Button';

interface RemoveDevicesOverlayProps {
    open: boolean;
    deviceName: string;
    onConfirm: () => void;
    onCancel: () => void;
    onClose: () => void;
}

const RemoveDevicesOverlay: React.FC<RemoveDevicesOverlayProps> = ({
    open,
    deviceName,
    onConfirm,
    onCancel,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (open) {
            // Add a small delay to ensure the initial state is rendered
            requestAnimationFrame(() => {
                setIsVisible(true);
            });
        } else {
            setIsVisible(false);
        }
    }, [open]);

    if (!open) return null;
    return (
        <div className={`modal-wrapper remove-device-modal${isVisible ? ' show' : ''}`}>
            <div className="modal-dialog">
                <div className="modal-content-wrapper sm">
                    <div className="close-modal">
                        <Button className="close-btn" label="Close" onClick={onClose} />
                    </div>
                    <div className="manage-devices-alert-wrapper">
                        <h4>Confirm to Remove?</h4>
                        <p>Are you sure you want to remove the device <b id="device-name">{deviceName}</b>?</p>
                        <div className="cta-buttons">
                            <button className="btn secondary" onClick={onCancel}>Back</button>
                            <button className="btn outline" id="confirm-remove-device" onClick={onConfirm}>Remove Device</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveDevicesOverlay;
