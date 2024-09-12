import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Contact"
        bgImage="images/bg/contact-page-bg.jpg"
        pageTitle="Contact Us"
      />
      <div className="contact-area contact-page mt-120">
        <div className="container">
          <div className="row contact-info-wrapper justify-content-center align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4  col-sm-8 col-12 contact-info-sep position-relative mb-30">
              <div className="contact-page-info contact-location position-relative text-center">
                <div className="contact-icon theme-bg d-inline-block text-center mb-30 mr-0">
                  <span className="d-inline-block">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                </div>
                {/* /contact-icon */}
                <div className="contact-text">
                  <h4 className="mb-15">Address</h4>
                  <p className="mb-0">
                    20 Bordeshi, Amin Bazar
                    <br /> Savar, Dhaka
                  </p>
                </div>
              </div>
              {/* /contact-location */}
            </div>
            {/* /col */}
            <div className="col-xl-4 col-lg-4 col-md-4  col-sm-8 col-12 contact-info-sep position-relative mb-30">
              <div className="contact-page-info contact-phone position-relative text-center">
                <div className="contact-icon theme-bg theme-bg d-inline-block text-center mb-30 mr-0">
                  <span className="d-inline-block">
                    <i className="fas fa-phone-alt" />
                  </span>
                </div>
                {/* /contact-icon */}
                <div className="contact-text">
                  <h4 className="mb-3">Phone Number</h4>
                  <p className="mb-0">
                    <a className="d-block" href="tell:+1234567890">
                      +123 456 7890
                    </a>
                    <a className="d-block" href="tell:+1234567891">
                      +01234 567 891
                    </a>
                  </p>
                </div>
              </div>
              {/* /contact-location */}
            </div>
            {/* /col */}
            <div className="col-xl-4 col-lg-4 col-md-4  col-sm-8 col-12 contact-info-sep position-relative mb-30">
              <div className="contact-page-info contact-email text-center">
                <div className="contact-icon theme-bg d-inline-block text-center mb-30 mr-0">
                  <span className="d-inline-block">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
                {/* /contact-icon */}
                <div className="contact-text">
                  <h4 className="mb-3">Email Address</h4>
                  <p className="mb-0">
                    <a className="d-block" href="#">
                      hello@hotelian.com
                    </a>
                    <a className="d-block" href="#">
                      sales@hotelian.com
                    </a>
                  </p>
                </div>
              </div>
              {/* /contact-email */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="contact-wrapper contact-page-form-margin pt-70">
                <div className="contact-form">
                  <div className="con-title">
                    <h4 className="mb-35">Write Us Something</h4>
                  </div>
                  {/* /title */}
                  <form method="POST" id="contact-form">
                    <div className="contact-info text-md-center text-lg-left pt-20">
                      <div className="row">
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
                      <div className="row">
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
                          className="btn theme-bg text-uppercase rounded-0 f-500 w-100"
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
                {/* /contact-form */}
              </div>
              {/* /contact-wrapper */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
        <div className="over-hidden contact-page-map mt-100 mb-120">
          <div className="container">
            <div
              className="map-wrapper w-100 z-index1 rounded-0"
              id="mapwrapper"
            />
          </div>
          {/* /container */}
        </div>
        {/* /map */}
      </div>
    </RoveroLayout>
  );
};
export default page;
