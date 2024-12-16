import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="carouselSlide1DIV">
        <h3 className="pinkHeading">Trending Item</h3>
        <h1>Women's latest fashion sale</h1>
        <h3 className="greyText">starting at $ 20.00</h3>
        <button className="pinkBUTTON">SHOP NOW</button>
      </div>
      <div className="carouselSlide2DIV">
        <h3 className="pinkHeading">Trending accessories</h3>
        <h1>Modern sunglasses</h1>
        <h3 className="greyText">starting at $ 15.00</h3>
        <button className="pinkBUTTON">SHOP NOW</button>
      </div>
      <div className="carouselSlide3DIV">
        <h3 className="pinkHeading">Sale Offer</h3>
        <h1>New fashion summer sale</h1>
        <h3 className="greyText">starting at $ 29.99</h3>
        <button className="pinkBUTTON">SHOP NOW</button>
      </div>
    </Slider>
  );
}