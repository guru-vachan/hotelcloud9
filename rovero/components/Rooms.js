import Link from 'next/link';

export const roomsData = [
  {
    id: 1,
    slug: "premium-room",
    imageUrl: "images/room/hm2-room-img1.jpg",
    title: "Premium Room",
    description: "Indulge in our Premium Room—luxurious space with stunning views, upscale amenities, and unmatched comfort.",
    price: 2749,
    reverse: false,
    bgImage: "/images/rooms-details/rooms-details-page-hero-bg.jpg",
    size: "30 sf",
    capacity: "2 Guests",
    beds: "1 King Bed",
    view: "City View",
    rating: 4.5,
    reviews: 8,
    longDescription: "Experience luxury and comfort in our Premium Room. This spacious accommodation offers stunning city views and is equipped with modern amenities to ensure a memorable stay. The room features a plush king-size bed, a work desk, and a seating area. The en-suite bathroom includes a rain shower and premium toiletries.",
    facilities: [
      { name: "Free Wi-Fi", icon: "images/icon/facilities-icon3.png" },
      { name: "Flat-screen TV", icon: "images/icon/facilities-icon1.png" },
      { name: "Mini-bar", icon: "images/icon/facilities-icon2.png" },
      { name: "Coffee maker", icon: "images/icon/facilities-icon4.png" },
      { name: "In-room safe", icon: "images/icon/facilities-icon5.png" },
      { name: "Air conditioning", icon: "images/icon/facilities-icon6.png" },
      { name: "24-hour room service", icon: "images/icon/facilities-icon7.png" }
    ],
    galleryImages: [
      "images/rooms-details/rd-gallery-img1.jpg",
      "images/rooms-details/rd-gallery-img2.jpg",
      "images/rooms-details/rd-gallery-img3.jpg",
      "images/rooms-details/rd-gallery-img4.jpg",
      "images/rooms-details/rd-gallery-img5.jpg",
      "images/rooms-details/rd-gallery-img6.jpg"
    ],
    bookingUrls: {
      direct: "/booking/premium-room",
      bookingCom: "https://www.booking.com/hotel/premium-room",
      airbnb: "https://www.airbnb.com/rooms/premium-room",
      expedia: "https://www.expedia.com/hotel/premium-room"
    }
  },
  {
    id: 2,
    slug: "super-premium",
    imageUrl: "images/room/hm2-room-img2.jpg",
    title: "Super Premium",
    description: "Enjoy unrivaled luxury in our Super Premium Room—elegant decor, exceptional comfort, and top-tier amenities.",
    price: 3299,
    reverse: true,
    bgImage: "/images/rooms-details/rooms-details-page-hero-bg.jpg",
    size: "40 sf",
    capacity: "2 Guests",
    beds: "1 King Bed",
    view: "Ocean View",
    rating: 4.8,
    reviews: 12,
    longDescription: "Our Super Premium Room offers an unparalleled luxury experience. Enjoy breathtaking ocean views from your private balcony. The room features elegant decor, a spacious living area, and a luxurious bathroom with a deep soaking tub and separate shower. Premium amenities and personalized service ensure a truly memorable stay.",
    facilities: [
      { name: "Free high-speed Wi-Fi", icon: "images/icon/facilities-icon3.png" },
      { name: "55-inch Smart TV", icon: "images/icon/facilities-icon1.png" },
      { name: "Nespresso machine", icon: "images/icon/facilities-icon4.png" },
      { name: "Fully stocked mini-bar", icon: "images/icon/facilities-icon2.png" },
      { name: "Luxury bath amenities", icon: "images/icon/facilities-icon5.png" },
      { name: "Pillow menu", icon: "images/icon/facilities-icon6.png" },
      { name: "Evening turndown service", icon: "images/icon/facilities-icon7.png" }
    ],
    galleryImages: [
      "images/rooms-details/rd-gallery-img1.jpg",
      "images/rooms-details/rd-gallery-img2.jpg",
      "images/rooms-details/rd-gallery-img3.jpg",
      "images/rooms-details/rd-gallery-img4.jpg",
      "images/rooms-details/rd-gallery-img5.jpg",
      "images/rooms-details/rd-gallery-img6.jpg"
    ],
    bookingUrls: {
      direct: "/booking/super-premium",
      bookingCom: "https://www.booking.com/hotel/super-premium",
      airbnb: "https://www.airbnb.com/rooms/super-premium",
      expedia: "https://www.expedia.com/hotel/super-premium"
    }
  },
  {
    id: 3,
    slug: "vip-suite-room",
    imageUrl: "images/room/hm2-room-img3.jpg",
    title: "VIP Suite Room",
    description: "Experience ultimate luxury in our VIP Suite—spacious, elegant, with exclusive amenities and breathtaking views",
    price: 5999,
    reverse: false,
    bgImage: "/images/rooms-details/rooms-details-page-hero-bg.jpg",
    size: "60 sf",
    capacity: "4 Guests",
    beds: "1 King Bed, 1 Sofa Bed",
    view: "Panoramic Ocean View",
    rating: 5,
    reviews: 15,
    longDescription: "Our VIP Suite Room is the epitome of luxury and exclusivity. This spacious suite features a separate living room, dining area, and a master bedroom with a walk-in closet. Enjoy panoramic ocean views from your large private terrace. The marble bathroom includes a Jacuzzi tub and a rain shower. Exclusive VIP services and amenities are provided for an unforgettable stay.",
    facilities: [
      { name: "Complimentary airport transfer", icon: "images/icon/facilities-icon8.png" },
      { name: "24/7 personal butler service", icon: "images/icon/facilities-icon7.png" },
      { name: "Private check-in/check-out", icon: "images/icon/facilities-icon1.png" },
      { name: "65-inch OLED TV", icon: "images/icon/facilities-icon1.png" },
      { name: "Bang & Olufsen sound system", icon: "images/icon/facilities-icon3.png" },
      { name: "Fully equipped kitchenette", icon: "images/icon/facilities-icon4.png" },
      { name: "In-suite spa treatments available", icon: "images/icon/facilities-icon5.png" },
      { name: "Access to VIP lounge", icon: "images/icon/facilities-icon6.png" }
    ],
    galleryImages: [
      "images/rooms-details/rd-gallery-img1.jpg",
      "images/rooms-details/rd-gallery-img2.jpg",
      "images/rooms-details/rd-gallery-img3.jpg",
      "images/rooms-details/rd-gallery-img4.jpg",
      "images/rooms-details/rd-gallery-img5.jpg",
      "images/rooms-details/rd-gallery-img6.jpg"
    ],
    bookingUrls: {
      direct: "/booking/vip-suite-room",
      bookingCom: "https://www.booking.com/hotel/vip-suite-room",
      airbnb: "https://www.airbnb.com/rooms/vip-suite-room",
      expedia: "https://www.expedia.com/hotel/vip-suite-room"
    }
  }
];

  
const Rooms = () => {


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
                <Link href={`/rooms-details/${slug}`} className="btn theme-bg w-100">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
