import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Rooms"
        bgImage="/images/room-page/room-page-hero-bg.jpg"
        pageTitle="Rooms"
      />
      {/* ====== rooms-page-area-start =============================================== */}
      <div className="rooms-page-area mt-120 mb-120">
        <div className="container">
          <div className="row rooms-page-wrapper flex-column-reverse flex-lg-row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row rooms-page-left-sidebar">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget sidebar-search-area section-bg pl-35 pr-35 pt-40 pb-45 mb-55">
                    <div className="form-hotel-search">
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
                  {/* /rp-search-area */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-7 col-sm-12 col-12">
                  <div className="sidebar-widget rp-service mb-30">
                    <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                      service
                    </h4>
                    {/* <span class="accordion"></span> */}
                    <ul className="panel">
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Enable Wifi</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-15">Smooking Zone</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">River View</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-15">Forest View</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Service Guide</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-15">Restaurant</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Pet Allowed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-15">Swimming Pool</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Rest Room</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-15">Child Corner</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /rp-service */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-5 col-sm-12 col-12">
                  <div className="sidebar-widget rp-room-size mb-45">
                    <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                      Room Size
                    </h4>
                    <ul className="panel">
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">One Single Bed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">One King Bed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">One Double Bed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Two Double Bed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Triple Bed</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">Queen Standard</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-10">
                          <input
                            type="checkbox"
                            className="option-input radio"
                            name="example"
                          />
                          <a href="#">
                            <span className="pl-20">
                              Presidential Executive
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /rp-service */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                  <div className="sidebar-widget rp-price mb-40">
                    <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                      Price Range
                    </h4>
                    {/* <span class="accordion"></span> */}
                    <ul className="panel">
                      <li className="w-100 mx-1">
                        <div className="price-slider mt-12 mb-20">
                          <div id="slider-range2" />
                          <div>
                            <form action="#">
                              <div className="prc-slider-content d-flex align-items-center justify-content-between">
                                <div className="prc-amount d-flex align-items-center justify-content-end text-right mt-20">
                                  <label
                                    htmlFor="amount2"
                                    className="text-color f-500 mb-0"
                                  >
                                    Price :
                                  </label>
                                  <input
                                    type="text"
                                    id="amount2"
                                    readOnly=""
                                    className="border-0 text-color bg-transparent text-right"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* /price-slider */}
                      </li>
                    </ul>
                  </div>
                  {/* /rp-service */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                  <div className="sidebar-widget rp-Comments mb-18">
                    <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                      Recent Comments
                    </h4>
                    {/* <span class="accordion"></span> */}
                    <ul className="panel">
                      <li className="d-flex mb-12">
                        <span className="theme-color d-block mr-3 mt-1">
                          <i className="fa-regular fa-comment" />
                        </span>
                        <div className="rc-comments">
                          <h6 className="mb-1">James Cameron</h6>
                          <p className=" mb-0">
                            Lorem ipsum dolor sit amet, consec teutimh adip
                            khobor nio na
                          </p>
                        </div>
                      </li>
                      <li className="d-flex mb-12">
                        <span className="theme-color d-block mr-3 mt-1">
                          <i className="fa-regular fa-comment" />
                        </span>
                        <div className="rc-comments">
                          <h6 className="mb-1">Teutimh passim</h6>
                          <p className=" mb-0">
                            Officiis aperiam non passim dolorem, ullam non error
                            est voluptas enim
                          </p>
                        </div>
                      </li>
                      <li className="d-flex mb-12">
                        <span className="theme-color d-block mr-3 mt-1">
                          <i className="fa-regular fa-comment" />
                        </span>
                        <div className="rc-comments">
                          <h6 className="mb-1">Rames khobor</h6>
                          <p className=" mb-0">
                            Dolor ipsum dolor sit amet, consec teutimh adip
                            khobor nio na
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /rp-service */}
                </div>
                {/* /col */}
              </div>
              {/* /rooms-page-left-sidebar */}
            </div>
            {/* /col */}
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row rooms-page-right-content">
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img1.jpg"
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
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img2.jpg"
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
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img3.jpg"
                        alt="room image 03"
                      />
                    </div>
                    {/* /room-hm1-img */}
                    <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                      <h4 className="mb-10">
                        <Link href="rooms-details">Simple Double Room</Link>
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
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img4.jpg"
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
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img5.jpg"
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
                <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                  <div className="single-room-hm1 zoom-img-hover white-bg transition5 mb-40">
                    <div className="room-hm1-img over-hidden transition5">
                      <img
                        className="w-100 img"
                        src="images/room-page/rp-room-img6.jpg"
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
              </div>
              {/* /rooms-page-right-sidebar */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
        {/* ====== pagination-area-start================================ */}
        <div className="pagination-area mt-20 over-hidden">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12">
                <nav
                  className="pagination-page"
                  aria-label="Page navigation example"
                >
                  <ul className="pagination align-items-center justify-content-center justify-content-lg-start">
                    {/* <li class="page-item">
                                  <a class="page-link" href="#"><i class="fas fa-angle-double-left"></i></a>
                              </li> */}
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className="bottom-line" />
          </div>
          {/* /container */}
        </div>
        {/* pagination-area-end */}
      </div>
      {/* rooms-page-area-end  */}
    </RoveroLayout>
  );
};
export default page;
