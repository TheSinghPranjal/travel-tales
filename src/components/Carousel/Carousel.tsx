'use client'
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './Carousel.css';

const CustomCarousel = () => {
    const items = [
        {
            name: "Welcome to travel tales",
            description: "Probably the most affordable travel guide!",
            background: "https://wallpapercave.com/wp/wp3103579.jpg",
            itemNamePosition: "center"
        },
        {
            name: "Confused where to travel?",
            description: "Join our group and travel anywhere hassle-free",
            background: "https://wallpapercave.com/wp/wp3103572.jpg",
            itemNamePosition: "left"
        }
    ];

    const Item = (props: any) => (
        <Paper className="carousel-item" style={{ backgroundImage: `url(${props.item.background})`, alignItems: props.item.itemNamePosition === 'left' ? 'flex-start' : 'center' }}>
            <h2 className="carousel-title" style={{ textAlign: props.item.itemNamePosition }}>
                {props.item.name}
            </h2>
            <p className="carousel-description" style={{ textAlign: props.item.itemNamePosition }}>
                {props.item.description}
            </p>
            {/* <Button className="CheckButton">Check it out!</Button> */}
        </Paper>
    );

    return (
        <>
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </>
    );
}

export default CustomCarousel;
