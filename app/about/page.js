import Brand from "@/components/Brand";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
import { pages, gallery } from "@/utility/config";

const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="About"
        pageTitle={pages.about.title}
        pageSubTitle={pages.about.description}
        bgImage={pages.about.image}
      />
      {/* ====== about-page-area-start =============================================== */}
      <div className="about-page-area mt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10  col-md-12  col-sm-12 col-12">
              <div className="section-content-title text-center">
                <span className="text-uppercase theme-color f-700 fontNoto pb- d-block mb-6">
                  We are awesome
                </span>
                <h2 className="mb-0">Welcome to The World of Cloud9!</h2>
              </div>
              {/* /section-title */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="row about-page-wrapper d-flex mt-55">
            <div className="col-xl-5  col-lg-6 col-md-5  col-sm-12 col-12">
              <div className="about-page-left position-relative">
                <p>
                This contemporary hotel in the city centre is 3 km from the alwar railway station, 3 km from the architecturally significant moosi maharani ki chhatri palace and 10 km from the 16 th century alwar fort.{" "}
                </p>
              </div>
              {/* /about-page-left */}
            </div>
            {/* /col */}
            <div className="col-xl-6 offset-xl-1  col-lg-6 col-md-7  col-sm-12 col-12">
              <div className="about-page-right">
                <p className="mb-30">
                Beautiful room have free Wi Fi,flat screen TV and tea and coffee makers,as well as mini fridge and intercom upgrade add sitting area and open Terris lawn; suite provide living room.{" "}
                </p>
                {/* <p className="mb-0">
                  Ut enim ad minim veniam, quis nos trud exercitation ullamco
                  laboris nisi ut alied do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.{" "}
                </p> */}
              </div>
              {/* /about-page right */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* about-page-area-end  */}
      {/* ====== about-photo-gallery-area-start =============================================== */}
      <div className="about-photo-gallery-area mt-105 mb-100">
        <div className="container-fluid p-md-0">
          <div className="about-gallery-slider-active">
            <ul className="w-100 about-photo-gallery-wrapper">
              <li className="row d-flex about-photo-gallery-wrapper moveSlideshow no-gutters align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-md-inline-block d-sm-flex d-inline-block align-items-center">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img className="w-100" src={gallery[0]} alt="gallery image 01" />
                  </div>
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img className="w-100" src={gallery[1]} alt="gallery image 02" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[2]} alt="gallery image 03" />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[3]} alt="gallery image 04" />
                  </div>
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[4]} alt="gallery image 05" />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[5]} alt="gallery image 06" />
                  </div>
                </div>
              </li>
            </ul>
            {/* Duplicate gallery for larger screens */}
            <ul className="w-100 about-photo-gallery-wrapper d-none d-md-inline-block">
              <li className="row d-flex about-photo-gallery-wrapper moveSlideshow no-gutters align-items-center">
                {/* Same structure as above, but with different gallery images */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-md-inline-block d-sm-flex d-inline-block align-items-center">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img className="w-100" src={gallery[6]} alt="gallery image 07" />
                  </div>
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img className="w-100" src={gallery[7]} alt="gallery image 08" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[8]} alt="gallery image 09" />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[9]} alt="gallery image 10" />
                  </div>
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[10]} alt="gallery image 11" />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img className="w-100" src={gallery[11]} alt="gallery image 12" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* /container */}
      </div>
      {/* about-photo-gallery-area-end  */}
      {/* ====== choose-us-area-start =============================================== */}
      <div className="why-choose-us-area mb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8  col-md-9  col-sm-12 col-12">
              <div className="title text-center">
                <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                  We are Awesome
                </span>
                <h2 className="mb-22">Our Speciality</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eius mod tempor tomar keu kidite paro
                </p>
              </div>
              {/* /title */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="row choose-us-wrapper mt-50">
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon1.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">24/7 Hours Open</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon2.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Great Environment</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon3.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Free Car Parking</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon4.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Luxurious Pool</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon5.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Kidz Fantacy Park</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="images/icon/ab-choose-icon6.png" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Offer on Special Days</Link>
                  </h5>
                  <p className="mb-0">
                    cididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercita
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
          </div>
          {/* /why-choose-us-content */}
        </div>
        {/* /container */}
      </div>
      {/* choose-us-area-end */}
      {/* <Testimonial />
      <Brand />
      <Subscribe /> */}
    </RoveroLayout>
  );
};
export default page;
