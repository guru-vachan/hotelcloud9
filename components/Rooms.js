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
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-12 md:mb-20`}>
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
            src={imageUrl}
            alt={`${title} image`}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-lg mb-6">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm uppercase text-gray-500 mb-1">Starts From</p>
            <p className="text-3xl font-bold text-theme-color">₹{price}<span className="text-base font-normal text-gray-600">/night</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            
            <div className="my-btn d-inline-block">
                      <Link href="/rooms" className="btn theme-bg">
                      View Details
                      </Link>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};
