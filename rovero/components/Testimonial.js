"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <div className="testimonial-area testimonial-bg position-relative">
      <div className="container hm1-testi-padding pt-110">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9  col-sm-12 col-12">
            <div className="title text-center">
              <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                Testimonial &amp; Review
              </span>
              <h2 className="mb-22">What People Say</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius mod tempor tomar keu kidite paro
              </p>
            </div>
            {/* /title */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
        <div
          className="testimonial-wrapper  aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <Slider
            {...sliderProps.testimonialActive}
            className="row testimonial-active main-style mt-65 pb-65 justify-content-center"
          >
            <div className="px-3">
              <div className="single-testimonial bg-white text-center position-relative pt-30 pb-45 pl-30 pr-30 mt-50 mb-20 transition5">
                <div className="client-img rounded-circle text-center position-absolute">
                  <img
                    className="rounded-circle"
                    src="images/testimonial/hm1-author-img1.jpg"
                    alt="image"
                  />
                </div>
                {/* /testi-avatar */}
                <ul className="review-ratting mt-45 mb-20">
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
                {/* /review-ratting */}
                <p>
                  Toma onsectetur adipisicing elit, sed do eiusmod tiusmod
                  tempor incidi dunt ut labore et dolore
                </p>
                <div className="testi-info text-center mt-30">
                  <h5 className="mb-1">Richard Moore</h5>
                  <span className="meta-text-color mb-0">Journalist</span>
                </div>
                {/* /testi-info */}
              </div>
              {/* /single-testimonial */}
            </div>
            {/* /col */}
            <div className="px-3">
              <div className="single-testimonial bg-white text-center position-relative pt-30 pb-45 pl-30 pr-30 mt-50 mb-20 transition5">
                <div className="client-img rounded-circle text-center position-absolute">
                  <img
                    className="rounded-circle"
                    src="images/testimonial/hm1-author-img2.jpg"
                    alt="image"
                  />
                </div>
                {/* /testi-avatar */}
                <ul className="review-ratting mt-45 mb-20">
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
                {/* /review-ratting */}
                <p>
                  Toma onsectetur adipisicing elit, sed do eiusmod tiusmod
                  tempor incidi dunt ut labore et dolore
                </p>
                <div className="testi-info text-center mt-30">
                  <h5 className="mb-1">Maria Jennifer</h5>
                  <span className="meta-text-color mb-0">Traveller</span>
                </div>
                {/* /testi-info */}
              </div>
              {/* /single-testimonial */}
            </div>
            {/* /col */}
            <div className="px-3">
              <div className="single-testimonial bg-white text-center position-relative pt-30 pb-45 pl-30 pr-30 mt-50 mb-20 transition5">
                <div className="client-img rounded-circle text-center position-absolute">
                  <img
                    className="rounded-circle"
                    src="images/testimonial/hm1-author-img3.jpg"
                    alt="image"
                  />
                </div>
                {/* /testi-avatar */}
                <ul className="review-ratting mt-45 mb-20">
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
                {/* /review-ratting */}
                <p>
                  Toma onsectetur adipisicing elit, sed do eiusmod tiusmod
                  tempor incidi dunt ut labore et dolore
                </p>
                <div className="testi-info text-center mt-30">
                  <h5 className="mb-1">Tomas Anderson</h5>
                  <span className="meta-text-color mb-0">UX Developer</span>
                </div>
                {/* /testi-info */}
              </div>
              {/* /single-testimonial */}
            </div>
            {/* /col */}
            <div className="px-3">
              <div className="single-testimonial bg-white text-center position-relative pt-30 pb-45 pl-30 pr-30 mt-50 mb-20 transition5">
                <div className="client-img rounded-circle text-center position-absolute">
                  <img
                    className="rounded-circle"
                    src="images/testimonial/hm1-author-img1.jpg"
                    alt="image"
                  />
                </div>
                {/* /testi-avatar */}
                <ul className="review-ratting mt-45 mb-20">
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
                {/* /review-ratting */}
                <p>
                  Toma onsectetur adipisicing elit, sed do eiusmod tiusmod
                  tempor incidi dunt ut labore et dolore
                </p>
                <div className="testi-info text-center mt-30">
                  <h5 className="mb-1">Jessica Parker</h5>
                  <span className="meta-text-color mb-0">Designer</span>
                </div>
                {/* /testi-info */}
              </div>
              {/* /single-testimonial */}
            </div>
            {/* /col */}
            <div className="px-3">
              <div className="single-testimonial bg-white text-center position-relative pt-30 pb-45 pl-30 pr-30 mt-50 mb-20 transition5">
                <div className="client-img rounded-circle text-center position-absolute">
                  <img
                    className="rounded-circle"
                    src="images/testimonial/hm1-author-img2.jpg"
                    alt="image"
                  />
                </div>
                {/* /testi-avatar */}
                <ul className="review-ratting mt-45 mb-20">
                  <li>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                    <span>
                      <i className="fa fa-star" />
                    </span>
                  </li>
                </ul>
                {/* /review-ratting */}
                <p>
                  Toma onsectetur adipisicing elit, sed do eiusmod tiusmod
                  tempor incidi dunt ut labore et dolore
                </p>
                <div className="testi-info text-center mt-30">
                  <h5 className="mb-1">Richard Moore</h5>
                  <span className="meta-text-color mb-0">Journalist</span>
                </div>
                {/* /testi-info */}
              </div>
              {/* /single-testimonial */}
            </div>
            {/* /col */}
          </Slider>
          {/* /row */}
        </div>
        {/* /testimonial-wrapper */}
      </div>
      {/* /container */}
    </div>
  );
};
export default Testimonial;
