import React from 'react';
import './ProfileButton.scss';

interface ProfileButtonProps {
    /** Status of the button */
    status: 'login' | 'logged-in';
    /** Username for logged-in state */
    username?: string;
    /** Optional click handler */
    onClick?: () => void;
    /** Optional className for custom styling */
    className?: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ 
    status, 
    username, 
    onClick, 
    className = '' 
}) => {
    return (
        <a 
            href="#" 
            className={`login-profile-btn ${status === 'logged-in' ? 'my-account' : ''} ${className}`}
            onClick={onClick}
        >
            {status === 'login' ? (
                'Sign up / Login'
            ) : (
                <>
                    <i className="icon-user"></i>
                    <div className="login-info">
                        <span className="username">Hi, {username}</span>
                        <span className="view-acct">View Account</span>
                    </div>
                </>
            )}
        </a>
    );
};

export default ProfileButton; 