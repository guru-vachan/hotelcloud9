const Subscribe = () => {
  return (
    <div
      className="subscription-area about-subscription hm2 over-hidden position-relative bg-no-repeat bg-cover black-overly aos-init aos-animate"
      data-background="images/bg/subscription-bg-img.jpg"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container subscription-padding pt-130 pb-140">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8  col-md-10  col-sm-12 col-12">
            <div className="subscription-content text-center">
              <div className="section-content-title text-center">
                <span className="text-uppercase text-white f-700 fontNoto pb-15 mb-2">
                  Get Updates Regularly
                </span>
                <h2 className="mb-15 text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-white">
                  Bipor incididunt ut labore et dolore magna liqu Ut enim ad
                  teros ut labore et magna dolore lorejgd jigtdrrs aliqua. Ut
                  enim adcons
                </p>
              </div>
              {/* /section-title */}
              <div className="row justify-content-center">
                <div className="col-xl-9  col-lg-9 col-md-10 col-sm-10 col-12">
                  <div className="subscription-form w-100 mt-55">
                    <form action="#">
                      <div className="subscribe-info position-relative">
                        <input
                          className="sub-email w-100 border-0 pl-25 pr-10 bg-white"
                          type="email"
                          name="email"
                          id="Email"
                          placeholder="Your email here"
                        />
                        <a
                          className="subscribe-btn position-absolute right-0 top-0 bottom-0 f-500 pl-20 pr-25 theme-color"
                          href="#"
                        >
                          <span>
                            <i className="fa-regular fa-envelope" />
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                  {/* s-form */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
            </div>
            {/* /subscription-content */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
};
export default Subscribe;
