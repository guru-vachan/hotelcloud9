import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
import config from "@/utility/config";

const RoomDetails = ({ params }) => {
  const { slug } = params;
  const roomData  = config.rooms.find(room => room.slug === slug);

  if (!roomData) {
    return <div>Room not found</div>;
  }

  return (
    <RoveroLayout>
      <Breadcrumb
        pageName={roomData.title}
        bgImage={roomData.bgImage}
        pageTitle={roomData.title}
        pageSubTitle={roomData.description}
      />
      {/* ====== rooms-details-page-area-start =============================================== */}
      <div className="rooms-details-page-area mt-120">
        <div className="container">
          <div className="row rooms-details-page-wrapper">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="rooms-details-page-content">
                <div className="rd-heading d-sm-flex align-items-center justify-content-between mb-45">
                  <div className="section-content-title">
                    <h2 className="mb-0">
                      <Link href={`/rooms/${roomData.slug}`}>{roomData.title}</Link>
                    </h2>
                  </div>
         
                </div>
                {/* /rd-heading */}
                <div className="img-hover-effect-wrapper">
                  <div className="pd-img mb-25 zoom-img-hover img-hover-effect2 over-hidden position-relative">
                    <img
                      className="w-100 img"
                      src={roomData.imageUrl}
                      alt={roomData.title}
                    />
                  </div>
                </div>
                <div className="room-details-info primary-border pt-25 pb-18 mb-45">
                  <ul className="d-sm-flex justify-content-around">
                    <li className="single-rd-info text-center">
                      <img src="images/icon/rd-icon1.png" alt="" className="rd-info-icon" />
                      <span className="d-block text-color mt-10">{roomData.size}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img src="images/icon/rd-icon2.png" alt="" className="rd-info-icon" />
                      <span className="d-block text-color mt-10">{roomData.capacity}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img src="images/icon/rd-icon3.png" alt="" className="rd-info-icon" />
                      <span className="d-block text-color mt-10">{roomData.beds}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img src="images/icon/rd-icon4.png" alt="" className="rd-info-icon" />
                      <span className="d-block text-color mt-10">{roomData.view}</span>
                    </li>
                  </ul>
                </div>
                {/* /room-details-info */}
                <div className="rd-description mb-45">
                  <h5 className="mb-25">Description</h5>
                  <p>{roomData.longDescription}</p>
                </div>
                {/* /rd-description */}
                <div className="rd-facilities mb-30">
                  <h5 className="mb-25">Facilities</h5>
                  <ul className="rd-facilities-list">
                    {roomData.facilities.map((facility, index) => (
                      <li key={index} className="d-inline-block mb-20">
                        <div className="d-flex align-items-center">
                          <span className="facilities-icon d-inline-block text-center">
                            <img src={facility.icon} alt={facility.name} />
                          </span>
                          <p className="pl-20 mb-0">{facility.name}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* /rd-facilities */}
                <div className="room-details-gallery mb-45">
                  <h5 className="mb-25">Gallery</h5>
                  <div className="row pl-10 pr-10">
                    {roomData.galleryImages.map((image, index) => (
                      <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 px-1">
                        <div className="single-rd-gallery gallery-img-hover over-hidden position-relative mb-2">
                          <a data-fancybox="images" href={image}>
                            <img className="w-100" src={image} alt={`gallery image ${index + 1}`} />
                            <div className="gallery-hover transition5 text-center theme-color position-absolute transition5 z-index11">
                              <span className="d-flex align-items-center justify-content-center text-center h-100">
                                <i className="fa-solid fa-plus" />
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* /room-details-gallery */}
              </div>
              {/* /rooms-details-page-content */}
            </div>
            {/* /col */}
            
            {/* Add the sidebar here */}
            
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /rooms-details-page-area-end */}
      
      {/* Add similar rooms section here */}
      
    </RoveroLayout>
  );
};

export default RoomDetails;