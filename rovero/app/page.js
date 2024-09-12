"use client";
import Brand from "@/components/Brand";
import News from "@/components/News";
import Hero1 from "@/components/slider/Hero1";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <RoveroLayout homeClass="hm1">
      <main className="over-hidden">
        {/* ======slider-area-start =========================================== */}
        <Hero1 />
        {/* slider-area-end  */}
        {/* ====== intro-area-start =============================================== */}
        <div className="intro-area home1 mt-115 mb-75">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7  col-md-9  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    We are champ
                  </span>
                  <h2 className="mb-22">Our Special Services</h2>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor tomar keu kidite paro
                  </p> */}
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row white-bg single-intro-service-wrapper justify-content-center pt-70">
              <div className="col-xl-4  col-lg-4 col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon1.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Luxurious Rooms</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>
              {/* /col */}
              <div className="col-xl-4  col-lg-4  col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon2.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Quality Service</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>
              {/* /col */}
              <div className="col-xl-4  col-lg-4  col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon3.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Great Environment</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>

              <div className="col-xl-4  col-lg-4 col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon1.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Luxurious Rooms</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>
              {/* /col */}
              <div className="col-xl-4  col-lg-4  col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon2.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Quality Service</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>
              {/* /col */}
              <div className="col-xl-4  col-lg-4  col-md-4  col-sm-9 col-12">
                <div className="single-intro-content text-center white-bg transition5 mb-40">
                  <div className="intro-ser-icon theme-bg d-inline-block text-center mb-40 transition5">
                    <span>
                      <img src="images/icon/inrto-icon3.png" alt="" />
                    </span>
                  </div>
                  {/* /intro ser-icon */}
                  <div className="intro-service-text">
                    <h3 className="mb-22">Great Environment</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incid idunt ut labore et dolore
                      magna
                    </p>
                  </div>
                </div>
                {/* /single-service-content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* intro-area-end  */}
        {/* ====== room-search-area-start =========================================== */}
        <div className="room-search-area home1 section-bg position-relative over-hidden pt-115 pb-120">
          <div
            className="room-search-bg-img position-absolute right-0 top-0 bottom-0"
            data-background="images/room/hm1-room-search-img.jpg"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12"
                data-aos="fade-right"
                data-aos-duration={2000}
                data-aos-delay={150}
              >
                <div className="room-search-content-left mt--5 mb-md-5 mb-4 mb-lg-0">
                  <div className="section-content-title">
                    <span className="text-uppercase theme-color f-700 fontNoto mb-2">
                      It is awesome
                    </span>
                    <h2 className="mb-40">Check All Amazing Rooms for You</h2>
                    <p>
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco
                    </p>
                  </div>
                  {/* /section-title */}
                </div>
                {/* /room-search-content-left */}
              </div>
              {/* /col */}
              <div
                className="col-xl-5 col-lg-5 offset-lg-2 col-md-6  col-sm-10 col-12 pl-xl-0"
                data-aos="fade-left"
                data-aos-duration={2000}
                data-aos-delay={150}
              >
                <div className="room-search-content-right position-relative">
                  <div className="form-hotel-search">
                    <form>
                      <label
                        htmlFor="checkIn"
                        className="text-white d-block fontNoto f-700 mb-10"
                      >
                        CHECK IN
                      </label>
                      <div className="check-in mb-25 position-relative">
                        <input
                          type="date"
                          className="datepicker primary-color w-100"
                          id="checkIn"
                          placeholder="24 April, 24"
                          disabled=""
                        />
                      </div>
                      {/* /check-in */}
                      <label
                        htmlFor="checkOut"
                        className="text-white d-block fontNoto f-700 mb-10"
                      >
                        CHECK OUT
                      </label>
                      <div className="check-out mb-25 position-relative text-right">
                        <input
                          type="date"
                          className="datepicker primary-color w-100"
                          id="checkOut"
                          placeholder="24 April, 24"
                          disabled=""
                        />
                      </div>
                      {/* /check-out */}
                      <div className="check-guests-form">
                        <div className="course-filter mb-30">
                          <label
                            htmlFor="exampleFormControlSelect3"
                            className="text-white d-block fontNoto f-700 mb-10"
                          >
                            GUESTS
                          </label>
                          <select
                            className="white-bg primary-color w-100 border-0 pl-0 rounded-0 mb-30"
                            id="exampleFormControlSelect3"
                          >
                            <option value="menu_order" selected="selected">
                              02
                            </option>
                            <option value="popularity">03</option>
                            <option value="rating">04</option>
                            <option value="date">05</option>
                            <option value="price">06</option>
                          </select>
                        </div>
                      </div>
                      {/* /check-guests-form */}
                      <div className="my-btn d-block form-search-btn w-100">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          Check Availability
                        </Link>
                      </div>
                      {/* / btn */}
                    </form>
                  </div>
                  {/* /check-in-form */}
                </div>
                {/* /room-search-right */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* room-search-area -end */}
        {/* ====== room-area-start =============================================== */}
        <div className="room-hm1-area mt-115 mb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7  col-md-9  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    Live a luxurious life
                  </span>
                  <h2 className="mb-22">Best Quality Rooms</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor tomar keu kidite paro
                  </p>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <Slider
              {...sliderProps.roomsHm1Active}
              className="rooms-hm1-active main-style justify-content-center pt-70 pb-50"
            >
              <div className="px-3">
                <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-30">
                  <div className="room-hm1-img over-hidden transition5">
                    <img
                      className="w-100 img"
                      src="images/room/hm1-rooms-img1.jpg"
                      alt="room image 01"
                    />
                  </div>
                  {/* /room-hm1-img */}
                  <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                    <h4 className="mb-10">
                      <Link href="rooms-details">Simple Single Room</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adip khobor nio
                      na
                    </p>
                    <div className="room-price-details d-flex align-items-center justify-content-between mt-25">
                      <div className="room-price">
                        <span className="room-price f-700 main-color fontNoto">
                          <span className="text-uppercase theme-color pr-1">
                            $199
                          </span>
                          / Night
                        </span>
                      </div>
                      {/* /room-price-details */}
                      <div className="my-btn d-inline-block">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          details
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /room-price-details */}
                  </div>
                  {/* /room-hm1-content */}
                </div>
                {/* /single-room-hm1 */}
              </div>
              {/* /col */}
              <div className="px-3">
                <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-30">
                  <div className="room-hm1-img over-hidden transition5">
                    <img
                      className="w-100 img"
                      src="images/room/hm1-rooms-img2.jpg"
                      alt="room image 02"
                    />
                  </div>
                  {/* /room-hm1-img */}
                  <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                    <h4 className="mb-10">
                      <Link href="rooms-details">Luxurious Single Room</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adip khobor nio
                      na
                    </p>
                    <div className="room-price-details d-flex align-items-center justify-content-between mt-25">
                      <div className="room-price">
                        <span className="room-price f-700 main-color fontNoto">
                          <span className="text-uppercase theme-color pr-1">
                            $299
                          </span>
                          / Night
                        </span>
                      </div>
                      {/* /room-price-details */}
                      <div className="my-btn d-inline-block">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          details
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /room-price-details */}
                  </div>
                  {/* /room-hm1-content */}
                </div>
                {/* /single-room-hm1 */}
              </div>
              {/* /col */}
              <div className="px-3">
                <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-30">
                  <div className="room-hm1-img over-hidden transition5">
                    <img
                      className="w-100 img"
                      src="images/room/hm1-rooms-img3.jpg"
                      alt="room image 03"
                    />
                  </div>
                  {/* /room-hm1-img */}
                  <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                    <h4 className="mb-10">
                      <Link href="rooms-details">Simple Single Room</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adip khobor nio
                      na
                    </p>
                    <div className="room-price-details d-flex align-items-center justify-content-between mt-25">
                      <div className="room-price">
                        <span className="room-price f-700 main-color fontNoto">
                          <span className="text-uppercase theme-color pr-1">
                            $399
                          </span>
                          / Night
                        </span>
                      </div>
                      {/* /room-price-details */}
                      <div className="my-btn d-inline-block">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          details
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /room-price-details */}
                  </div>
                  {/* /room-hm1-content */}
                </div>
                {/* /single-room-hm1 */}
              </div>
              {/* /col */}
              <div className="px-3">
                <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-30">
                  <div className="room-hm1-img over-hidden transition5">
                    <img
                      className="w-100 img"
                      src="images/room/hm1-rooms-img1.jpg"
                      alt="room image 01"
                    />
                  </div>
                  {/* /room-hm1-img */}
                  <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                    <h4 className="mb-10">
                      <Link href="rooms-details">Simple Single Room</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adip khobor nio
                      na
                    </p>
                    <div className="room-price-details d-flex align-items-center justify-content-between mt-25">
                      <div className="room-price">
                        <span className="room-price f-700 main-color fontNoto">
                          <span className="text-uppercase theme-color pr-1">
                            $199
                          </span>
                          / Night
                        </span>
                      </div>
                      {/* /room-price-details */}
                      <div className="my-btn d-inline-block">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          details
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /room-price-details */}
                  </div>
                  {/* /room-hm1-content */}
                </div>
                {/* /single-room-hm1 */}
              </div>
              {/* /col */}
              <div className="px-3">
                <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-30">
                  <div className="room-hm1-img over-hidden transition5">
                    <img
                      className="w-100 img"
                      src="images/room/hm1-rooms-img2.jpg"
                      alt="room image 02"
                    />
                  </div>
                  {/* /room-hm1-img */}
                  <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                    <h4 className="mb-10">
                      <Link href="rooms-details">Luxurious Single Room</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adip khobor nio
                      na
                    </p>
                    <div className="room-price-details d-flex align-items-center justify-content-between mt-25">
                      <div className="room-price">
                        <span className="room-price f-700 main-color fontNoto">
                          <span className="text-uppercase theme-color pr-1">
                            $299
                          </span>
                          / Night
                        </span>
                      </div>
                      {/* /room-price-details */}
                      <div className="my-btn d-inline-block">
                        <Link
                          href="rooms-details"
                          className="btn theme-bg w-100"
                        >
                          details
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /room-price-details */}
                  </div>
                  {/* /room-hm1-content */}
                </div>
                {/* /single-room-hm1 */}
              </div>
              {/* /col */}
            </Slider>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* room-hm1-area-end  */}
        {/* ====== video-area-start =============================================== */}
        <div
          className="video-area primary-bg position-relative z-index1 video-bg-overlay"
          data-background="images/bg/hm1-video-bg.jpg"
        >
          <div className="container">
            <div className="row video-wrapper justify-content-center pt-110 pb-110">
              <div className="col-xl-8 col-lg-9  col-md-12  col-sm-12 col-12">
                <div className="video-content-wrapper text-center">
                  <div className="section-content-title">
                    <span className="text-uppercase text-white f-700 fontNoto mb-2">
                      Amazing Lifestyle
                    </span>
                    <h2 className="mb-40 text-white">
                      Watch Your Life at Rovero
                    </h2>
                    <p className="text-white">
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco
                    </p>
                  </div>
                  {/* /section-title */}
                  <div className="video-btn mt-85 d-none">
                    <a
                      data-fancybox=""
                      href="https://youtu.be/pswdTJ59fdQ"
                      className="circle-animation"
                    >
                      <div className="video-play-wrap position-relative">
                        <div className="video-mark">
                          <div className="wave-pulse wave-pulse-1" />
                          <div className="wave-pulse wave-pulse-2" />
                        </div>
                        <div className="video-play position-relative text-center text-white z-index1">
                          <i className="fas fa-play" />
                        </div>
                      </div>
                    </a>
                    <span className="text-white text-uppercase d-block f-700 mt-20">
                      play now
                    </span>
                  </div>
                  {/* /video-btn */}
                  <div className="video-btn mt-85">
                    <div className="video-main z-index1">
                      <div className="promo-video">
                        <div className="waves-block">
                          <div className="waves wave-1" />
                          <div className="waves wave-2" />
                          <div className="waves wave-3" />
                        </div>
                      </div>
                      <a
                        data-fancybox=""
                        href="https://youtu.be/pswdTJ59fdQ"
                        className="video video-popup mfp-iframe"
                        data-lity=""
                      >
                        <span>
                          <i className="fa fa-play" />
                        </span>
                      </a>
                    </div>
                    <span className="text-white text-uppercase d-block f-700 mt-50">
                      play now
                    </span>
                  </div>
                </div>
                {/* /video-content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* video-area-end  */}
        {/* ====== feature-area-start =============================================== */}
        <div className="feature-hm1-area mt-115 mb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7  col-md-9  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    Live a luxurious life
                  </span>
                  <h2 className="mb-22">Best Quality Rooms</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eius mod tempor tomar keu kidite paro
                  </p>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <Slider
              {...sliderProps.featureHm1Active}
              className="feature-hm1-active mt-70"
            >
              <div className="row feature-hm1-wrapper d-flex justify-content-center align-items-center pb-90 img-hover-effect-wrapper">
                <div className="col-xl-5  col-lg-5 col-md-5  col-sm-10 col-12">
                  <div className="feature-hm1-img position-relative img-hover-effect2">
                    <img
                      src="images/bg/hm1-feature-img.jpg"
                      alt="room image 01"
                    />
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
                <div className="col-xl-6 offset-lg-1  col-lg-6 col-md-7  col-sm-10 col-12">
                  <div className="feature-hm1-content">
                    <div className="section-content-title">
                      <span className="text-uppercase theme-color f-700 fontNoto mb-2">
                        Enjoy your life
                      </span>
                      <h2 className="mb-40">
                        <Link href="rooms-details">
                          Relux in Our Amazing Swiming Pool
                        </Link>
                      </h2>
                      <p>
                        Bipor incididunt ut labore et dolore magna liqu Ut enim
                        ad teros ut labore et dolore magna aliqua. Ut enim ad t,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore{" "}
                      </p>
                    </div>
                    {/* /section-title */}
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
              <div className="row feature-hm1-wrapper d-flex justify-content-center align-items-center pb-90 img-hover-effect-wrapper">
                <div className="col-xl-5  col-lg-5 col-md-5  col-sm-10 col-12">
                  <div className="feature-hm1-img position-relative img-hover-effect2">
                    <img
                      src="images/bg/hm1-feature-img2.jpg"
                      alt="room image 02"
                    />
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
                <div className="col-xl-6 offset-lg-1  col-lg-6 col-md-7  col-sm-10 col-12">
                  <div className="feature-hm1-content">
                    <div className="section-content-title">
                      <span className="text-uppercase theme-color f-700 fontNoto mb-2">
                        Enjoy your life
                      </span>
                      <h2 className="mb-40">
                        <Link href="rooms-details">
                          Relux in Our Amazing Swiming Pool
                        </Link>
                      </h2>
                      <p>
                        Bipor incididunt ut labore et dolore magna liqu Ut enim
                        ad teros ut labore et dolore magna aliqua. Ut enim ad t,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore{" "}
                      </p>
                    </div>
                    {/* /section-title */}
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
              <div className="row feature-hm1-wrapper d-flex justify-content-center align-items-center pb-90 img-hover-effect-wrapper">
                <div className="col-xl-5  col-lg-5 col-md-5  col-sm-10 col-12">
                  <div className="feature-hm1-img position-relative img-hover-effect2">
                    <img
                      src="images/bg/hm1-feature-img3.jpg"
                      alt="room image 03"
                    />
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
                <div className="col-xl-6 offset-lg-1  col-lg-6 col-md-7  col-sm-10 col-12">
                  <div className="feature-hm1-content">
                    <div className="section-content-title">
                      <span className="text-uppercase theme-color f-700 fontNoto mb-2">
                        Enjoy your life
                      </span>
                      <h2 className="mb-40">
                        <Link href="rooms-details">
                          Relux in Our Amazing Swiming Pool
                        </Link>
                      </h2>
                      <p>
                        Bipor incididunt ut labore et dolore magna liqu Ut enim
                        ad teros ut labore et dolore magna aliqua. Ut enim ad t,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore{" "}
                      </p>
                    </div>
                    {/* /section-title */}
                  </div>
                  {/* /single-room-hm1 */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
            </Slider>
            {/* /feature-hm1-active */}
          </div>
          {/* /container */}
        </div>
        {/* feature-hm1-area-end  */}
        {/* ====== testimonial-area-start =============================================== */}
        <Testimonial />
        {/* testimonial-area -end */}
        {/* ====== brand-area-start =============================================== */}
        <Brand />
      
      </main>
    </RoveroLayout>
  );
};
export default page;
