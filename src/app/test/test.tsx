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
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: active ? 'white' : '#CCCCCC',
                    margin: '0 5px',
                    cursor: 'pointer',
                }}
            />
        );
    };

    return (
        <div>

            <div
                className="relative p-6 rounded-lg shadow-md"
                style={{
                    backgroundImage: `url(${BgRed.src}), linear-gradient(90deg, #EF5858 0%, #6A0606 100%)`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }}
            >
                <h3 style={{ color: 'orange' }}>Quiz of the day</h3>
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
                        <div key={question.id} style={{ padding: '0px', textAlign: 'center' }}>
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
                                        className={`flex items-center justify-center w-[45%] p-2.5 m-1 rounded-lg font-normal cursor-pointer relative 
                               ${selectedOptions[index] === i ? 'bg-white text-black' : 'bg-white/20 text-white'}`}
                                    >

                                        <span
                                            className={`absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 
    ${selectedOptions[index] === i ? 'text-black' : 'text-white'} font-bold`}
                                        >

                                            {i + 1}
                                        </span>
                                        <span style={{ textAlign: 'center', width: '100%' }}>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
                <button
                    onClick={handleNext}
                    disabled={selectedOptions[currentQuestionIndex] === null}
                    className={`w-full py-4 px-5 ${selectedOptions[currentQuestionIndex] === null
                            ? 'bg-gray-400 text-white cursor-not-allowed'
                            : 'bg-white text-[#7D1212] cursor-pointer'
                        } rounded-lg mt-7`}
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default CarouselComponent;
