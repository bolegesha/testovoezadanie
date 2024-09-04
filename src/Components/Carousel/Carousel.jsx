import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../../assets/icons/next.png';
import "./style/Carousel.css";

const InfiniteCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: true,
    centerPadding: '10%',
    nextArrow: <img src={arrow} alt="Next" className="slickNext" />,
    prevArrow: <img src={arrow} alt="Previous" className="slickPrev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="carouselContainer">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="carouselSlide">
              <img className="carouselImage" src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
