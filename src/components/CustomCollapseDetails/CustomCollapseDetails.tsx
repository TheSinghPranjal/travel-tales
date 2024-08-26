'use client';

import React, { useState } from 'react';
import './CustomCollapseDetails.css'; // Ensure to create this CSS file

export interface CustomCollapseDetailsProps {
    containerId?: string;
    containerClassName?: string;
    headerText: string;
    closed?: boolean;
    onToggleCollapse?: Function;
}

const CustomCollapseDetails: React.FC<CustomCollapseDetailsProps> = ({
    containerId,
    containerClassName,
    headerText,
    closed,
    onToggleCollapse
}) => {
    const [isOpen, setIsOpen] = useState(!closed);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (onToggleCollapse) {
            onToggleCollapse(!isOpen);
        }
    };

    return (
        <div className={`custom-collapse-container ${containerClassName}`} id={containerId}>
            <button className="toggle-button" style={{ paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px' }} onClick={handleToggle}>
                {headerText}
            </button>
            <div className={`drawer ${isOpen ? 'open' : 'closed'}`}>
                {/* Drawer content here */}
                <p>Drawer Content</p>
            </div>
            <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={handleToggle}></div>
        </div>
    );
};

export default CustomCollapseDetails;
