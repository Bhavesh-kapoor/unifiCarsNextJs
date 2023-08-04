import React from "react";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";

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
const AllCars3 = () => {
  return (
    <CarouselProvider
      visibleSlides={3}
      totalSlides={6}
      step={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
    >
      <Slider className={`slider`}>
        {images.map((img, i) => (
          <Slide index={i} key={i}>
            <ImageWithZoom src={img} />
          </Slide>
        ))}
      </Slider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup />
    </CarouselProvider>
  );
};

export default AllCars3;
