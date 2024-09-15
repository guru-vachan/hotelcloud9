import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top primary-border-bottom pt-110 pb-75 mb-40">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-widget f-adress">
                  <h6 className="text-capitalize text-white mb-20">Address</h6>
                  <div className="footer-ad mb-3 d-flex flex-column flex-sm-row">
                    <span className="text-white pr-25 mb-2 mb-sm-0">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <p className="mb-0">
                      Jail circle, Opp. C.P Mall, Alwar(Raj.) - 301001
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-email mb-3 d-flex flex-column flex-sm-row">
                    <span className="text-white pr-25 mb-2 mb-sm-0">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <p className="mb-0">
                      <a
                        className="text-color primary-hover d-inline-block"
                        href="tel:+917232054750"
                      >
                        +91 7232054750 (Sales)
                      </a>
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-phone mb-15 d-flex flex-column flex-sm-row">
                    <span className="text-white pr-25 mb-2 mb-sm-0">
                      <i className="far fa-envelope" />
                    </span>
                    <a className="text-color primary-hover" href="mailto:admin@hotelcloud9.in">
                      admin@hotelcloud9.in
                    </a>
                  </div>
                  {/* /phone-call */}
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="footer-widget footer-logo pb-35 text-center">
                  <div className="foot-logo mb-4">
                    <img src="https://hotelcloud9.in/wp-content/uploads/2022/06/cropped-Cloud-9-1-1-e1655889633598.png" alt="Rovero" className="img-fluid" />
                  </div>
                  <div className="copyright-text">
                    <p className="mb-3">
                      All rights reserved
                      <a href="#" className="c-theme primary-color f-600">
                        {" "}
                        cloud9
                      </a>
                      © {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
              {/* /col */}
              <div className="col-12 col-lg-4">
                <div className="footer-widget pb-35 text-center text-lg-right">
                  <h6 className="text-white mb-3">Follow Us</h6>
                  <ul className="social-link">
                    {/* ... existing social media links ... */}
                  </ul>
                  {/* social-link */}
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /footer-bottom */}
      </div>
    </footer>
  );
};

export default Footer;
