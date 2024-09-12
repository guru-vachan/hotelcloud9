import Brand from "@/components/Brand";
import News from "@/components/News";
import { Hero2 } from "@/components/slider/Hero1";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <main className="over-hidden">
        {/* ======slider-area-start =========================================== */}
        <Hero2 />
        {/* slider-area-end  */}
        {/* ====== hm2-intro-hotel-search-area-start =============================================== */}
        <div className="hm2-intro-hotel-search-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11  col-md-12  col-sm- col-">
                <div className="form-hotel-search hm2-intro-hotel-search-bg bg-white">
                  <form>
                    <ul className="d-md-flex justify-content-lg-around">
                      <li className="hm2-single-intro-item">
                        <label
                          htmlFor="checkIn"
                          className="main-color d-block fontNoto f-700 mb-12 mt-35"
                        >
                          CHECK IN
                        </label>
                        <div className="check-in mb-40 position-relative">
                          <input
                            type="date"
                            className="datepicker primary-color w-100"
                            id="checkIn"
                            placeholder="24 April, 24"
                            disabled=""
                          />
                        </div>
                        {/* /check-in */}
                      </li>
                      <li className="hm2-single-intro-item">
                        <label
                          htmlFor="checkOut"
                          className="main-color d-block fontNoto f-700 mb-12 mt-35"
                        >
                          CHECK OUT
                        </label>
                        <div className="check-out mb-40 position-relative">
                          <input
                            type="date"
                            className="datepicker primary-color w-100"
                            id="checkOut"
                            placeholder="24 April, 24"
                            disabled=""
                          />
                        </div>
                        {/* /check-out */}
                      </li>
                      <li className="hm2-single-intro-item">
                        <div className="check-guests-form">
                          <div className="course-filter">
                            <label
                              htmlFor="exampleFormControlSelect3"
                              className="main-color d-block fontNoto f-700 mb-12 mt-35"
                            >
                              GUESTS
                            </label>
                            <select
                              className="white-bg primary-color w-100 border-0 px-0 rounded-0 mb-40"
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
                      </li>
                      <li className="hm2-single-intro-item px-md-0">
                        <div className="my-btn d-block form-search-btn w-100 h-100 mb-0">
                          <Link
                            href="rooms-details"
                            className="btn theme-bg w-100 h-100"
                          >
                            Check Availability
                          </Link>
                        </div>
                        {/* / btn */}
                      </li>
                    </ul>
                  </form>
                </div>
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
        <div className="about-hm2-area hm2 mt-115  over-hidden position-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7  col-md-9  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    We are champ
                  </span>
                  <h2 className="mb-0">Welcome to Rovero</h2>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row about-hm2-wrapper d-flex justify-content-center align-items-center mt-85 img-hover-effect-wrapper">
              <div className="col-xl-5  col-lg-6 col-md-5  col-sm-9 col-12">
                <div className="about-hm2-img position-relative over-hidden img-hover-effect2">
                  <img
                    className="tilt"
                    src="images/about/hm2-about-img.jpg"
                    alt="about image"
                  />
                </div>
                {/* /about-img */}
              </div>
              {/* /col */}
              <div className="col-xl-6 offset-xl-1  col-lg-6 col-md-7  col-sm-12 col-12 pl-lg-0 pl-xl-3">
                <div className="about-hm2-content">
                  <div className="section-content-title mt--10">
                    <span className="text-uppercase theme-color f-700 fontNoto mb-2">
                      The Hotellon
                    </span>
                    <h2 className="mb-40">
                      The Best Place to Live A Luxurious Life
                    </h2>
                    <p className="mb-25">
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut labore et dolore magna aliqua. Ut enim ad conse
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eius-mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad{" "}
                    </p>
                  </div>
                  {/* /section-title */}
                  <div className="about-footer-content d-sm-flex align-items-center mt-20">
                    <div className="signature pt-20 pr-45">
                      <img src="images/about/signature.png" alt="signature" />
                    </div>
                    <div className="about-footer-content-right mt-20 text-left">
                      <h6 className="d-inline-block pr-2 mb-0">Bruce Wayne</h6>
                      <span className="meta-text-color">Managin Director</span>
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
        <div className="rooms-hm2-area hm2 mt-120 mb-120">
          <div className="container-fluid container-wrapper p-md-0">
            <div className="row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-xl-0">
                <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
                  <img
                    className="w-100 img"
                    src="images/room/hm2-room-img1.jpg"
                    alt="room image 01"
                  />
                </div>
                {/* /room-hm2-img */}
              </div>
              {/* /col */}
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
                <div className="room-hm2-content mt--10 hm2-room-content-margin">
                  <div className="ratting-area d-flex align-items-center mb-xl-2">
                    <ul className="review-ratting">
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
                    {/* /ratting */}
                    <p className="mb-0 ml-15">12 Reviews</p>
                  </div>
                  {/* /ratting a */}
                  <div className="section-content-title">
                    <h2 className="mb-22">Simple Single Delux</h2>
                    <p>
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut bione bore et dolore magna aliqua. Ut enim ad
                      conm dolor
                    </p>
                  </div>
                  {/* /title */}
                  <div className="room-info-details mt-25">
                    <div className="room-price">
                      <p className="mr-20 d-inline-block mb-0">Starts From</p>
                      <span className="room-price f-700 main-color fontNoto text-uppercase ">
                        <span className="theme-color mr-2">$299</span>/ Night
                      </span>
                    </div>
                    {/* /room-price-details */}
                    <div className="room-info d-flex mt-22 mb-40">
                      <ul className="room-info-left pr-45">
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Status
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Payment
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Guest
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Beds
                          </span>
                        </li>
                      </ul>
                      <ul className="room-info-right">
                        <li>
                          <span>Available</span>
                        </li>
                        <li>
                          <span>30% Advanced</span>
                        </li>
                        <li>
                          <span>3</span>
                        </li>
                        <li>
                          <span>2</span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-btn d-inline-block pr-40">
                      <Link href="rooms-details" className="btn theme-bg w-100">
                        book now
                      </Link>
                    </div>
                    {/* / btn */}
                    <div className="my-btn2 d-inline-block position-relative transition5">
                      <Link
                        href="rooms-details"
                        className="btn position-relative rounded-0 transition5"
                      >
                        More Details
                      </Link>
                    </div>
                    {/* / btn */}
                  </div>
                  {/* /room-price-details */}
                </div>
                {/* /room-hm1-content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row rooms-hm2-wrapper rooms-hm2-wrapper2 no-gutters align-items-md-center flex-column-reverse flex-md-row img-hover-effect-wrapper">
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
                <div className="room-hm2-content mt--10 hm2-room-content-margin">
                  <div className="ratting-area d-flex align-items-center mb-xl-2">
                    <ul className="review-ratting">
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
                    {/* /ratting */}
                    <p className="mb-0 ml-15">12 Reviews</p>
                  </div>
                  {/* /ratting a */}
                  <div className="section-content-title">
                    <h2 className="mb-22">Luxury Single Delux</h2>
                    <p>
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut bione bore et dolore magna aliqua. Ut enim ad
                      conm dolor
                    </p>
                  </div>
                  {/* /title */}
                  <div className="room-info-details mt-25">
                    <div className="room-price">
                      <p className="mr-20 d-inline-block mb-0">Starts From</p>
                      <span className="room-price f-700 main-color fontNoto text-uppercase ">
                        <span className="theme-color mr-2">$399</span>/ Night
                      </span>
                    </div>
                    {/* /room-price-details */}
                    <div className="room-info d-flex mt-22 mb-40">
                      <ul className="room-info-left pr-45">
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Status
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Payment
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Guest
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Beds
                          </span>
                        </li>
                      </ul>
                      <ul className="room-info-right">
                        <li>
                          <span>Available</span>
                        </li>
                        <li>
                          <span>30% Advanced</span>
                        </li>
                        <li>
                          <span>3</span>
                        </li>
                        <li>
                          <span>2</span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-btn d-inline-block pr-40">
                      <Link href="rooms-details" className="btn theme-bg w-100">
                        book now
                      </Link>
                    </div>
                    {/* / btn */}
                    <div className="my-btn2 d-inline-block position-relative transition5">
                      <Link
                        href="rooms-details"
                        className="btn position-relative rounded-0 transition5"
                      >
                        More Details
                      </Link>
                    </div>
                    {/* / btn */}
                  </div>
                  {/* /room-price-details */}
                </div>
                {/* /room-hm1-content */}
              </div>
              {/* /col */}
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
                <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
                  <img
                    className="w-100 img"
                    src="images/room/hm2-room-img2.jpg"
                    alt="room image 02"
                  />
                </div>
                {/* /room-hm2-img */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper">
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
                <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
                  <img
                    className="w-100 img"
                    src="images/room/hm2-room-img3.jpg"
                    alt="room image 03"
                  />
                </div>
                {/* /room-hm2-img */}
              </div>
              {/* /col */}
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
                <div className="room-hm2-content mt--10 hm2-room-content-margin">
                  <div className="ratting-area d-flex align-items-center mb-xl-2">
                    <ul className="review-ratting">
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
                    {/* /ratting */}
                    <p className="mb-0 ml-15">12 Reviews</p>
                  </div>
                  {/* /ratting a */}
                  <div className="section-content-title">
                    <h2 className="mb-22">Luxury Super Double</h2>
                    <p>
                      Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                      teros ut bione bore et dolore magna aliqua. Ut enim ad
                      conm dolor
                    </p>
                  </div>
                  {/* /title */}
                  <div className="room-info-details mt-25">
                    <div className="room-price">
                      <p className="mr-20 d-inline-block mb-0">Starts From</p>
                      <span className="room-price f-700 main-color fontNoto text-uppercase ">
                        <span className="theme-color mr-2">$499</span>/ Night
                      </span>
                    </div>
                    {/* /room-price-details */}
                    <div className="room-info d-flex mt-22 mb-40">
                      <ul className="room-info-left pr-45">
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Status
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Payment
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Guest
                          </span>
                        </li>
                        <li>
                          <span className="fontNoto main-color f-700 text-uppercase">
                            Beds
                          </span>
                        </li>
                      </ul>
                      <ul className="room-info-right">
                        <li>
                          <span>Available</span>
                        </li>
                        <li>
                          <span>30% Advanced</span>
                        </li>
                        <li>
                          <span>3</span>
                        </li>
                        <li>
                          <span>2</span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-btn d-inline-block pr-40">
                      <Link href="rooms-details" className="btn theme-bg w-100">
                        book now
                      </Link>
                    </div>
                    {/* / btn */}
                    <div className="my-btn2 d-inline-block position-relative transition5">
                      <Link
                        href="rooms-details"
                        className="btn position-relative rounded-0 transition5"
                      >
                        More Details
                      </Link>
                    </div>
                    {/* / btn */}
                  </div>
                  {/* /room-price-details */}
                </div>
                {/* /room-hm1-content */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="hm2-rooms-btn transparent-btn text-center mt-60">
              <div className="my-btn d-inline-block pr-40">
                <Link
                  href="rooms-details"
                  className="btn transparent-btn w-100"
                >
                  view all
                </Link>
              </div>
              {/* / btn */}
              {/* <div class="my-btn d-inline-block pr-40">
                  <Link href="rooms-details" class="btn theme-bg w-100">book now</Link>
              </div>/ btn */}
            </div>
            {/* /rooms-btn */}
          </div>
          {/* /container */}
        </div>
        {/* rooms-hm2-area-end  */}
        {/* ====== offer-area-start =========================================== */}
        <div className="offer-area hm2 section-bg over-hidden pt-115 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9  col-sm-12 col-12">
                <div className="title text-center">
                  <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                    Its Awesome
                  </span>
                  <h2 className="mb-0">Speical Offers</h2>
                </div>
                {/* /title */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="row offer-wrapper align-items-center justify-content-center mt-85">
              <div
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
                      src="images/offer/hm2-offer-img1.jpg"
                      alt="news-images01"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="offer-hm2-content position-absolute text-center transition5 z-index1 w-100 h-100">
                    <div className="offer-hm2-text1 transition5 position-absolute w-100 top-0 transition5 pl-30 pr-30 pt-40">
                      <div className="offer-hm2-text-hover1 transition5">
                        <h5 className="text-white mb-6">
                          <Link href="room-details ">
                            Holiday Special Offer
                          </Link>
                        </h5>
                        <p className="text-white">
                          Toma onsectetur adipisicing elit, sed do eiusmod
                          tiusmod temp
                        </p>
                      </div>
                      {/* /text-hover */}
                    </div>
                    {/* /offer text */}
                    <div className="offer-hm2-text2 position-absolute w-100 bottom-0 transition5 pt-45 pb-45">
                      <div className="offer-hm2-text-hover transition5">
                        <div className="room-price">
                          <p className="text-white d-block mb-0">Starts From</p>
                          <span className="text-white f-700 fontNoto d-block">
                            $299
                          </span>
                          <span className="room-price text-white d-block mt-2">
                            2 Days &amp; 3 Nights
                          </span>
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
              {/* /col */}
              <div
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
                      src="images/offer/hm2-offer-img2.jpg"
                      alt="news-images02"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="offer-hm2-content position-absolute text-center transition5 z-index1 w-100 h-100">
                    <div className="offer-hm2-text1 position-absolute w-100 top-0 transition5 pl-30 pr-30 pt-40">
                      <div className="offer-hm2-text-hover1 transition5">
                        <h5 className="text-white mb-6">
                          <Link href="room-details ">Honeymoon Offer</Link>
                        </h5>
                        <p className="text-white">
                          Toma onsectetur adipisicing elit, sed do eiusmod
                          tiusmod temp
                        </p>
                      </div>
                      {/* /text-hover */}
                    </div>
                    {/* /offer text */}
                    <div className="offer-hm2-text2 position-absolute w-100 bottom-0 transition5 pt-45 pb-45">
                      <div className="offer-hm2-text-hover transition5">
                        <div className="room-price">
                          <p className="text-white d-block mb-0">Starts From</p>
                          <span className="text-white f-700 fontNoto d-block">
                            $299
                          </span>
                          <span className="room-price text-white d-block mt-2">
                            2 Days &amp; 3 Nights
                          </span>
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
              {/* /col */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-9 col-12 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div
                  className="single-offer-wrapper position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                  data-overlay={2}
                >
                  <div className="offer-hm2-img w-100 position-relative transition5">
                    <img
                      className="img w-100"
                      src="images/offer/hm2-offer-img3.jpg"
                      alt="news-images03"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="offer-hm2-content position-absolute text-center transition5 z-index1 w-100 h-100">
                    <div className="offer-hm2-text1 position-absolute w-100 top-0 transition5 pl-30 pr-30 pt-40">
                      <div className="offer-hm2-text-hover1 transition5">
                        <h5 className="text-white mb-6">
                          <Link href="room-details ">
                            Holiday Special Offer
                          </Link>
                        </h5>
                        <p className="text-white">
                          Toma onsectetur adipisicing elit, sed do eiusmod
                          tiusmod temp
                        </p>
                      </div>
                      {/* /text-hover */}
                    </div>
                    {/* /offer text */}
                    <div className="offer-hm2-text2 position-absolute w-100 bottom-0 transition5 pt-45 pb-45">
                      <div className="offer-hm2-text-hover transition5">
                        <div className="room-price">
                          <p className="text-white d-block mb-0">Starts From</p>
                          <span className="text-white f-700 fontNoto d-block">
                            $299
                          </span>
                          <span className="room-price text-white d-block mt-2">
                            2 Days &amp; 3 Nights
                          </span>
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
              {/* /col */}
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
        {/* offer-area -end */}
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
