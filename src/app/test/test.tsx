'use client';
import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import ManaliImg from '../test/quizOfDay.svg';
import BgRed from '../test/red_bg.svg';

const CarouselComponent = () => {
    const questions = [
        {
            id: 1,
            question: "For how many terms has Justin Trudeau been Prime minister of Canada?",
            options: ["1", "2", "3", "4"],
            image: ManaliImg,
        },
        {
            id: 2,
            question: "For how many terms has Justin Trudeau been Prime minister of Canada?",
            options: ["1", "2", "3", "4"],
            image: ManaliImg,
        },
        {
            id: 3,
            question: "For how many terms has Justin Trudeau been Prime minister of Canada?",
            options: ["1", "2", "3", "4"],
            image: ManaliImg,
        },
        {
            id: 4,
            question: "For how many terms has Justin Trudeau been Prime minister of Canada?",
            options: ["1", "2", "3", "4"],
            image: ManaliImg,
        },
        {
            id: 5,
            question: "For how many terms has Justin Trudeau been Prime minister of Canada?",
            options: ["1", "2", "3", "4"],
            image: ManaliImg,
        },
    ];

    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const carouselRef = useRef<Carousel | null>(null);

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
        const updatedSelections = [...selectedOptions];
        updatedSelections[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelections);
    };

    const handleNext = () => {
        if (selectedOptions[currentQuestionIndex] !== null) {
            const newIndex = (currentQuestionIndex + 1) % questions.length;
            setCurrentQuestionIndex(newIndex);
            carouselRef.current?.goToSlide(newIndex);
            console.log(newIndex, "Hey New Index")
        }
    };

    const handleDotClick = (index: number) => {
        carouselRef.current?.goToSlide(index);
    };

    const CustomDot = ({ onClick, ...rest }: any) => {
        const { index, active } = rest;
        return (
            <li
                onClick={() => handleDotClick(index)}
                style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: active ? 'white' : '#CCCCCC',
                    margin: '0 5px',
                    cursor: 'pointer',
                }}
            />
        );
    };

    return (
        <div
            style={{
                background: `url(${BgRed.src}) center center / cover, linear-gradient(90deg, #EF5858 0%, #6A0606 100%)`,
                padding: '20px',
                boxShadow: '4px 4px 8px 0px #0000001F',
                borderRadius: '8px'
            }}
        >
            <Carousel
                ref={carouselRef}
                showDots
                responsive={responsive}
                swipeable
                draggable
                ssr
                infinite={false}
                keyBoardControl
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                arrows={false}
                renderButtonGroupOutside
                customDot={<CustomDot />}
                afterChange={(previousSlide: number, { currentSlide }: { currentSlide: number }) => setCurrentQuestionIndex(currentSlide)}
            >
                {questions.map((question, index) => (
                    <div key={question.id} style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ color: 'orange' }}>Quiz of the day</h3>
                        <Image
                            src={question.image}
                            alt="Quiz Image"
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                        <h4 style={{ margin: '20px 0', textAlign: 'left', color: 'white', fontWeight: 500, fontSize: '20px' }}>
                            {`Q${index + 1}: ${question.question}`}
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                            {question.options.map((option, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleOptionSelect(index, i)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45%',
                                        padding: '10px',
                                        margin: '5px',
                                        borderRadius: '8px',
                                        fontWeight: 'normal',
                                        cursor: 'pointer',
                                        backgroundColor: selectedOptions[index] === i ? 'white' : 'rgba(255, 255, 255, 0.16)',
                                        color: selectedOptions[index] === i ? 'black' : 'white',
                                    }}
                                >
                                    <span style={{ marginRight: '5px' }}>{i + 1}.</span> {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
            <button
                onClick={handleNext}
                disabled={selectedOptions[currentQuestionIndex] === null}
                style={{
                    width: '100%',
                    padding: '15px 20px',
                    backgroundColor: selectedOptions[currentQuestionIndex] === null ? 'grey' : 'white',
                    color: selectedOptions[currentQuestionIndex] === null ? 'white' : '#7D1212',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: selectedOptions[currentQuestionIndex] !== null ? 'pointer' : 'not-allowed',
                    marginTop: '20px'
                }}
            >
                Next
            </button>
        </div>
    );
};

export default CarouselComponent;
