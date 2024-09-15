
import config from "@/utility/config";
import Link from "next/link";

const Rooms = () => {
  const roomsData = config.rooms;

  return (
    <div className="rooms-hm2-area hm2 mt-60 md:mt-80 mb-60 md:mb-80">
      <div className="container-fluid container-wrapper p-md-0">
        {roomsData.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

const RoomCard = ({ imageUrl, title, description, price, reverse, slug }) => {
    return (
      <div className={`row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper ${reverse ? 'flex-column-reverse flex-md-row' : ''}`}>
        <div className={`col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ${reverse ? 'order-md-2' : ''}`}>
          <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
            <img
              className="w-100 img"
              src={imageUrl}
              alt={`${title} image`}
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="room-hm2-content mt-4 md:mt-0 px-4 md:px-8">
            <div className="section-content-title">
              <h2 className="mb-3 text-2xl md:text-3xl">{title}</h2>
              <p>{description}</p>
            </div>
            <div className="room-info-details mt-25">
              <div className="room-price">
                <p className="mr-20 d-inline-block mb-0">Starts From</p>
                <span className="room-price f-700 main-color fontNoto text-uppercase">
                  <span className="theme-color mr-2">₹{price}</span>/ Night / Single
                </span>
              </div>
              <div className="my-btn d-inline-block pr-40 mt-3">
                <Link href={`/rooms/${slug}`} className="btn theme-bg w-100">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
