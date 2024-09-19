"use client";
import config from "@/utility/config";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

export const Hero = () => {
  return (
    <div className="slider-area hm2 position-relative over-hidden">
      <Slider {...sliderProps.home1} className="slider-active">
        <div
          className="single-slider slider-height2 d-flex align-items-center z-index1 black-overly"
          data-background= {config.image}
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
