import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top primary-border-bottom pt-110 pb-75 mb-40">
          <div className="container">
            <div className="row">
  
              {/* /col */}
              <div>
                <div className="footer-widget f-adress">
                  <h6 className="text-capitalize text-white mb-20">Address</h6>
                  <div className="footer-ad mb-2 d-flex">
                    <span className="text-white pr-25 mt-1">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <p className="mb-0">
                    Jail circle, Opp. C.P Mall, Alwar(Raj.) - 301001
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-email mb-2 d-flex">
                    <span className="text-white pr-25 mt-1">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <p className="mb-0">
                      <a
                        className="text-color primary-hover d-inline-block"
                        href="#"
                      >
                        +91 7232054750 (Sales)
                      </a>
                    
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-phone mb-15">
                    <span className="text-white pr-25">
                      <i className="far fa-envelope" />
                    </span>
                    <a className="text-color primary-hover" href="#">
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
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-xl-6  col-lg-8  col-md-8  col-sm-12 col-12 pr-0">
                <div className="footer-widget footer-logo pb-35 d-sm-flex align-items-center">
                  <div className="foot-logo mr-30 mb-3 mb-sm-0 text-center text-sm-left">
                    <img src="https://hotelcloud9.in/wp-content/uploads/2022/06/cropped-Cloud-9-1-1-e1655889633598.png" alt="Rovero" />
                  </div>
                  <div className="copyright-text">
                    <p className="mb-0">
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
              <div className="col-xl-6 col-lg-4  col-md-12 col-sm-12 col-12">
                <div className="footer-widget pb-35 d-flex align-items-center justify-content-lg-end justify-content-center">
                  <h6 className="text-white mr-30 mb-0">Follow Us</h6>
                  <ul className="social-link">
                    <li className="d-inline-block mr-10">
                      <a
                        className="text-white text-center d-inline-block transition-3"
                        href="#"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="d-inline-block mr-10">
                      <a
                        className="text-white text-center d-inline-block transition-3"
                        href="#"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li className="d-inline-block mr-10">
                      <a
                        className="text-white text-center d-inline-block transition-3"
                        href="#"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="d-inline-block mr-10">
                      <a
                        className="text-white text-center d-inline-block transition-3"
                        href="#"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
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
