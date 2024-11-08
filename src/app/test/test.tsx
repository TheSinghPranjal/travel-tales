'use client';
import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import ManaliImg from '../test/quizOfDay.svg';

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
    const carouselRef = useRef(null);

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const handleOptionSelect = (questionIndex, optionIndex) => {
        const updatedSelections = [...selectedOptions];
        updatedSelections[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelections);
    };

    const handleNext = () => {
        if (selectedOptions[currentQuestionIndex] !== null) {
            setCurrentQuestionIndex((prevIndex) => {
                const newIndex = prevIndex === questions.length - 1 ? 0 : prevIndex + 1;
                if (carouselRef.current) {
                    carouselRef.current.goToSlide(newIndex);
                }
                return newIndex;
            });
        }
    };

    return (
        <div style={{ backgroundColor: 'red', padding: '20px' }}>
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
                        <h4 style={{ margin: '20px 0' }}>{question.question}</h4>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
                            {question.options.map((option, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: '10px 20px',
                                        border: '1px solid grey',
                                        borderRadius: '8px',
                                        backgroundColor: selectedOptions[index] === i ? 'blue' : 'white',
                                        color: selectedOptions[index] === i ? 'white' : 'black',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleOptionSelect(index, i)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            disabled={selectedOptions[index] === null}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: selectedOptions[index] === null ? 'grey' : 'blue',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: selectedOptions[index] !== null ? 'pointer' : 'not-allowed',
                            }}
                        >
                            Next
                        </button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
