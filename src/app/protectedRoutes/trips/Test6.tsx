'use client'
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './trips.css'

const DraggableTest6 = () => {
    const DraggableComponent = () => {
        const [position, setPosition] = useState({ x: window.innerWidth - 20, y: window.innerHeight / 2 });

        // Define the type for the ref to ensure TypeScript knows it's referencing a div
        const draggableRef = useRef<HTMLDivElement | null>(null);

        const handleMouseDown = (e: any) => {
            e.preventDefault();
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        };

        const handleMouseMove = (e: any) => {
            if (draggableRef.current) {  // Check if the ref is not null
                const newX = e.clientX - draggableRef.current.offsetWidth / 2;
                const newY = e.clientY - draggableRef.current.offsetHeight / 2;
                setPosition({ x: newX, y: newY });
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        return (
            <Draggable>
                <div
                    ref={draggableRef}  // Attach the ref here
                    className="draggable-container"
                    style={{ position: 'fixed', top: '50%', right: '0', transform: 'translateY(-50%)' }}
                >
                    <div className="left-arrow">&larr;</div>
                    <div className="middle-data">Hello there, I am your chatbot</div>
                    <div className="right-arrow">&rarr;</div>
                </div>
            </Draggable>
        );
    };

    return <DraggableComponent />;
};

export default DraggableTest6;
