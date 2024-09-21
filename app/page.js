import Brand from "@/components/Brand";
import News from "@/components/News";
import Rooms from "@/components/Rooms";
import { Hero } from "@/components/slider/Hero";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";

import {offers} from '@/utility/config';
const page = () => {
  
  return (
    <RoveroLayout>
      <main className="over-hidden">
        {/* ======slider-area-start =========================================== */}
        <Hero />
        {/* slider-area-end  */}
        {/* ====== hm2-intro-hotel-search-area-start =============================================== */}
        <div className="hm2-intro-hotel-search-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11  col-md-12  col-sm- col-">
              
                {/* /check-in-form */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /hm2-intro-hotel-search-area */}
        {/* ====== about-area-start =============================================== */}
        <div className="about-hm2-area hm2 mt-60 md:mt-40 over-hidden position-relative" style={{
          marginTop: '100px',
          marginBottom: '100px'
        }}>
         
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9 col-sm-12 col-12">
                <div className="title text-center mb-8 md:mb-12"> {/* Added margin bottom */}
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    We are champ
                  </span>
                  <h2 className="mb-0 text-2xl md:text-3xl lg:text-4xl">Welcome to Cloud9</h2>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row about-hm2-wrapper flex-column-reverse flex-lg-row justify-content-center align-items-center mt-8 md:mt-12 lg:mt-16 img-hover-effect-wrapper"> {/* Changed flex direction for mobile */}
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12 mb-8 lg:mb-0"> {/* Adjusted column sizes and added margin bottom for mobile */}
                <div className="about-hm2-img position-relative over-hidden img-hover-effect2">
                  <img
                    className="tilt w-full"
                    //src="images/about/hm2-about-img.jpg"
                    src="images/about/MD.png"
                    alt="about image"
                  />
                </div>
                {/* /about-img */}
              </div>
              {/* /col */}
              <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12 pl-lg-4 pl-xl-5" style={{
          marginTop: '100px',
          marginBottom: '100px'
        }}> {/* Adjusted padding */}
                <div className="about-hm2-content">
                  <div className="section-content-title mt-4 lg:mt-0"> {/* Added margin top for mobile */}
                    <span className="text-uppercase theme-color f-700 fontNoto mb-2 block">
                      Experience
                    </span>
        
                    <p className="mb-4">
                    This contemporary hotel in the city centre is 3 km from the alwar railway station, 3 km from the architecturally significant moosi maharani ki chhatri palace and 10 km from the 16 th century alwar fort.
                    </p>
                    <p>
                    Beautiful room have free Wi Fi,flat screen TV and tea and coffee makers,as well as mini fridge and intercom upgrade add sitting area and open Terris lawn; suite provide living room.{" "}
                    </p>
                  </div>
                  {/* /section-title */}
                  <div className="about-footer-content flex flex-col sm:flex-row items-center mt-6 sm:mt-8"> {/* Adjusted layout for mobile */}
                    <div className="signature pb-4 sm:pb-0 sm:pr-8">
                      <img src="images/about/signature.png" alt="signature" className="max-w-full h-auto" /> {/* Made image responsive */}
                    </div>
                    <div className="about-footer-content-right text-center sm:text-left">
                      <h6 className="pr-2 mb-0">Pawan Kumar Jain</h6>
                      <span className="meta-text-color">Managing Director</span>
                    </div>
                  </div>
                  {/* /about-footer-content */}
                </div>
                {/* /about content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* about-hm2-area-end  */}
        {/* ====== rooms-area-start =============================================== */}
        <div className="rooms-hm2-area hm2 mt-60 md:mt-80 mb-60 md:mb-80">
         
          <div className="container-fluid container-wrapper p-md-0">
                <Rooms />
          </div>
          {/* /container */}
        </div>
        {/* rooms-hm2-area-end  */}
        {/* ====== offer-area-start =========================================== */}
        {offers.length > 0 && (
          <div className="offer-area hm2 section-bg over-hidden pt-115 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-9  col-sm-12 col-12">
                  <div className="title text-center">
                    <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                      Its Awesome
                    </span>
                    <h2 className="mb-0">Special Offers</h2>
                  </div>
                </div>
              </div>
              <div className="row offer-wrapper align-items-center justify-content-center mt-85">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-9 col-12 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div
                      className="single-offer-wrapper position-relative transition5 zoom-img-hover over-hidden transition3 d-flex align-items-center mb-30"
                      data-overlay={2}
                    >
                      <div className="offer-hm2-img w-100 position-relative transition5">
                        <img
                          className="img w-100"
                          src={offer.image}
                          alt={offer.title}
                        />
                      </div>
                      {/* /blog-img */}
                      <div className="offer-hm2-content position-absolute text-center transition5 z-index1 w-100 h-100">
                        <div className="offer-hm2-text1 transition5 position-absolute w-100 top-0 transition5 pl-30 pr-30 pt-40">
                          <div className="offer-hm2-text-hover1 transition5">
                            <h5 className="text-white mb-6">
                              <Link href="room-details ">{offer.title}</Link>
                            </h5>
                            <p className="text-white">{offer.description}</p>
                          </div>
                          {/* /text-hover */}
                        </div>
                        {/* /offer text */}
                        <div className="offer-hm2-text2 position-absolute w-100 bottom-0 transition5 pt-45 pb-45">
                          <div className="offer-hm2-text-hover transition5">
                            <div className="room-price">
                              <p className="text-white d-block mb-0">Starts From</p>
                              <span className="text-white f-700 fontNoto d-block">${offer.price}</span>
                              <span className="room-price text-white d-block mt-2">{offer.duration}</span>
                            </div>
                            {/* /room-price-details */}
                          </div>
                          {/* /text-hover */}
                        </div>
                        {/* /offer text */}
                        <div className="offer-hm2-text3 position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pb-50">
                          <div className="my-btn2 d-inline-block offer-btn transition5">
                            <Link
                              href="rooms-details"
                              className="btn  position-relative rounded-0 transition5"
                            >
                              book now
                            </Link>
                          </div>
                          {/* / btn */}
                        </div>
                        {/* /offer text */}
                      </div>
                      {/* /offer content */}
                    </div>
                    {/* /single-offer */}
                  </div>
                ))}
              </div>
              {/* /row */}
              <div className="promao-offer d-sm-flex justify-content-center align-items-center pt-32 text-center">
                <h5 className="pr-45">Need A Custom Offer ?</h5>
                <div className="my-btn d-inline-block">
                  <Link href="rooms-details" className="btn theme-bg w-100">
                    Contact us
                  </Link>
                </div>
                {/* / btn */}
              </div>
            </div>
            {/* /container */}
          </div>
        )}
        {/* offer-area -end */}
        {/* ====== testimonial-area-start =============================================== */}
    
        {/* testimonial-area -end */}
        {/* ====== brand-area-start =============================================== */}
        {/* <Brand /> */}

 
      </main>
    </RoveroLayout>
  );
};
export default page;
