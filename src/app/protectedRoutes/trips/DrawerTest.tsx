'use client'
import React, { useState, useRef, useEffect } from 'react';
import './DrawerTest.css';

const DrawerTest = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 50 }); // Initial position for closed drawer
    const drawerWidth = 250; // Width of the drawer
    const screenEdgeOffset = 10; // Distance from screen edge to open drawer

    const handleDrag = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
    };

    const handleDragEnd = () => {
        // Open drawer if element is dragged near left edge
        if (position.x <= screenEdgeOffset) {
            setPosition({ x: drawerWidth, y: position.y }); // Move draggable to the right edge of the drawer
            setIsDrawerOpen(true);
        } else if (position.x > drawerWidth + screenEdgeOffset) {
            setIsDrawerOpen(false);
            setPosition({ x: 0, y: position.y }); // Reset draggable to left screen edge when drawer closes
        }
    };

    useEffect(() => {
        // Update draggable position to right edge of drawer when opening
        if (isDrawerOpen) {
            setPosition({ x: drawerWidth, y: position.y });
        }
    }, [isDrawerOpen]);

    return (
        <>
            {/* Drawer */}
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <p>Drawer Content</p>
            </div>

            {/* Draggable Element */}
            <div
                className="draggable-element"
                style={{ left: position.x, top: position.y }}
                onMouseDown={(e) => e.preventDefault()}
                onMouseMove={handleDrag}
                onMouseUp={handleDragEnd}
            >
                <span>Drag Me</span>
            </div>
        </>
    );
};

export default DrawerTest;
