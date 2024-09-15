import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import { pages } from "@/utility/config";

const page = () => {
  return (
    <RoveroLayout>
     <Breadcrumb
        pageName="contact Us"
        pageTitle={pages.contact.title}
        pageSubTitle={pages.contact.description}
        bgImage={pages.contact.image}
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
                  Jail circle, Opp. C.P Mall
                    <br /> Alwar(Raj.) - 301001
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
                    +91 7232054750 (Sales)
                    </a>
                    <a className="d-block" href="tell:+1234567891">
                    +91 7232054750 (Enquiry)
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
                    admin@hotelcloud9.in
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
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4095461102866!2d76.61214317641567!3d27.580829731058444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972993327f7a909%3A0x1c754df47f880a88!2sHotel%20Cloud%209%20Alwar!5e0!3m2!1sen!2sin!4v1726406913721!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        {/* /map */}
      </div>
    </RoveroLayout>
  );
};
export default page;
