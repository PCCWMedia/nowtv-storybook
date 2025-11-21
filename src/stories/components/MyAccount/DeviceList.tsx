import React from 'react';
import Link from '../Link/Link';

export interface DeviceItem {
    id: string;
    name: string;
    firstWatching: string;
}

export interface DeviceListProps {
    devices: DeviceItem[];
    onRequestRemove?: (device: DeviceItem) => void;
    className?: string;
}

const DeviceList: React.FC<DeviceListProps> = ({ 
    devices, 
    onRequestRemove,
    className = '' 
}) => {
    return (
        <div className={`devices-wrapper ${className}`}>
            {devices.map((device) => (
                <div key={device.id} className="item" data-device={device.id}>
                    <div className="device">
                        <div className="name">{device.name}</div>
                        <div className="device-status">First watching: {device.firstWatching}</div>
                    </div>
                    <a href="#" className="removeCTA" onClick={e => { e.preventDefault(); onRequestRemove && onRequestRemove(device); }}>Remove</a>
                </div>
            ))}
        </div>
    );
};

export default DeviceList; 