import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import spnsr1 from "../../../public/spnsr1.png"
import spnsr2 from "../../../public/spnsr2.png"
import spnsr3 from "../../../public/spnsr3.png"
import spnsr4 from "../../../public/spnsr4.png"
import spnsr5 from "../../../public/spnsr5.png"
import spnsr6 from "../../../public/spnsr6.png"
import spnsr7 from "../../../public/spnsr7.png"
import spnsr8 from "../../../public/spnsr8.png"
import spnsr9 from "../../../public/spnsr9.png"
const Sponsors = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Set arrows to false to hide them
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
      }]
    };

  const images = [
    spnsr1,
spnsr2,
spnsr3,
 spnsr4,
spnsr5 ,
spnsr6,
 spnsr7 ,
 spnsr8 ,
 spnsr9 ,
  ];

  return (
    <div className=" lg:w-[85%] h-fit mt-12  m-auto p-10 flex flex-col gap-6 ">
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="   h-min  lg:px-14 px-2  ">
            <img src={image} className="w-full max-w-md lg:w-full h-full " alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
