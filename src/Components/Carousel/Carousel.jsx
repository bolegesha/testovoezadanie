import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style/Carousel.module.css";

import carousel1 from "../../assets/photo/carousel1.jpeg";
import carousel2 from "../../assets/photo/carousel2.jpeg";
import carousel3 from "../../assets/photo/carousel3.jpeg";
import carousel4 from "../../assets/photo/carousel4.jpeg";
import carousel5 from "../../assets/photo/carousel5.jpeg";
import arrow from '../../assets/icons/next.png';

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

const InfiniteCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <img src={arrow} alt="Next" className={style.slickNext} />,
    prevArrow: <img src={arrow} alt="Previous" className={style.slickPrev} />,
    centerMode: true,
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.headerText}>Откройте визуальный мир приложений</p>
      </div>

      <div className={style.carouselContainer}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className={style.carouselSlide}>
              <img className={style.carouselImage} src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
