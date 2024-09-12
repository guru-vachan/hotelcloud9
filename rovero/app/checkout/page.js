import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Checkout"
        bgImage="images/bg/booking-hero.jpg"
        pageTitle="Checkout"
      />
      <div className="booking-page-area checkout-page mt-120 mb-120">
        <div className="container">
          <div className="row booking-page-wrapper">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="booking-page-content">
                <div className="booking-room-info-area">
                  <h2 className="mb-30">Your Room</h2>
                  <div className="row img-hover-effect-wrapper">
                    <div className="col-xl-6  col-lg-6 col-md-7 col-sm-7 col-12 img-hover-effect2">
                      <img
                        className="checkout-img w-100"
                        src="images/bg/checkout-img.jpg"
                        alt="checkout image"
                      />
                    </div>
                    {/* /col */}
                    <div className="col-xl-6  col-lg-6 col-md-5 col-sm-5 col-12 px-sm-0 px-md-3">
                      <div className="booking-room-info-left">
                        <div className="title">
                          <h2 className="mb-0">
                            <Link href="rooms-details">Luxury Super Delux</Link>
                          </h2>
                        </div>
                        {/* /title */}
                        <ul className="booking-r-info mt-35">
                          <li className="single-rd-info mb-1">
                            <img
                              src="images/icon/booking-icon1.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color mt-10 ml-20">
                              30 sf
                            </span>
                          </li>
                          <li className="single-rd-info">
                            <img
                              src="images/icon/booking-icon2.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color mt-10 ml-20">
                              3 Guests
                            </span>
                          </li>
                          <li className="single-rd-info">
                            <img
                              src="images/icon/booking-icon3.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color mt-10 ml-20">
                              3 Beds
                            </span>
                          </li>
                          <li className="single-rd-info">
                            <img
                              src="images/icon/booking-icon4.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color mt-10 ml-20">
                              City View
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /col */}
                  </div>
                  {/* /row */}
                </div>
                {/* /booking-room-info-area */}
                <div className="checkout-your-info-area mt-40">
                  <h2 className="mb-30">Add Your Information</h2>
                  <ul>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        First name :
                      </span>{" "}
                      Hafiz uddin
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Last name :
                      </span>{" "}
                      Juwel
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Email address :
                      </span>{" "}
                      xuwelkhan@gmail.com
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Phone no :
                      </span>{" "}
                      +880 1234 567890
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Address :
                      </span>{" "}
                      20 Bordeshi, Amin Bazar, Savar
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">City :</span>{" "}
                      Dhaka
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Country :
                      </span>{" "}
                      Bangladesh
                    </li>
                    <li className="text-color d-inline-block mb-15">
                      <span className="main-color d-inline-block">
                        Zip code :
                      </span>{" "}
                      1348
                    </li>
                  </ul>
                  <ul>
                    <li className="d-block mb-15 w-100">
                      <span>Additional message :</span>
                      <p className="mb-0 mt-2">
                        Toenim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea com modo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-color d-block mb-15 w-100">
                      <span className="main-color d-inline-block">
                        Coupon code :
                      </span>{" "}
                      Chrismas2024
                    </li>
                  </ul>
                </div>
                {/* /booking-your-info-area */}
                <div className="payment-method mt-40">
                  <h2 className="mb-22">Payment Options</h2>
                  <ul>
                    <li>
                      <div className="d-flex align-items-center mb-10">
                        <input type="radio" name="example" />
                        <a href="#">
                          <span className="main-color pl-20">Cash on Spot</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mb-3">
                        <input type="radio" name="example" />
                        <a href="#">
                          <span className="main-color pl-15">
                            Bank Transfer
                          </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mb-3">
                        <input type="radio" name="example" />
                        <a href="#">
                          <span className="main-color pl-15">Credit Card</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center mb-3">
                        <input type="radio" name="example" />
                        <a href="#">
                          <span className="main-color pl-15">Paypal</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /payment-method */}
                <div className="my-btn d-block mt-45">
                  <Link href="booking" className="btn theme-bg">
                    pay now
                  </Link>
                </div>
                {/* / btn */}
              </div>
              {/* /rooms-page-right-sidebar */}
            </div>
            {/* /col */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row booking-page-left-sidebar mt-5 mt-lg-0 pt-3 pt-lg-0">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget sidebar-search-area rp-booking-area section-bg pl-30 pr-30 pt-50 pb-45">
                    <div className="rpb-price text-center">
                      <span className="d-block text-color">sub total</span>
                      <span className="room-price d-block f-700 main-color fontNoto text-uppercase">
                        $299
                      </span>
                    </div>
                    {/* /rpb-price */}
                    <div className="form-hotel-search pb-50">
                      <form>
                        <label
                          htmlFor="checkIn"
                          className="meta-text-color d-block fontNoto f-700 mb-10 mt-35"
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
                          className="meta-text-color d-block fontNoto f-700 mb-10 mt-35"
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
                        <div className="check-guests-form">
                          <div className="course-filter">
                            <label
                              htmlFor="exampleFormControlSelect3"
                              className="main-color d-block fontNoto f-700 mb-10"
                            >
                              GUESTS
                            </label>
                            <select
                              className="white-bg primary-color w-100 border-0 pl-0 rounded-0 mb-25"
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
                      </form>
                    </div>
                    {/* /check-in-form */}
                    <div className="sidebar-widget checkout-ex-service">
                      <h5 className="sidebar-title f-700 fontNoto text-uppercase mb-22 mr-xl-2 d-inline-block">
                        Extra Service
                      </h5>
                      <ul>
                        <li className="d-flex align-items-center justify-content-between mb-12">
                          <div className="d-flex align-items-center">
                            <img
                              src="images/icon/check-ser-icon1.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color ml-20">
                              Enable Wifi
                            </span>
                          </div>
                          <span className="delete">
                            <i className="fa-solid fa-xmark" />
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between mb-12">
                          <div className="d-flex align-items-center">
                            <img
                              src="images/icon/check-ser-icon2.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color ml-20">
                              Smooking Zone
                            </span>
                          </div>
                          <span className="delete">
                            <i className="fa-solid fa-xmark" />
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between mb-12">
                          <div className="d-flex align-items-center">
                            <img
                              src="images/icon/check-ser-icon3.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color ml-20">
                              Service Guide
                            </span>
                          </div>
                          <span className="delete">
                            <i className="fa-solid fa-xmark" />
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between mb-12">
                          <div className="d-flex align-items-center">
                            <img
                              src="images/icon/check-ser-icon4.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color ml-20">
                              Swimming Pool
                            </span>
                          </div>
                          <span className="delete">
                            <i className="fa-solid fa-xmark" />
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between mb-12">
                          <div className="d-flex align-items-center">
                            <img
                              src="images/icon/check-ser-icon5.png"
                              alt=""
                              className="rd-info-icon"
                            />
                            <span className="d-inline-block text-color ml-20">
                              Child Corner
                            </span>
                          </div>
                          <span className="delete">
                            <i className="fa-solid fa-xmark" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* /rp-service */}
                  </div>
                  {/* /rp-booking-area */}
                </div>
                {/* /col */}
              </div>
              {/* /rooms-page-left-sidebar */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
    </RoveroLayout>
  );
};
export default page;
