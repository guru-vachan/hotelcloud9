"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const BlogIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <div className="blog-page-area mt-100 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
            <div className="port-button mb-40 portfolio-menu">
              <button
                className={activeBtn("*")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
              <button
                className={activeBtn("news")}
                onClick={handleFilterKeyChange("news")}
                data-filter=".news"
              >
                News
              </button>
              <button
                className={activeBtn("events")}
                onClick={handleFilterKeyChange("events")}
                data-filter=".events"
              >
                Events
              </button>
              <button
                className={activeBtn("blog")}
                onClick={handleFilterKeyChange("blog")}
                data-filter=".blog"
              >
                Blog
              </button>
              <button
                className={activeBtn("stories")}
                onClick={handleFilterKeyChange("stories")}
                data-filter=".stories"
              >
                Stories
              </button>
            </div>
            {/* /home6-portfolio-menu */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
        <div className="row portfolio grid justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item news blog stories">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img1.jpg"
                  alt="portfolio image 1"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Aenean quis consr nifficit</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item events stories">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img2.jpg"
                  alt="portfolio image 2"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Tomra keuki dite paro</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item news blog">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img3.jpg"
                  alt="portfolio image 3"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Duis frnilla tempor mauris</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item news events stories">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img4.jpg"
                  alt="portfolio image 4"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Nunc ornare nonu sodal</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item blog events">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img6.jpg"
                  alt="portfolio image 6"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Vesulum pretium convllis</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 grid-item news events stories">
            <div className="single-blog-page-wrapper zoom-img-hover transition5 position-relative over-hidden mb-30">
              <div className="blog-page-img over-hidden">
                <img
                  className="w-100 img"
                  src="images/blog-page/blog-page-img5.jpg"
                  alt="portfolio image 5"
                />
              </div>
              <div className="blog-page-content pt-25 pb-25 pl-30 pr-30">
                <span className="text-uppercase fontNoto f-700 d-inline-block">
                  News
                </span>
                <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                  <span className="d-block f-400">15 June 2020</span>
                </div>
                <h4>
                  <Link href="rooms-details">Nullam pele ac neque</Link>
                </h4>
              </div>
              {/* /blog-page-content */}
            </div>
            {/* /single-blog-page */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
        <div className="blog-page-btn transparent-btn text-center mt-30">
          <div className="my-btn d-inline-block pr-40">
            <Link href="rooms-details" className="btn bg-transparent w-100">
              load more
            </Link>
          </div>
          {/* / btn */}
        </div>
        {/* /rooms-btn */}
      </div>
      {/* /container */}
    </div>
  );
};
export default BlogIsotope;
