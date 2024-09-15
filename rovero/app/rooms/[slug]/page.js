import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
import { roomsData } from "@/components/Rooms";

const RoomDetails = ({ params }) => {
  const { slug } = params;
  const roomData = roomsData.find(room => room.slug === slug);

  if (!roomData) {
    return <div>Room not found</div>;
  }

  return (
    <RoveroLayout>
      <Breadcrumb
        pageName={roomData.title}
        bgImage={roomData.bgImage}
        pageTitle={roomData.title}
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
                      <Link href={`/rooms-details/${roomData.slug}`}>{roomData.title}</Link>
                    </h2>
                  </div>
                
                  {/* /ratting a */}
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
                  {/* /pd-img */}
                </div>
                <div className="room-details-info primary-border pt-25 pb-18 mb-45">
                  <ul className="d-sm-flex justify-content-around">
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon1.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">{roomData.size}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon2.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">{roomData.capacity}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon3.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">{roomData.beds}</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="images/icon/rd-icon4.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">
                        {roomData.view}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* /room-details-info */}
                
                {/* Add more sections here using roomData properties */}
                
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
   
      {/* /similar-rooms-area end */}
    </RoveroLayout>
  );
};

export default RoomDetails;