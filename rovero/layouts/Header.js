"use client";
import { roveroUtility } from "@/utility/roveroUtility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const DesktopMenu = () => {
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      <ul className="d-block">
        <li>
          <Link href="/">Home</Link>
        
        </li>
        {/* /Home */}
        <li>
          <Link href="about">About</Link>
        </li>
        {/* /About */}
        <li>
          <a href="rooms2">Rooms</a>

        </li>


        <li>
          <Link href="contact">Contact</Link>
        </li>
        {/* /Contact */}
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul className="d-block">
        <li className="cursor-pointer">
          <Link href="/" aria-current="page">
            Home
          </Link>
         
        </li>
        {/* /Home */}
        <li>
          <Link href="about">About</Link>
        </li>
        {/* /About */}
        <li>
          <a href="rooms2">Rooms</a>
         
          
        </li>
        {/* /Home */}
      
        {/* /Pages */}
       
        {/* /News */}
        <li className="mean-last">
          <Link href="contact">Contact</Link>
        </li>
        {/* /Contact */}
      </ul>
    </nav>
  );
};

const Header = ({ homeClass = "hm2" }) => {
  useEffect(() => {
    roveroUtility.stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      {/*  ====== header-area-start =======================================  */}
      <header>
        <div className={`transparent-header header-area ${homeClass}`}>
          <div className="header">
            <div className="header-top pt-12">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7  col-lg-7  col-md-7  col-sm-12 col-12 d-flex align-items-center">
                    <div className="header-top-left d-none d-md-block">
                      <ul className="d-flex align-items-center">
                        <li>
                          <a href="#">
                            <span className="pr-2">
                              <i className="fa-solid fa-phone" />
                            </span>
                            7232054750
                          </a>
                        </li>
                        <li className="before-effect">
                          <a href="#">
                            <span className="pr-2">
                              <i className="fa-regular fa-envelope" />
                            </span>
                            admin@hotelcloud9.in
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /header-top-left */}
                  </div>
                  {/* /col */}
        
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container */}
            </div>
            {/* /header-top */}
            <div id="header-sticky" className="header-bottom">
              <div className="container">
                <div className="row align-items-center justify-content-between position-relative">
                  <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5 col-5 pr-0">
                    <div className="logo">
                      {homeClass == "hm1" ? (
                        <Link href="/" className="d-block">
                          <img src="https://hotelcloud9.in/wp-content/uploads/2022/06/cropped-Cloud-9-1-1-e1655889633598.png" alt="ROVERO" />
                        </Link>
                      ) : (
                        <Link href="/" className="d-block">
                          <img src="https://hotelcloud9.in/wp-content/uploads/2022/06/cropped-Cloud-9-1-1-e1655889633598.png" alt="ROVERO" />
                        </Link>
                      )}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-xl-9 col-lg-10 col-md-9 col-sm-7 col-7 pl-0 d-flex justify-content-end position-static">
                    <div className="main-menu">
                      <DesktopMenu />
                    </div>
                    {/* /main-menu */}
                    <div className="header-right d-flex align-items-center justify-content-end pl-25">
                      <ul className="social-link header-social d-none d-md-inline-block">
                        <li className="d-inline-block mr-10">
                          <a
                            className="facebook-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="instagram-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="twitter-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="linked-in-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      {/* social-link */}
                      <div className="d-block d-lg-none pl-20">
                        <a
                          className="mobile-menubar theme-color"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setToggle(true);
                          }}
                        >
                          <i className="fa-solid fa-bars" />
                        </a>
                      </div>
                      {/* /mobile-menubar */}
                    </div>
                    {/* /header-right */}
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container */}
            </div>
            {/* /header-bottom */}
          </div>
        </div>
        {/* /header-bottom */}
      </header>
      {/*  header-area-end  */}
      {/*  ====== header extra info start ================================== */}
      {/* side-mobile-menu start */}
      <div
        className={`side-mobile-menu white-bg pt-10 pb-30 pl-35 pr-30 pb-100 ${
          toggle ? "open-menubar" : ""
        }`}
      >
        <div className="w-100">
          <div className="close-icon d-inline-block float-right clear-both mt-15 mb-10">
            <a href="#" onClick={() => setToggle(false)}>
              <span className="icon-clear theme-color">
                <i className="fa fa-times" />
              </span>
            </a>
          </div>
        </div>
        <div className="side-menu-search header-search-content mt-70 pr-15">
          <form action="#" className="position-relative">
            <input
              className="w-100 rounded-0 pb-2"
              type="text"
              placeholder="Type Keyword..."
            />
            <a
              className="position-absolute right-0 top-0 dark-black-color d-block"
              href="#"
            >
              <i className="fas fa-search" />
            </a>
          </form>
        </div>
        <div className="mobile-menu mt-20 w-100 mean-container">
          <MobileMenu />
        </div>
        <ul className="pt-45 clear-both">
          <li>
            <a href="#" className="main-color mb-10 d-block">
              <span className="pr-2">
                <i className="fa-solid fa-phone" />
              </span>
              7232054750
            </a>
          </li>
          <li>
            <a href="#" className="main-color mb-10 d-block">
              <span className="pr-2">
                <i className="fa-regular fa-envelope" />
              </span>
              admin@hotelcloud9.in
            </a>
          </li>
        </ul>
        <ul className="social-link pt-10 clear-both">
          <li className="d-inline-block mr-10">
            <a
              className="facebook-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="twitter-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="instagram-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="linked-in-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
        {/* social-link */}
      </div>
      {/* /side-mobile-menu */}
      <div
        className={`body-overlay ${toggle ? "opened" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
export default Header;
