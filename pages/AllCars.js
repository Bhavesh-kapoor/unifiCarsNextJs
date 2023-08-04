import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
const AllCars = () => {
    const images = [
        "/samples/file.JPG2.jpg",
        "/samples/file.JPG.jpg",
        "/samples/file.JPG3.jpg",
        "/samples/file.JPG4.jpg",
        "/samples/file.JPG5.jpg",
        "/samples/file.JPG6.jpg",
        "/samples/file.JPG7.jpg",
        "/samples/file.JPG8.jpg",
        "/samples/file.JPG9.jpg",
        "/samples/file.JPG10.jpg",
        "/samples/file.JPG11.jpg",
        "/samples/file.JPG12.jpg",
    ];
    return (
        <>
            <Head>
                <style>
                    {`
                    .carousel .thumb img {
                        width: 10rem !important;
                        height: 5rem !important;
                        display: flex !important;
                        flex-direction: column !important;
}

                    .carousel .slide img {
                        max-height: 400px;  /* change this to whatever you want */
                    width: auto;
}`}
                </style>
            </Head>
            <div className="container flex mx-auto my-6 gap-2 text-[14px] capitalize ">
                {/* <div className="all-images w-1/4 bg-slate-100 flex flex-col gap-4">
                    <div className="flex justify-center items-center w-full">
                        <div className="w-1/4">Exterior</div>
                        <div className="h-1 bg-slate-300 w-3/4"></div>
                    </div>
                    <div className="flex flex-col justify-center items-center overflow-y-auto  h-[500px] gap-3">
          {images.map((img, i) => {
            return (
              <Image
                key={i}
                src={img}
                alt="hello"
                width={`200`}
                height={`150`}
                className=""
              />
            );
          })}
        </div>
                </div> */}
                <div className="carousel w-full bg-slate-200 container mx-auto">
                    {/*  */}
                    <div>
                        <Carousel
                            showStatus={false}
                            showArrows={true}
                            autoPlay={false}
                            swipeable={true}
                            interval={4000}
                            infiniteLoop={true}
                            swipeScrollTolerance={50}
                            preventMovementUntilSwipeScrollTolerance={true}
                            emulateTouch={true}
                            dynamicHeight={true}
                            thumbWidth={150}
                            // showThumbs={false}
                        >
                            {images &&
                                images.map((image, index) => {
                                    return (
                                        <div key={index}>
                                            {" "}
                                            <img src={image} className="rounded object-cover" />
                                        </div>
                                    );
                                })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCars;
