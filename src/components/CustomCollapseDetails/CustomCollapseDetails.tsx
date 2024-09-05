'use client';

import React, { useState } from 'react';
import './CustomCollapseDetails.css';

export interface CustomCollapseDetailsProps {
    containerId?: string;
    containerClassName?: string;
    headerText: string;
    closed?: boolean;
    buttonClassName?: string,
    onToggleCollapse?: Function,
    children?: JSX.Element
}

const CustomCollapseDetails: React.FC<CustomCollapseDetailsProps> = (props) => {
    const { containerId, containerClassName, buttonClassName, headerText, closed, onToggleCollapse, children } = props;

    const [isOpen, setIsOpen] = useState(!closed);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (onToggleCollapse) {
            onToggleCollapse(!isOpen);
        }
    };

    return (
        <div style={{}} className={`custom-collapse-container ${containerClassName}`} id={containerId}>
            <button className={`toggle-button ${buttonClassName}`} onClick={handleToggle}>
                {headerText}
            </button>
            <div className={`drawer ${isOpen ? 'open' : 'closed'}`}>
                {/* Drawer content here */}
                {children && children}
            </div>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={handleToggle}></div>
        </div>
    );
};

export default CustomCollapseDetails;
