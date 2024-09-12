import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <div className="inner-page-hero-area">
        <div
          className="inner-page-height blog-details-page-height inner-page-bg d-flex align-items-end position-relative black-overly"
          data-background="images/blog-page/blog-details-hero.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex align-items-end justify-content-center">
                <div className="inner-page-content text-center">
                  <h1 className="text-white mb-30 text-capitalize">
                    When the music is over turn off the light
                  </h1>
                  <div className="news-page-info-wrapper d-md-flex align-items-center justify-content-center mb-80">
                    <ul className="news-page-info mb-1 mb-md-0">
                      <li className="text-white text-uppercase fontNoto f-500 mr-20 d-inline-block">
                        <span className="text-white pr-1">
                          <i className="fas fa-user" />
                        </span>
                        Juwel Khan
                      </li>
                      <li className="text-white text-uppercase fontNoto f-500 mr-20 d-inline-block">
                        <span className="text-white pr-1">
                          <i className="fas fa-folder-open" />
                        </span>
                        News
                      </li>
                    </ul>
                    <ul className="news-page-info-comment">
                      <li className="text-white text-capitalize secondary-color mr-20 d-inline-block">
                        <span className="text-white pr-1">
                          <i className="fas fa-clock" />
                        </span>
                        May 06, 2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
      </div>

      <div className="blog-details-page-area mt-110 mb-120">
        <div className="blog-details-page-content-wpapper">
          <div className="container">
            <div className="b-details-page-content mb-45">
              <p className="mb-25">
                Opiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <p>
                Loboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <blockquote className="blockquote d-flex mt-20 mb-60">
                <div className="blockquote-quit d-inline-block">
                  <span className="d-block theme-color">
                    <i className="fa-solid fa-quote-left" />
                  </span>
                </div>
                <div className="blockquote-text pt-30">
                  <p className="mb-10">
                    Bero eu est facilisis finibus. Cras sed sapien accumsan,
                    rhoncus justo quis, tristique velit. Suspendisse vitae risus
                    a enim posuere suscipit eutomar keuki dite pare premikar
                    valobasa. debeki keu jibner shotto asha valobasar age nijeke
                    nio bajiye
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
                molestie metus eu sem efficitur, et pulvinar mauris dignissim.
                In nec erat tincidunt, accumsan velit et, condimentum ex. Aenean
                et risus lorem. Maecenas interdum turpis est, ac viverra diam
                ultrices ac. Vestibulum mi nibh, interdum at ipsum at, maximus
                accumsan odio. Nam ut sem purus. Donec pulvinar tempor ipsum, id
                iaculis est mattis nec. Proin ornare mauris porta ipsum maximus
                placerat. Maecenas in purus quis purus venenatis efficitur in
                nec enim.
              </p>
              <p>
                Cras sit amet velit quis felis pellentesque finibus. Proin
                molestie metus eu sem efficitur, et pulvinar mauris dignissim.
                In nec erat tincidunt, accumsan velit et, condimentum ex. Aenean
                et risus lorem. Maecenas interdum turpis est, ac viverra diam
                ultrices ac. Vestibulum mi nibh, interdum at ipsum at, maximus
                accumsan odio. Nam ut sem purus. Donec pulvinar tempor ipsum, id
                iaculis est mattis nec. Proin ornare mauris porta ipsum maximus
                placerat. Maecenas in purus quis purus venenatis efficitur in
                nec enim.
              </p>
            </div>
            {/* /rd-description */}
            <div className="blog-p-content-footer mb-75 d-flex align-items-center">
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
          {/* blog-details-review start */}
          <div className="room-details-review-area section-bg">
            <div className="container">
              <div className="blog-details-page-review pt-70 pb-25">
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
                      <div className="review-text single-blog-comments position-relative bg-white pb-10 pt-30 pl-35 pr-35 mb-45">
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
                          Tollit anim uisque elementum, tortor a tinciduntes
                          aliquam, justo massa elementum dolor, eu bibendum sem
                          erat id risus. Aliquam pharetra facilisis turpis, eu
                          semper diam hendrerit a. Curabitur tristique eu augue
                          eu porta. Aliquam varius mollis dolor, in malesuada
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
                          src="images/blog-page/blog-page-authout-img1.jpg"
                          alt="image1"
                        />
                      </div>
                    </div>
                    {/* /col */}
                    <div className="col-xl-11 col-lg-10  col-md-10  col-sm-10 col-12">
                      <div className="review-text single-blog-comments position-relative bg-white pb-10 pt-30 pl-35 pr-35 mb-45">
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
                          Tollit anim uisque elementum, tortor a tinciduntes
                          aliquam, justo massa elementum dolor, eu bibendum sem
                          erat id risus. Aliquam pharetra facilisis turpis, eu
                          semper diam hendrerit a. Curabitur tristique eu augue
                          eu porta. Aliquam varius mollis dolor, in malesuada
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
                          src="images/blog-page/blog-page-authout-img1.jpg"
                          alt="image1"
                        />
                      </div>
                    </div>
                    {/* /col */}
                    <div className="col-xl-11 col-lg-10  col-md-10  col-sm-10 col-12">
                      <div className="review-text single-blog-comments position-relative bg-white pb-10 pt-30 pl-35 pr-35 mb-45">
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
                          Tollit anim uisque elementum, tortor a tinciduntes
                          aliquam, justo massa elementum dolor, eu bibendum sem
                          erat id risus. Aliquam pharetra facilisis turpis, eu
                          semper diam hendrerit a. Curabitur tristique eu augue
                          eu porta. Aliquam varius mollis dolor, in malesuada
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
          <div className="blog-details-reply-area mt-60">
            <div className="container">
              <div className="reply-form contact-form news-contact-form">
                <h4 className="mb-25">Add A Comment</h4>
                <form method="POST" id="contact-form">
                  <div className="contact-info text-md-center text-lg-left pt-20">
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
        {/* /rooms-page-right-sidebar */}
      </div>
    </RoveroLayout>
  );
};
export default page;
