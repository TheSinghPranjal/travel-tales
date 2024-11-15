'use client';
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import './Test6.css';

const DraggableTest6 = () => {
    const [bounds, setBounds] = useState({ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight })
    const [position, setPosition] = useState({ x: 0, y: window.innerHeight / 2 });
    const [isLeftVisible, setIsLeftVisible] = useState(true);
    const [isRightVisible, setIsRightVisible] = useState(true);
    const draggableRef = useRef<HTMLDivElement | null>(null);

    const handleDrag = (e: any, data: any) => {
        const newX = data.x;
        const windowWidth = window.innerWidth;

        console.log(windowWidth, "width")

        setPosition({ x: newX, y: data.y });

        // If drawer is dragged fully to the left, hide middle data and left arrow
        if (newX <= 0) {
            console.log('1')
            setIsLeftVisible(false);
            setIsRightVisible(true);
        } else if (newX >= windowWidth - 30) { // If dragged to the right edge, hide right arrow and show left arrow
            console.log('2')
            setIsLeftVisible(true);
            setIsRightVisible(false);
        } else { // Ensure both arrows are visible when dragging
            console.log('3')
            setIsLeftVisible(true);
            setIsRightVisible(true);
        }
    };

    //  const bounds = { left: 0, right: window.innerWidth - 30, top: 0, bottom: window.innerHeight }
    console.log(position, bounds, 'sdslfaslflkj');

    return (
        <div  >
            <Draggable
                // axis="x"
                axis='both'
                position={{ x: position.x, y: position.y }}
                onDrag={handleDrag}
                bounds={bounds}
            >
                <div ref={draggableRef} className="draggable-container" style={{ width: '300px' }}>
                    {isLeftVisible && <div className="left-arrow" onMouseDown={e => e.stopPropagation()}>&larr;</div>}
                    {isLeftVisible && <div className="middle-data">Hello there, I am your chatbot</div>}
                    {isRightVisible && <div className="right-arrow" onMouseDown={e => e.stopPropagation()}>&rarr;</div>}
                </div>
            </Draggable>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>
            <div>
                5
            </div>
            <div>
                1
            </div>
            <div>
                1
            </div>
        </div>
    );
};

export default DraggableTest6;
