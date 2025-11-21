import React from 'react';

export interface PaymentHistoryItem {
    id: string;
    title: string;
    date: string;
    reference: string;
    description: string;
    amount: string;
}

export interface PaymentHistoryProps {
    items: PaymentHistoryItem[];
    className?: string;
}

const PaymentHistory: React.FC<PaymentHistoryProps> = ({ 
    items, 
    className = '' 
}) => {
    return (
        <div className={`payment-history ${className}`}>
            {items.map((item) => (
                <div key={item.id} className="item">
                    <h6>{item.title}</h6>
                    <div className="data">
                        <p>{item.date} | Ref: {item.reference}</p>
                        <p>{item.description} {item.amount}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaymentHistory; 