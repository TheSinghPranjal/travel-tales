import React, { FC } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CustomSlider.css";
import PropTypes from 'prop-types'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export const SliderProps = {
    customClassName: PropTypes.string,
    focusOnHover: PropTypes.any,
    autoplay: PropTypes.bool,
    swipeable: PropTypes.bool,
    draggable: PropTypes.bool,
    showDots: PropTypes.bool,
    infinite: PropTypes.bool,
    partialVisible: PropTypes.bool,
    dotListClass: PropTypes.string,
    itemClass: PropTypes.string,
    sliderImageUrl: PropTypes.any

}

export type CustomSliderTypes = PropTypes.InferProps<typeof SliderProps>

const Slider: FC<CustomSliderTypes> = (props) => {

    const {
        customClassName,
        focusOnHover,
        autoplay,
        swipeable,
        draggable,
        showDots,
        infinite,
        partialVisible,
        sliderImageUrl,
        dotListClass,
        itemClass
    } = props



    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={autoplay ?? true}
                swipeable={swipeable ?? true}
                draggable={draggable ?? true}
                showDots={showDots ?? true}
                infinite={infinite ?? true}
                partialVisible={partialVisible ?? false}
                dotListClass="custom-dot-list-style"
            >
                {sliderImageUrl.map((imageUrl: any, index: number) => {
                    return (
                        <div className="slider" key={index}>
                            <img src={imageUrl.url} alt="movie" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
