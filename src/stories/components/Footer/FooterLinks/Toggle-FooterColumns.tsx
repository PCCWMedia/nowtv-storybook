import React, { useState, useRef, useEffect } from 'react';

interface ToggleSectionProps {
    title: string;
    children: React.ReactNode;
}

const ToggleSection: React.FC<ToggleSectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
    const subMenuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 991);
            if (window.innerWidth >= 991) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (subMenuRef.current) {
            const subMenu = subMenuRef.current;
            if (isMobile) {
                if (isOpen) {
                    const contentHeight = subMenu.scrollHeight;
                    subMenu.style.height = `${contentHeight}px`;
                } else {
                    subMenu.style.height = '0px';
                }
            } else {
                subMenu.style.height = 'auto';
            }
        }
    }, [isOpen, isMobile]);

    const handleToggle = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="column">
            <h6 onClick={handleToggle} className={`${isOpen ? 'active' : ''}`}>
                {title}
            </h6>
            <ul ref={subMenuRef} className={`${isOpen ? 'active' : ''}`}>
                {children}
            </ul>
        </div>
    );
};

export default ToggleSection;