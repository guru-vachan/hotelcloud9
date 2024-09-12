import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <div className="inner-page-hero-area">
        <div
          className="inner-page-height inner-page-height blog-details2-hero inner-page-bg d-flex align-items-center position-relative black-overly"
          data-background="images/blog-page/blog-details2-hero.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="inner-page-content text-center mt-80">
                  <h1 className="text-white text-capitalize">
                    We want to change the world
                  </h1>
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
      </div>

      <div className="blog-details-page-area blog-details2-page mt-110 mb-120">
        <div className="blog-details-page-content-wpapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-  col-sm- col-">
                <div className="containe">
                  <div className="b-details-page-content mb-45">
                    <img src="images/blog-page/blog-details-hero.jpg" alt="" />
                    <div className="news-page-info-wrapper d-flex align-items-center mt-25 mb-10">
                      <ul className="news-page-info mb-1 mb-md-0">
                        <li className="text-uppercase fontNoto f-700 mr-20 d-inline-block">
                          <span className="meta-text-color pr-1">
                            <i className="fas fa-user" />
                          </span>
                          Juwel Khan
                        </li>
                        <li className="text-uppercase fontNoto f-700 mr-20 d-inline-block">
                          <span className="meta-text-color pr-1">
                            <i className="fas fa-folder-open" />
                          </span>
                          News
                        </li>
                      </ul>
                      <ul className="news-page-info-comment mb-1 mb-md-0">
                        <li className="text-capitalize secondary-color mr-20 d-inline-block">
                          <span className="meta-text-color pr-1">
                            <i className="fas fa-clock" />
                          </span>
                          May 06, 2024
                        </li>
                      </ul>
                    </div>
                    <p className="mb-25">
                      Vore et dot enim ad minim veniam, quis nos trud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure fugiat nulla pariatur.
                      Excepteur sint occae datat non proident, sun em ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor adipisicing elit, sed do eiusmod tempor
                      incid idunt ut labore dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium dolore mque laudantium, totam rem
                      aponsequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipi sci velit,
                      sed quia non numquam eius magnam aliquam quaerat
                      voluptatem ipsum quia dolor sit amet ipsum quia dolor sit
                      amet.
                    </p>
                    <blockquote className="blockquote d-flex mt-20 mb-60">
                      <div className="blockquote-quit d-inline-block">
                        <span className="d-block theme-color">
                          <i className="fa-solid fa-quote-left" />
                        </span>
                      </div>
                      <div className="blockquote-text pt-30">
                        <p className="mb-10">
                          Bero eu est facilisis finibus. Cras sed sapien
                          accumsan, rhoncus justo quis, tristique velit.
                          Suspendisse vitae risus a enim posuere suscipit
                          eutomar keuki dite pare premikar valobasa. debeki keu
                          jibner shotto asha valobasar age nijeke nio bajiye
                        </p>
                        <div className="blockquote-info d-flex align-items-center">
                          <span className="main-color fontNoto f-700 mb-0 pl-35 position-relative d-block">
                            Proin molest
                          </span>
                        </div>
                        {/* /b-info */}
                      </div>
                    </blockquote>
                    <p className="mb-25">
                      Cras sit amet velit quis felis pellentesque finibus. Proin
                      molestie metus eu sem efficitur, et pulvinar mauris
                      dignissim. In nec erat tincidunt, accumsan velit et,
                      condimentum ex. Aenean et risus lorem. Maecenas interdum
                      turpis est, ac viverra diam ultrices ac. Vestibulum mi
                      nibh, interdum at ipsum at, maximus accumsan odio. Nam ut
                      sem purus. Donec pulvinar tempor ipsum, id iaculis est
                      mattis nec. Proin ornare mauris porta ipsum maximus
                      placerat. Maecenas in purus quis purus venenatis efficitur
                      in nec enim.
                    </p>
                    <p>
                      Cras sit amet velit quis felis pellentesque finibus. Proin
                      molestie metus eu sem efficitur, et pulvinar mauris
                      dignissim. In nec erat tincidunt, accumsan velit et,
                      condimentum ex. Aenean et risus lorem. Maecenas interdum
                      turpis est, ac viverra diam ultrices ac. Vestibulum mi
                      nibh, interdum at ipsum at, maximus accumsan odio. Nam ut
                      sem purus. Donec pulvinar tempor ipsum, id iaculis est
                      mattis nec. Proin ornare mauris porta ipsum maximus
                      placerat. Maecenas in purus quis purus venenatis efficitur
                      in nec enim.
                    </p>
                  </div>
                  {/* /rd-description */}
                  <div className="blog-p-content-footer mb-55 d-flex align-items-center">
                    <span className="d-block text-uppercase pr-2 fontNoto f-700 mb-0">
                      Share
                    </span>
                    <ul className="social-link">
                      <li className="d-inline-block">
                        <a
                          className="facebook-color text-center pl-10 d-inline-block transition-3"
                          href="#"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a
                          className="twitter-color text-center pl-10 d-inline-block transition-3"
                          href="#"
                        >
                          <i className="fab fa-x-twitter" />
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a
                          className="google-plus-color pl-10 d-inline-block transition-3"
                          href="#"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a
                          className="linkedin-color text-center pl-10 d-inline-block transition-3"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                    {/* social-link */}
                  </div>
                  {/* /blog-p-content-footer */}
                </div>
                {/* /container */}
                <div className="related-post">
                  <h3 className="mb-45">Related Posts</h3>
                  <div className="row">
                    <div className="col-xl-6  col-lg-6 col-md-6  col-sm-12 col-12">
                      <div className="single-room-hm1 white-bg transition5 mb-40">
                        <div className="room-hm1-img transition5">
                          <img
                            className="w-100"
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
                            Lorem ipsum dolor sit amet, consec tetur adip khobor
                            nio na
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
                      <div className="single-room-hm1 white-bg transition5 mb-40">
                        <div className="room-hm1-img transition5">
                          <img
                            className="w-100"
                            src="images/room/hm1-rooms-img2.jpg"
                            alt="room image 02"
                          />
                        </div>
                        {/* /room-hm1-img */}
                        <div className="room-hm1-content pl-30 pr-30 pt-25 pb-30">
                          <h4 className="mb-10">
                            <Link href="rooms-details">
                              Luxurious Single Room
                            </Link>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consec tetur adip khobor
                            nio na
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
                  </div>
                  {/* /row */}
                </div>
                {/* /container */}
                {/* blog-details-review start */}
                <div className="room-details-review-area">
                  <div className="container px-0">
                    <div className="blog-details-page-review pt-35">
                      <h4 className="mb-25">3 Comments</h4>
                      <div className="review-comments-area mt-50">
                        <div className="row">
                          <div className="col-xl-1 col-lg-2 col-md-2  col-sm-2 col-4 pr-xl-0">
                            <div className="client-avatar mb-18">
                              <img
                                className="avatar-img rounded-circle"
                                src="images/blog-page/blog-page-authout-img1.jpg"
                                alt="image1"
                              />
                            </div>
                          </div>
                          {/* /col */}
                          <div className="col-xl-11 col-lg-10  col-md-10  col-sm-10 col-12">
                            <div className="review-text single-blog-comments position-relative pb-10 pt-30 pl-35 pr-35 mb-45">
                              <div className="review-head d-flex justify-content-between">
                                <div className="review-header-info">
                                  <h5 className="pr-2">Sophia Permar</h5>
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
                                <div className="my-btn d-inline-block bd-review-btn mt-1">
                                  <Link
                                    href="rooms-details"
                                    className="btn theme-bg w-100"
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </div>
                              {/* /review-head */}
                              <p className="dc-text1 mt-15">
                                Tollit anim uisque elementum, tortor a
                                tinciduntes aliquam, justo massa elementum
                                dolor, eu bibendum sem erat id risus. Aliquam
                                pharetra facilisis turpis, eu semper diam
                                hendrerit a. Curabitur tristique eu augue eu
                                porta. Aliquam varius mollis dolor, in malesuada
                                arcu rhoncus ac. Maecenas at urna nisi.
                              </p>
                            </div>
                          </div>
                          {/* /col */}
                        </div>
                        {/* /row */}
                        <div className="row">
                          <div className="col-xl-1 col-lg-2 col-md-2  col-sm-2 col-4 pr-xl-0">
                            <div className="client-avatar mb-18">
                              <img
                                className="avatar-img rounded-circle"
                                src="images/blog-page/blog-page-authout-img2.jpg"
                                alt="image2"
                              />
                            </div>
                          </div>
                          {/* /col */}
                          <div className="col-xl-11 col-lg-10  col-md-10  col-sm-10 col-12">
                            <div className="review-text single-blog-comments position-relative pb-10 pt-30 pl-35 pr-35 mb-45">
                              <div className="review-head d-flex justify-content-between">
                                <div className="review-header-info">
                                  <h5 className="pr-2">Eric Thomson</h5>
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
                                <div className="my-btn d-inline-block bd-review-btn mt-1">
                                  <Link
                                    href="rooms-details"
                                    className="btn theme-bg w-100"
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </div>
                              {/* /review-head */}
                              <p className="dc-text1 mt-15">
                                Tollit anim uisque elementum, tortor a
                                tinciduntes aliquam, justo massa elementum
                                dolor, eu bibendum sem erat id risus. Aliquam
                                pharetra facilisis turpis, eu semper diam
                                hendrerit a. Curabitur tristique eu augue eu
                                porta. Aliquam varius mollis dolor, in malesuada
                                arcu rhoncus ac. Maecenas at urna nisi.
                              </p>
                            </div>
                          </div>
                          {/* /col */}
                        </div>
                        {/* /row */}
                        <div className="row">
                          <div className="col-xl-1 col-lg-2 col-md-2  col-sm-2 col-4 pr-xl-0">
                            <div className="client-avatar mb-18">
                              <img
                                className="avatar-img rounded-circle"
                                src="images/blog-page/blog-page-authout-img3.jpg"
                                alt="image3"
                              />
                            </div>
                          </div>
                          {/* /col */}
                          <div className="col-xl-11 col-lg-10  col-md-10  col-sm-10 col-12">
                            <div className="review-text single-blog-comments position-relative pb-10 pt-30 pl-35 pr-35 mb-45">
                              <div className="review-head d-flex justify-content-between">
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
                                <div className="my-btn d-inline-block bd-review-btn mt-1">
                                  <Link
                                    href="rooms-details"
                                    className="btn theme-bg w-100"
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </div>
                              {/* /review-head */}
                              <p className="dc-text1 mt-15">
                                Tollit anim uisque elementum, tortor a
                                tinciduntes aliquam, justo massa elementum
                                dolor, eu bibendum sem erat id risus. Aliquam
                                pharetra facilisis turpis, eu semper diam
                                hendrerit a. Curabitur tristique eu augue eu
                                porta. Aliquam varius mollis dolor, in malesuada
                                arcu rhoncus ac. Maecenas at urna nisi.
                              </p>
                            </div>
                          </div>
                          {/* /col */}
                        </div>
                        {/* /row */}
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                  {/* /container */}
                </div>
                {/* /room-details-review-area */}
                {/* blog-details-review end */}
                {/* blog-details-reply-area start */}
                <div className="blog-details-reply-area mt-30">
                  <div className="containe">
                    <div className="reply-form contact-form news-contact-form">
                      <h4 className="mb-25">Add A Comment</h4>
                      <form method="POST" id="contact-form">
                        <div className="contact-info text-left pt-20">
                          <div className="row px-md-2">
                            <div
                              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 px-md-2"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration={2000}
                            >
                              <input
                                className="name w-100 primary-border pl-20 pt-15 pb-15 pr-10"
                                type="text"
                                name="inputName"
                                id="inputName"
                                placeholder="Your Name"
                                required=""
                              />
                              {/* /name */}
                            </div>
                            {/* /col */}
                            <div
                              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 px-md-2"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration={2500}
                            >
                              <input
                                className="email w-100 primary-border pl-20 pt-15 pb-15 pr-10"
                                type="email"
                                name="inputEmail"
                                id="inputEmail"
                                placeholder="Your Email"
                                required=""
                              />
                              {/* /email */}
                            </div>
                            {/* /col */}
                            <div
                              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 px-md-2"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration={2000}
                            >
                              <input
                                className="website w-100 primary-border pl-20 pt-15 pb-15 pr-10"
                                type="text"
                                name="inputWebsite"
                                id="inputWebsite"
                                placeholder="Website"
                                required=""
                              />
                              {/* /name */}
                            </div>
                            {/* /col */}
                          </div>
                          {/* /row */}
                          <div className="row px-md-2">
                            <div
                              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 px-md-2"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration={2000}
                            >
                              <textarea
                                className="massage w-100 primary-border pl-20 pt-20"
                                name="inputMessage"
                                id="inputMessage"
                                placeholder="Write your comment here"
                                required=""
                                defaultValue={""}
                              />
                              {/* /textarea */}
                            </div>
                            {/* /col */}
                          </div>
                          {/* /row */}
                          <div className="my-btn w-100">
                            <button
                              className="btn theme-bg text-uppercase rounded-0 f-500"
                              type="submit"
                              name="submit"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              data-aos-duration={2500}
                            >
                              Submit now
                            </button>
                          </div>
                        </div>
                      </form>
                      <p className="form-message mt-20" />
                    </div>
                  </div>
                  {/* /container */}
                </div>
                {/* blog-details-reply-area end */}
              </div>
              {/* /col */}
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="row rooms-page-left-sidebar">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="sidebar-widget sidebar-search-area section-bg pl-35 pr-35 pt-40 pb-40 mb-50">
                      <div className="blog-search contact-form input position-relative">
                        <input
                          type="text"
                          id="search"
                          name="search"
                          className="primary-border w-100 pl-20"
                          placeholder="type and Search"
                        />
                        <span className="position-absolute right-0 meta-text-color mr-20">
                          <i className="fas fa-search" />
                        </span>
                      </div>
                      {/* /check-in-form */}
                    </div>
                    {/* /rp-search-area */}
                  </div>
                  {/* /col */}
                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="sidebar-widget pc-rooms section-bg pl-35 pr-35 pt-35 pb-40 mb-50">
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
                          <div className="pr-rooms-content ml-25 mt--10">
                            <h6 className="mb-2">
                              <Link href="rooms-details">
                                Simple Single Room
                              </Link>
                            </h6>
                            <span className="text-color d-block mb-10">
                              Starts From{" "}
                              <span className="rc-price main-color f-700 fontNoto">
                                $299
                              </span>
                            </span>
                            <div className="my-btn d-inline-block">
                              <Link
                                href="booking"
                                className="btn theme-bg w-100"
                              >
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
                          <div className="pr-rooms-content ml-25 mt--10">
                            <h6 className="mb-2">
                              <Link href="rooms-details">
                                luxuray Single Room
                              </Link>
                            </h6>
                            <span className="text-color d-block mb-10">
                              Starts From{" "}
                              <span className="rc-price main-color f-700 fontNoto">
                                $299
                              </span>
                            </span>
                            <div className="my-btn d-inline-block">
                              <Link
                                href="booking"
                                className="btn theme-bg w-100"
                              >
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
                          <div className="pr-rooms-content ml-25 mt--10">
                            <h6 className="mb-2">
                              <Link href="rooms-details">
                                Simple Double Room
                              </Link>
                            </h6>
                            <span className="text-color d-block mb-10">
                              Starts From{" "}
                              <span className="rc-price main-color f-700 fontNoto">
                                $299
                              </span>
                            </span>
                            <div className="my-btn d-inline-block">
                              <Link
                                href="booking"
                                className="btn theme-bg w-100"
                              >
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
                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="sidebar-widget rp-room-category section-bg pl-35 pr-35 pt-35 pb-30 mb-50">
                      <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                        Category
                      </h4>
                      <div className="about-instructor-wrapper">
                        <ul className="">
                          <li className="mb-10 f-500">Education</li>
                          <li className="mb-10 f-500">Web Design</li>
                          <li className="mb-10 f-500">App Development</li>
                          <li className="mb-10 f-500">Scholarships</li>
                          <li className="mb-10 f-500">Students</li>
                          <li className="mb-10 f-500">Universities</li>
                          <li className="mb-10 f-500">Courses</li>
                          <li className="mb-10 f-500">Tutorials</li>
                          <li className="mb-10 f-500">Success Story</li>
                          <li className="mb-10 f-500">Trending Topics</li>
                        </ul>
                      </div>
                    </div>
                    {/* /rp-service */}
                  </div>
                  {/* /col */}
                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="sidebar-widget rp-Comments section-bg pl-35 pr-35 pt-35 pb-40 mb-50">
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
                              Lorem ipsum dolor sit amet,na consec teutimh adip
                              khobor nio
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
                              Officiis aperiam non passim na dolorem, ullam non
                              error enim
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
                              Dolor ipsum dolor sit amet,nani consec teutim adip
                              khobor nid
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /rp-service */}
                  </div>
                  {/* /col */}
                  <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="sidebar-widget rp-tag section-bg pl-35 pr-35 pt-35 pb-30 mb-50">
                      <h4 className="sidebar-title f-700 fontNoto text-capitalize mb-22 d-inline-block">
                        Popular Tags
                      </h4>
                      <div className="popular-tag">
                        <ul>
                          <li className="secondary-color d-inline-block primary-border2">
                            Web Design
                          </li>
                          <li className="secondary-color d-inline-block primary-border2">
                            Weeding
                          </li>
                          <li className="secondary-color d-inline-block primary-border2">
                            Photography
                          </li>
                          <li className="secondary-color d-inline-block primary-border2">
                            Behance
                          </li>
                          <li className="secondary-color d-inline-block primary-border2">
                            Picky
                          </li>
                          <li className="secondary-color d-inline-block primary-border2">
                            Travelling
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /rp-service */}
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
        {/* /rooms-page-right-sidebar */}
      </div>
    </RoveroLayout>
  );
};
export default page;
