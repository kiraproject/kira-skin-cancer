import React from "react";
import sliderCheck from "../../../../images/slider-check.svg";
import ReactSiema from "react-siema";
const Swiper = ({ images }) => {
  const options = {
    duration: 500,
    loop: true,
  };

  const Slide = (props) => (
    <img {...props} alt="slide" className="swiper-img" />
  );

  let slider;
  return (
    <div className="swiper">
      <div className="title-wrapper my-1">
        <img src={sliderCheck} alt="" />
        <h3 className="fw-b my-2 text-primary font-2">{images?.title}</h3>
      </div>
      <div className="swiper-div my-1">
        <ReactSiema {...options} ref={(siema) => (slider = siema)}>
          {images?.images.map((img, index) => (
            <Slide src={img} key={index} />
          ))}
        </ReactSiema>
        <div className="swiper-btns my-1">
          <i
            className="fas fa-arrow-circle-left"
            onClick={() => slider.prev()}
          ></i>
          <i
            className="fas fa-arrow-circle-right"
            onClick={() => slider.next()}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
