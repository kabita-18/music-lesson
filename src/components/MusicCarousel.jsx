import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import { BsFillMicMuteFill } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function MusicCarousel({ data }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group absolute top-0 right-0">
        <button
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button onClick={() => next()}>
          <IoIosArrowForward />
        </button>
      </div>
    );
  };

  return (
    <div className="w-full relative">
      <div className="mt-4">
        <h5 className="font-bold text-xl" onClick={() => console.log("asasas")}>
          Community
        </h5>
      </div>
      <Carousel
        containerClass="w-full"
        itemClass="w-[200px] max-w-[200px] mr-2"
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {data.map((item, index) => (
          <div key={index} className="w-full rounded hover:shadow-2xl relative">
            <img
              src={item.image}
              className="rounded-2xl w-[200px]"
              alt="guitar"
            />
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MusicCarousel;
