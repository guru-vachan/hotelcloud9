import Link from "next/link";

const News = () => {
  return (
    <div className="blog-hm1-area mt-115 mb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7  col-md-9  col-sm-12 col-12">
            <div className="title text-center">
              <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-2">
                Know More about us
              </span>
              <h2 className="mb-22">Latest News &amp; Events</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius mod tempor tomar keu kidite paro
              </p>
            </div>
            {/* /title */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
        <div className="row blog-hm1-wrapper d-flex justify-content-center align-items-center mt-70">
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="single-blog-wrapper blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30">
              <div className="blog-hm1-img w-100 position-relative transition5">
                <img
                  className="img w-100"
                  src="images/news/hm1-news-img1.jpg"
                  alt="news-images01"
                />
              </div>
              {/* /blog-img */}
              <div className="blog-hm1-content position-absolute transition5 z-index1 w-100 h-100">
                <div className="blog-hm1-text position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pt-20 pb-25">
                  <div className="blog-hm1-text-hover transition5">
                    <span className="text-white text-uppercase fontNoto f-700 d-inline-block">
                      Evnets
                    </span>
                    <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                      <span className="text-white d-block f-400">
                        15 June 2020
                      </span>
                    </div>
                    <h4 className="text-white mb-15 mt-1 mb-0">
                      <Link href="blog-details">
                        Anuis consr nisl efficitur
                      </Link>
                    </h4>
                  </div>
                  {/* /text-hover */}
                  <div className="my-btn2 d-inline-block blog-btn transition5">
                    <Link
                      href="rooms-details"
                      className="btn position-relative rounded-0 transition5"
                    >
                      read more
                    </Link>
                  </div>
                  {/* / btn */}
                </div>
                {/* /blog text */}
              </div>
              {/* /single-news */}
            </div>
            {/* /single-blog */}
          </div>
          {/* /col */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="row">
              <div className="col-xl-12 col-lg-12  col-md-12  col-sm- col-">
                <div
                  className="single-blog-wrapper blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                  data-overlay={2}
                >
                  <div className="blog-hm1-img w-100 position-relative transition5">
                    <img
                      className="img w-100"
                      src="images/news/hm1-news-img2.jpg"
                      alt="news-images02"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="blog-hm1-content position-absolute transition5 z-index1 w-100 h-100">
                    <div className="blog-hm1-text position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pt-20 pb-25">
                      <div className="blog-hm1-text-hover transition5">
                        <span className="text-white text-uppercase fontNoto f-700 d-inline-block">
                          Evnets
                        </span>
                        <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                          <span className="text-white d-block f-400">
                            15 June 2020
                          </span>
                        </div>
                        <h4 className="text-white mb-15 mt-1 mb-0">
                          <Link href="blog-details">
                            Nunc na eu sodales bolares
                          </Link>
                        </h4>
                      </div>
                      {/* /text-hover */}
                      <div className="my-btn2 d-inline-block blog-btn transition5">
                        <Link
                          href="rooms-details"
                          className="btn  position-relative rounded-0 transition5"
                        >
                          read more
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /blog text */}
                  </div>
                  {/* /single-news */}
                </div>
                {/* /single-blog */}
              </div>
              {/* /col */}
              <div className="col-xl-12 col-lg-12  col-md-12  col-sm- col-">
                <div
                  className="single-blog-wrapper blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                  data-overlay={2}
                >
                  <div className="blog-hm1-img w-100 position-relative transition5">
                    <img
                      className="img w-100"
                      src="images/news/hm1-news-img3.jpg"
                      alt="news-images03"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="blog-hm1-content position-absolute transition5 z-index1 w-100 h-100">
                    <div className="blog-hm1-text position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pt-20 pb-25">
                      <div className="blog-hm1-text-hover transition5">
                        <span className="text-white text-uppercase fontNoto f-700 d-inline-block">
                          Blog
                        </span>
                        <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                          <span className="text-white d-block f-400">
                            15 June 2020
                          </span>
                        </div>
                        <h4 className="text-white mb-15 mt-1 mb-0">
                          <Link href="blog-details">
                            Curaur dui urstas et fermen
                          </Link>
                        </h4>
                      </div>
                      {/* /text-hover */}
                      <div className="my-btn2 d-inline-block blog-btn transition5">
                        <Link
                          href="rooms-details"
                          className="btn position-relative rounded-0 transition5"
                        >
                          read more
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /blog text */}
                  </div>
                  {/* /single-news */}
                </div>
                {/* /single-blog */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /col */}
          <div
            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="row">
              <div className="col-xl-12 col-lg-12  col-md-6  col-sm-6 col-">
                <div
                  className="single-blog-wrapper blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                  data-overlay={2}
                >
                  <div className="blog-hm1-img w-100 position-relative transition5">
                    <img
                      className="img w-100"
                      src="images/news/hm1-news-img4.jpg"
                      alt="news-images04"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="blog-hm1-content position-absolute transition5 z-index1 w-100 h-100">
                    <div className="blog-hm1-text position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pt-20 pb-25">
                      <div className="blog-hm1-text-hover transition5">
                        <span className="text-white text-uppercase fontNoto f-700 d-inline-block">
                          Blog
                        </span>
                        <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                          <span className="text-white d-block f-400">
                            15 June 2020
                          </span>
                        </div>
                        <h4 className="text-white mb-15 mt-1 mb-0">
                          <Link href="blog-details">
                            Proin turpis urna bolte paro
                          </Link>
                        </h4>
                      </div>
                      {/* /text-hover */}
                      <div className="my-btn2 d-inline-block blog-btn transition5">
                        <Link
                          href="rooms-details"
                          className="btn position-relative rounded-0 transition5"
                        >
                          read more
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /blog text */}
                  </div>
                  {/* /single-news */}
                </div>
                {/* /single-blog */}
              </div>
              {/* /col */}
              <div className="col-xl-12 col-lg-12  col-md-6  col-sm-6 col-">
                <div
                  className="single-blog-wrapper blog-overly position-relative transition5 zoom-img-hover over-hidden transition5 d-flex align-items-center mb-30"
                  data-overlay={2}
                >
                  <div className="blog-hm1-img w-100 position-relative transition5">
                    <img
                      className="img w-100"
                      src="images/news/hm1-news-img5.jpg"
                      alt="news-images05"
                    />
                  </div>
                  {/* /blog-img */}
                  <div className="blog-hm1-content position-absolute transition5 z-index1 w-100 h-100">
                    <div className="blog-hm1-text position-absolute w-100 bottom-0 transition5 pl-25 pr-25 pt-20 pb-25">
                      <div className="blog-hm1-text-hover transition5">
                        <span className="text-white text-uppercase fontNoto f-700 d-inline-block">
                          Evnets
                        </span>
                        <div className="blog-hm-date d-inline-block position-relative pl-15 ml-15">
                          <span className="text-white d-block f-400">
                            15 June 2020
                          </span>
                        </div>
                        <h4 className="text-white mb-15 mt-1 mb-0">
                          <Link href="blog-details">Vivamus ultrices ven</Link>
                        </h4>
                      </div>
                      {/* /text-hover */}
                      <div className="my-btn2 d-inline-block blog-btn transition5">
                        <Link
                          href="rooms-details"
                          className="btn  position-relative rounded-0 transition5"
                        >
                          read more
                        </Link>
                      </div>
                      {/* / btn */}
                    </div>
                    {/* /blog text */}
                  </div>
                  {/* /single-news */}
                </div>
                {/* /single-blog */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /col */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
};
export default News;
