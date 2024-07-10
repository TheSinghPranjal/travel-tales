'use client'
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const CustomCarousel = () => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            background: "https://wallpapercave.com/wp/wp3103579.jpg",
            // itemNamePosition: 
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            background: "https://wallpapercave.com/wp/wp3103572.jpg",
            itemNamePosition: "left"

        }
    ];

    const Item = (props: any) => (
        <Paper style={{ backgroundImage: `url(${props.item.background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ textAlign: props.itemNamePosition }}>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    );



    return (
        <>
            <Carousel >
                {items.map((item, i) => (
                    <Item key={item} item={item} />
                )
                )}
            </Carousel>
        </>
    );
}

export default CustomCarousel;