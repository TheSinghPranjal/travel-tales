'use client';
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './Test6.css';

const DraggableTest6 = () => {
    const [position, setPosition] = useState({ x: window.innerWidth - 30, y: window.innerHeight / 2 });
    const [isLeftVisible, setIsLeftVisible] = useState(true);
    const [isRightVisible, setIsRightVisible] = useState(false);
    const draggableRef = useRef<HTMLDivElement | null>(null);

    const handleDrag = (e: any, data: any) => {
        const newX = data.x;
        const windowWidth = window.innerWidth;

        setPosition({ x: newX, y: position.y });

        // If drawer is dragged fully to the left, hide middle data and left arrow
        if (newX <= 0) {
            setIsLeftVisible(false);
            setIsRightVisible(true);
        } else if (newX >= windowWidth - 30) { // If dragged to the right edge, hide right arrow and show left arrow
            setIsLeftVisible(true);
            setIsRightVisible(false);
        } else { // Ensure both arrows are visible when dragging
            setIsLeftVisible(true);
            setIsRightVisible(true);
        }
    };

    return (
        <Draggable
            axis="x"
            position={{ x: position.x, y: position.y }}
            onDrag={handleDrag}
            bounds={{ left: 0, right: window.innerWidth - 30 }}
        >
            <div ref={draggableRef} className="draggable-container" style={{ width: '300px' }}>
                {isLeftVisible && <div className="left-arrow" onMouseDown={e => e.stopPropagation()}>&larr;</div>}
                {isLeftVisible && <div className="middle-data">Hello there, I am your chatbot</div>}
                {isRightVisible && <div className="right-arrow" onMouseDown={e => e.stopPropagation()}>&rarr;</div>}
            </div>
        </Draggable>
    );
};

export default DraggableTest6;
