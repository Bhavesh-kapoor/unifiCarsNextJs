import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Image from "next/image";
import compStyling from "./ImageCarousel.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Head from "next/head";

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

const AllCars2 = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageData, setImageData] = useState(images);

  const handleClickPreviousEvent = (event) => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide <= 0) {
      setCurrentSlide(imageData.length - 1);
    }
  };

  const handleClickNextEvent = (event) => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide >= imageData.length - 1) {
      setCurrentSlide(0);
    }
  };
  return (
    <div className="h-96 relative flex w-full bg-red-600">
      <Container className={compStyling.container} >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Stack direction="column" spacing={2} sx={{ maxHeight: 60 }}>
              {images.map((item, index) => (
                <Box
                  sx={{ maxWidth: 200, maxHeight: 150, cursor: "pointer" }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <Image
                    src={item}
                    width="200"
                    height="150"
                    className={index === currentSlide && compStyling.glow}
                  />
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={10}>
            <CarouselProvider
              visibleSlides={1}
              totalSlides={images.length}
              currentSlide={currentSlide}
              step={1}
              naturalSlideWidth={200}
              naturalSlideHeight={300}
              hasMasterSpinner
              infinite
              // isIntrinsicHeight={true}
            >
              <div className={compStyling.container}>
                <Slider className={compStyling.slider}>
                  {images.map((item, index) => (
                    <Slide key={index}>
                      <ImageWithZoom className={compStyling.mainImg} src={item} key={index} style={{height:"400px !important"}}/>
                    </Slide>
                  ))}
                </Slider>
                <ButtonBack
                  className={compStyling.buttonBack}
                  onClick={(e) => handleClickPreviousEvent(e)}
                >
                  <ArrowBackIosIcon />
                </ButtonBack>
                <ButtonNext
                  className={compStyling.buttonNext}
                  onClick={(e) => handleClickNextEvent(e)}
                >
                  {" "}
                  <ArrowForwardIosIcon />
                </ButtonNext>
              </div>
              {/* <DotGroup dotNumbers /> */}
            </CarouselProvider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AllCars2;
