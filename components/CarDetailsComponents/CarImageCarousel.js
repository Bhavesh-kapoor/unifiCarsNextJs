import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Paper } from '@mui/material';
import Head from 'next/head';

const CarImageCarousel = (props) => {
    const { images } = props
    return (
        <>
            <Head>
                <style>{`
                    .carousel .thumb img {
                        width: 10rem !important;
                        height: 5rem !important;
}

                    .carousel .slide img {
                        max - height: 400px;  /* change this to whatever you want */
                    width: auto;
}`}
                </style>
            </Head>
            <Paper elevation={0}>
                <Carousel
                    showStatus={true}
                    showArrows={true}
                    autoPlay={true}
                    swipeable={true}
                    interval={4000}
                    infiniteLoop={true}
                    swipeScrollTolerance={50}
                    preventMovementUntilSwipeScrollTolerance={true}
                    emulateTouch={true}
                    dynamicHeight={true}
                    thumbWidth={150}
                >
                    {images ? images.map((image, index) => {
                        return <div key={index} > <img
                            src={image.image}
                            className="rounded object-cover"
                        /></div>

                    }) : <img />}
                </Carousel>
            </Paper>
        </>
    )
}

export default CarImageCarousel