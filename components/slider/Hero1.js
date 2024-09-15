"use client";
import config from "@/utility/config";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  return (
    <div className="slider-area hm1 position-relative over-hidden">
      <Slider {...sliderProps.home1} className="slider-active">
        {config.tile.map((slide, index) => (
          <div key={index} className="single-slider single-slider1 slider-height1 d-flex align-items-end z-index1 img-hover-effect-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6  col-md-7  col-sm-12 col-12">
                  <div className="slider-content slider-content1 mt--10 mr-xl-2 position-relative">
                    <span className="theme-color text-uppercase fontNoto f-700">
                      {slide.heading}
                    </span>
                    <h1
                      className="mb-30 mt-1 f-700"
                      data-aos="fade-right"
                      data-aos-duration={2000}
                      data-aos-delay={150}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="mb-45"
                      data-aos="fade-right"
                      data-aos-duration={1700}
                    >
                      {slide.description}
                    </p>
                    <div className="my-btn d-inline-block">
                      <Link href="rooms-details" className="btn theme-bg">
                        book now
                      </Link>
                    </div>
                    {/* / btn */}
                  </div>
                  {/* /slider-content */}
                </div>
                {/* /col */}
                <div className="col-xl-5 col-lg-5 offset-lg-1  col-md-5  col-sm-12 col-12">
                  <div className="slider-img hm1-slider-img img-hover-effect2 over-hidden position-relative">
                    <img
                      className="heartbeat"
                      src={slide.image}
                      alt="hero image"
                    />
                  </div>
                  {/* /slider-img */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
        ))}
      </Slider>
      {/* /slider-active */}
      <div className="hero-dotted position-absolute bottom-0 z-index-1 d-none d-md-block">
        <img src="images/hero/hm1-hero-dotted.png" alt="" />
      </div>
    </div>
  );
};

export default Hero1;

export const Hero2 = () => {
  return (
    <div className="slider-area hm2 position-relative over-hidden">
      <Slider {...sliderProps.home1} className="slider-active">
        <div
          className="single-slider slider-height2 d-flex align-items-center z-index1 black-overly"
          data-background="images/hero/hm2-hero-bg-img1.jpg"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="slider-content slider-content1 mt-50 text-center px-sm--3">
                  <span className="text-white text-uppercase fontNoto f-700">
                    The Cloud9
                  </span>
                  <h1
                    className="text-white mb-30 f-700"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                    data-aos-delay={150}
                  >
                    {config.title}
                  </h1>
                  <p
                    className="text-white mb-55"
                    data-aos="fade-up"
                    data-aos-duration={1700}
                  >
                    {config.title}  
                  </p>
                  <div className="my-btn d-inline-block">
                    <Link href="/rooms" className="btn theme-bg">
                      book now
                    </Link>
                  </div>
                  {/* / btn */}
                </div>
                {/* /slider-content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /slider-height */}
      </Slider>
      {/* /slider-active */}
    </div>
  );
};
