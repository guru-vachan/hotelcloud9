import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Rooms details"
        bgImage="/images/room-details/room-details-page-hero-bg.jpg"
        pageTitle="Rooms details"
      />
      {/* ====== rooms-details-page-area-start =============================================== */}
      <div className="rooms-details-page-area mt-120">
        <div className="container">
          <div className="row rooms-details-page-wrapper">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="rooms-details-page-content">
                <div className="rd-heading d-sm-flex align-items-center justify-content-between mb-45">
                  <div className="section-content-title">
                    <h2 className="mb-0">
                      <Link href="rooms-details">Luxury Super Delux</Link>
                    </h2>
                  </div>
                  {/* /title */}
                  <div className="ratting-area pt-2">
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
                    <p className="mb-0">12 Reviews</p>
                  </div>
                  {/* /ratting a */}
                </div>
                {/* /rd-heading */}
                <div className="img-hover-effect-wrapper">
                  <div className="pd-img mb-25 zoom-img-hover img-hover-effect2 over-hidden position-relative">
                    <img
                      className="w-100 img"
                      src="images/room-details/room-details-img.jpg"
                      alt=""
                    />
                  </div>
                  {/* /pd-img */}
                </div>
                <div className="room-details-info primary-border pt-25 pb-18 mb-45">
                  <ul className="d-sm-flex justify-content-around">
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon1.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">30 sf</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon2.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">3 Guests</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon3.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">3 Beds</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon4.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">
                        City View
                      </span>
                    </li>
                  </ul>
                </div>
                {/* /room-details-info */}
                <div className="rd-description mb-45">
                  <h5 className="mb-25">Description</h5>
                  <p>
                    Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                    teros ut bione bore et dolore magna aliqua. Ut enim ad conm
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt
                  </p>
                </div>
                {/* /rd-description */}
                <div className="rd-facilities mb-30">
                  <h5 className="mb-25">Facilities</h5>
                  <ul className="rd-facilities-list">
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon1.png"
                            alt="icon1"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Delux luxury bed</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-xl-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon2.png"
                            alt="icon2"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Luxury wash room</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon3.png"
                            alt="icon3"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Free wifi</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon4.png"
                            alt="icon4"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Two side belcony</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-xl-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon5.png"
                            alt="icon5"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Prayer room</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon6.png"
                            alt="icon6"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Kidz corner</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon7.png"
                            alt="icon7"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Resturant service</p>
                      </div>
                    </li>
                    <li className="d-inline-block mb-20">
                      <div className="d-flex align-items-center">
                        <span className="facilities-icon d-inline-block text-center ">
                          <img
                            src="images/icon/facilities-icon8.png"
                            alt="icon8"
                          />
                        </span>
                        {/* /ser-icon */}
                        <p className="pl-20 mb-0">Rest room</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* rd-facilities" */}
                <div className="room-details-gallery mb-45">
                  <h5 className="mb-25">gallery</h5>
                  <div className="row pl-10 pr-10">
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img1.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img1.jpg"
                            alt="gallery image 1"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img2.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img2.jpg"
                            alt="gallery image 2"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img3.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img3.jpg"
                            alt="gallery image 3"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img4.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img4.jpg"
                            alt="gallery image 4"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img5.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img5.jpg"
                            alt="gallery image 5"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-6 col-12 px-1">
                      <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                        <a
                          data-fancybox="images"
                          href="images/room-details/rd-gallery-zoom-img6.jpg"
                        >
                          <img
                            className="w-100"
                            src="images/room-details/rd-gallery-img6.jpg"
                            alt="gallery image 6"
                          />
                          <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                            <span className="d-flex align-items-center justify-content-center text-center h-100">
                              <i className="fa-solid fa-plus" />
                            </span>
                          </div>
                          {/* /port-content */}
                        </a>
                      </div>
                      {/* /single-rd-gallery */}
                    </div>
                    {/* /col */}
                  </div>
                  {/* /row */}
                </div>
                {/* room-details-gallery */}
                <div className="room-details-review-area">
                  <h5 className="mb-25">Reviews</h5>
                  <div className="review-comments-area">
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-2  col-sm-2 col-4 mt-1">
                        <div className="client-avatar mb-30">
                          <img
                            className="avatar-img rounded-circle"
                            src="images/room-details/rd-author-img1.jpg"
                            alt="image1"
                          />
                        </div>
                      </div>
                      {/* /col */}
                      <div className="col-xl-10 col-lg-10  col-md-10  col-sm-10 col-12 pl-xl-0">
                        <div className="review-text pb-20">
                          <div className="review-head d-sm-flex justify-content-between">
                            <div className="review-header-info">
                              <h5 className="pr-2">Mostopha Jabbar</h5>
                              <ul className="d-flex mr-2">
                                <li>
                                  <span className="secondary-color3 pr-1 d-inline-block">
                                    January 04, 2024,
                                  </span>
                                </li>
                                <li>
                                  <span className="secondary-color3">
                                    01.04 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
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
                          </div>
                          {/* /review-head */}
                          <p className="dc-text1 mt-15">
                            Tollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit vo luptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis tomar akeudi
                            kiteparo.
                          </p>
                        </div>
                      </div>
                      {/* /col */}
                    </div>
                    {/* /row */}
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-2  col-sm-2 col-4 mt-1">
                        <div className="client-avatar mb-30">
                          <img
                            className="avatar-img rounded-circle"
                            src="images/room-details/rd-author-img2.jpg"
                            alt="image 2"
                          />
                        </div>
                      </div>
                      {/* /col */}
                      <div className="col-xl-10 col-lg-10  col-md-10  col-sm-10 col-12 pl-xl-0">
                        <div className="review-text pb-20">
                          <div className="review-head d-sm-flex justify-content-between">
                            <div className="review-header-info">
                              <h5 className="pr-2">Mostopha Jabbar</h5>
                              <ul className="d-flex mr-2">
                                <li>
                                  <span className="secondary-color3 pr-1 d-inline-block">
                                    January 04, 2024,
                                  </span>
                                </li>
                                <li>
                                  <span className="secondary-color3">
                                    01.04 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
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
                          </div>
                          {/* /review-head */}
                          <p className="dc-text1 mt-15">
                            Tollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit vo luptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis tomar akeudi
                            kiteparo.
                          </p>
                        </div>
                      </div>
                      {/* /col */}
                    </div>
                    {/* /row */}
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-2  col-sm-2 col-4 mt-1">
                        <div className="client-avatar mb-30">
                          <img
                            className="avatar-img rounded-circle"
                            src="images/room-details/rd-author-img3.jpg"
                            alt="image 3"
                          />
                        </div>
                      </div>
                      {/* /col */}
                      <div className="col-xl-10 col-lg-10  col-md-10  col-sm-10 col-12 pl-xl-0">
                        <div className="review-text pb-20">
                          <div className="review-head d-sm-flex justify-content-between">
                            <div className="review-header-info">
                              <h5 className="pr-2">Mostopha Jabbar</h5>
                              <ul className="d-flex mr-2">
                                <li>
                                  <span className="secondary-color3 pr-1 d-inline-block">
                                    January 04, 2024,
                                  </span>
                                </li>
                                <li>
                                  <span className="secondary-color3">
                                    01.04 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
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
                          </div>
                          {/* /review-head */}
                          <p className="dc-text1 mt-15">
                            Tollit anim id est laborum. Sed ut perspiciatis unde
                            omnis iste natus error sit vo luptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis tomar akeudi
                            kiteparo.
                          </p>
                        </div>
                      </div>
                      {/* /col */}
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /room-details-review-area */}
              </div>
              {/* /rooms-page-right-sidebar */}
            </div>
            {/* /col */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row rooms-page-left-sidebar">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget sidebar-search-area rp-booking-area mb-55 section-bg pl-30 pr-30 pt-45 pb-45">
                    <div className="rpb-price text-center mb-25">
                      <span className="d-block text-color">sub total</span>
                      <span className="room-price d-block f-700 main-color fontNoto text-uppercase">
                        $299
                      </span>
                    </div>
                    {/* /rpb-price */}
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
                    <div className="sidebar-widget rp-service mb-1">
                      <h5 className="sidebar-title f-700 fontNoto text-uppercase mb-22 mr-xl-2 d-inline-block">
                        Add Extra Service
                      </h5>
                      <span className="accordion" />
                      <ul className="panel panel-ser">
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
                    <div className="my-btn d-block">
                      <Link href="booking" className="btn theme-bg w-100">
                        book now
                      </Link>
                    </div>
                    {/* / btn */}
                  </div>
                  {/* /rp-booking-area */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget rd-booking-help mb-55">
                    <div className="booking-help theme-bg text-center pt-60 pb-55">
                      <h4 className="sidebar-title f-700 fontNoto text-capitalize text-white mb-22 d-block">
                        Booking Help
                      </h4>
                      <Link href="booking" className="text-white f-600">
                        +0123 4567 8910
                      </Link>
                    </div>
                    {/* /booking-help */}
                  </div>
                  {/* /rd-booking-help */}
                </div>
                {/* /col */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget pc-rooms mb-50">
                    <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                      Popular rooms
                    </h4>
                    <ul className="popular-rooms mt-18">
                      <li className="d-flex mb-30">
                        <Link href="rooms-details">
                          <img
                            src="images/room-details/rd-pr-img1.jpg"
                            alt="blog"
                          />
                        </Link>
                        <div className="pr-rooms-content ml-30 mt--10">
                          <h6 className="mb-2">
                            <Link href="rooms-details">
                              Super luxuray delux room
                            </Link>
                          </h6>
                          <span className="text-color d-block mb-10">
                            Starts From{" "}
                            <span className="rc-price main-color f-700 fontNoto">
                              $299
                            </span>
                          </span>
                          <div className="my-btn d-inline-block">
                            <Link href="booking" className="btn theme-bg w-100">
                              book now
                            </Link>
                          </div>
                          {/* / btn */}
                        </div>
                      </li>
                      <li className="d-flex mb-30">
                        <Link href="rooms-details">
                          <img
                            src="images/room-details/rd-pr-img2.jpg"
                            alt="blog"
                          />
                        </Link>
                        <div className="pr-rooms-content ml-30 mt--10">
                          <h6 className="mb-2">
                            <Link href="rooms-details">
                              Super luxuray delux room
                            </Link>
                          </h6>
                          <span className="text-color d-block mb-10">
                            Starts From{" "}
                            <span className="rc-price main-color f-700 fontNoto">
                              $299
                            </span>
                          </span>
                          <div className="my-btn d-inline-block">
                            <Link href="booking" className="btn theme-bg w-100">
                              book now
                            </Link>
                          </div>
                          {/* / btn */}
                        </div>
                      </li>
                      <li className="d-flex mb-30">
                        <Link href="rooms-details">
                          <img
                            src="images/room-details/rd-pr-img3.jpg"
                            alt="blog"
                          />
                        </Link>
                        <div className="pr-rooms-content ml-30 mt--10">
                          <h6 className="mb-2">
                            <Link href="rooms-details">
                              Super luxuray delux room
                            </Link>
                          </h6>
                          <span className="text-color d-block mb-10">
                            Starts From{" "}
                            <span className="rc-price main-color f-700 fontNoto">
                              $299
                            </span>
                          </span>
                          <div className="my-btn d-inline-block">
                            <Link href="booking" className="btn theme-bg w-100">
                              book now
                            </Link>
                          </div>
                          {/* / btn */}
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /rp-rc-rooms */}
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
      {/* rooms-details-page-area-end  */}
      {/* ====== similar-rooms-area-start =============================================== */}
      <div className="similar-rooms-area mt-sm-4 mb-90">
        <div className="container">
          <h5 className="mb-30">Similar Rooms</h5>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div
                className="single-similar-rooms blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                data-overlay={2}
              >
                <div className="similar-img w-100 position-relative transition5">
                  <img
                    className="img w-100"
                    src="images/room-details/rd-similar-room1.jpg"
                    alt="room-images01"
                  />
                </div>
                {/* /similar-img */}
                <div className="similar-text-hover transition5 position-absolute w-100 bottom-0 pt-30 pb-25 pl-30 pr-30 z-index1">
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
                  <h6 className="text-white mb-1">
                    <Link href="rooms-details">Super delux fantacy room</Link>
                  </h6>
                  <span className="text-white text-capitalize d-block">
                    Starts From $299
                  </span>
                </div>
                {/* /text-hover */}
              </div>
              {/* /single-similar */}
            </div>
            {/* /col */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div
                className="single-similar-rooms blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                data-overlay={2}
              >
                <div className="similar-img w-100 position-relative transition5">
                  <img
                    className="img w-100"
                    src="images/room-details/rd-similar-room2.jpg"
                    alt="room-images02"
                  />
                </div>
                {/* /similar-img */}
                <div className="similar-text-hover transition5 position-absolute w-100 bottom-0 pt-30 pb-25 pl-30 pr-30 z-index1">
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
                  <h6 className="text-white mb-1">
                    <Link href="rooms-details">Super delux fantacy room</Link>
                  </h6>
                  <span className="text-white text-capitalize d-block">
                    Starts From $299
                  </span>
                </div>
                {/* /text-hover */}
              </div>
              {/* /single-similar */}
            </div>
            {/* /col */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div
                className="single-similar-rooms blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                data-overlay={2}
              >
                <div className="similar-img w-100 position-relative transition5">
                  <img
                    className="img w-100"
                    src="images/room-details/rd-similar-room3.jpg"
                    alt="room-images03"
                  />
                </div>
                {/* /similar-img */}
                <div className="similar-text-hover transition5 position-absolute w-100 bottom-0 pt-30 pb-25 pl-30 pr-30 z-index1">
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
                  <h6 className="text-white mb-1">
                    <Link href="rooms-details">Super delux fantacy room</Link>
                  </h6>
                  <span className="text-white text-capitalize d-block">
                    Starts From $299
                  </span>
                </div>
                {/* /text-hover */}
              </div>
              {/* /single-similar */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /similar-rooms-area end */}
    </RoveroLayout>
  );
};
export default page;
