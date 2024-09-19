"use client";
import config from "@/utility/config";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="slider-area hm2 position-relative over-hidden">
      <Slider {...sliderProps.home1} className="slider-active">
        {config.tile.map((item, index) => (
          <div
            key={index}
            className="single-slider slider-height2 d-flex align-items-center z-index1 position-relative"
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
            <div className="container position-relative">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12">
                  <div className="slider-content slider-content1 text-center px-4 py-5 bg-black bg-opacity-50 rounded">
                    <span className="text-white text-uppercase font-weight-bold mb-3 d-block">
                      {item.heading}
                    </span>
                    <h1
                      className="text-white mb-4 display-4 font-weight-bold"
                      data-aos="fade-up"
                      data-aos-duration={2000}
                      data-aos-delay={150}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-white mb-5 lead"
                      data-aos="fade-up"
                      data-aos-duration={1700}
                    >
                      {item.description}
                    </p>
                    <div className="d-inline-block">
                      <Link href={item.buttonLink || "/rooms"} className="btn btn-lg btn-primary">
                        {item.buttonText || "Book Now"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
