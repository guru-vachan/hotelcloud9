import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Rooms"
        bgImage="/images/room-page/room-page2-hero-bg.jpg"
        pageTitle="Rooms"
      />
      <div className="rooms-hm2-area room-page2 hm2 mt-120 mb-120">
        <div className="container-fluid container-wrapper p-md-0">
          <div className="row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-xl-0">
              <div className="room-hm2-img transition5 zoom-img-hover img-hover-effect2 over-hidden position-relative">
                <img
                  className="w-100 img"
                  src="images/room-page/rp2-room-img1.jpg"
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
                  <h2 className="mb-22">
                    <Link href="rooms-details">Simple Single Delux</Link>
                  </h2>
                  <p>
                    Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                    teros ut bione bore et dolore magna aliqua. Ut enim ad conm
                    dolor
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
                  <h2 className="mb-22">
                    <Link href="rooms-details">Luxury Single Delux</Link>
                  </h2>
                  <p>
                    Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                    teros ut bione bore et dolore magna aliqua. Ut enim ad conm
                    dolor
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
              <div className="room-hm2-img zoom-img-hover transition5 img-hover-effect2 over-hidden position-relative">
                <img
                  className="w-100 img"
                  src="images/room-page/rp2-room-img2.jpg"
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
              <div className="room-hm2-img zoom-img-hover transition5 img-hover-effect2 over-hidden position-relative">
                <img
                  className="w-100 img"
                  src="images/room-page/rp2-room-img3.jpg"
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
                  <h2 className="mb-22">
                    <Link href="rooms-details">Luxury Super Double</Link>
                  </h2>
                  <p>
                    Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                    teros ut bione bore et dolore magna aliqua. Ut enim ad conm
                    dolor
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
                  <h2 className="mb-22">
                    <Link href="rooms-details">Simple Single Delux</Link>
                  </h2>
                  <p>
                    Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                    teros ut bione bore et dolore magna aliqua. Ut enim ad conm
                    dolor
                  </p>
                </div>
                {/* /title */}
                <div className="room-info-details mt-25">
                  <div className="room-price">
                    <p className="mr-20 d-inline-block mb-0">Starts From</p>
                    <span className="room-price f-700 main-color fontNoto text-uppercase ">
                      <span className="theme-color mr-2">$599</span>/ Night
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
              <div className="room-hm2-img zoom-img-hover transition5 img-hover-effect2 over-hidden position-relative">
                <img
                  className="w-100 img"
                  src="images/room-page/rp2-room-img4.jpg"
                  alt="room image 02"
                />
              </div>
              {/* /room-hm2-img */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="hm2-rooms-btn transparent-btn text-center mt-60">
            <div className="my-btn d-inline-block pr-40">
              <Link href="rooms-details" className="btn bg-transparent w-100">
                view all
              </Link>
            </div>
            {/* / btn */}
          </div>
          {/* /rooms-btn */}
        </div>
        {/* /container */}
      </div>
    </RoveroLayout>
  );
};
export default page;
