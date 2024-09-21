"use client";

import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
import Image from 'next/image';
import config from "@/utility/config";
import { Bed, Users, Ruler, Mountain, Plus, Wifi, Tv, Wine, Coffee, Lock, Wind, Utensils, X } from 'lucide-react';
import { useState } from 'react';

const RoomDetails = ({ params }) => {
  const { slug } = params;
  const roomData = config.rooms.find(room => room.slug === slug);

  if (!roomData) {
    return <div>Room not found</div>;
  }

  const bookingPlatforms = [
    { name: 'Book Direct', logo: 'https://example.com/path-to-your-hotel-logo.png', key: 'direct' },
    { name: 'Booking.com', logo: 'https://q-xx.bstatic.com/xdata/images/xphoto/300x300/132270687.jpg?k=4eca6f8c0a6a7a2ce3b3d5f3ea19e94e64b5e3d0f3e7a0d1f9f7cb6b4b6b7b7b&o=', key: 'bookingCom' },
    { name: 'Airbnb', logo: 'https://a0.muscache.com/airbnb/static/logos/belo-200x200-4d851c5b28f61931bf1df28dd15e60ef.png', key: 'airbnb' },
    { name: 'Expedia', logo: 'https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg', key: 'expedia' },
  ];

  const iconMap = {
    wifi: Wifi,
    tv: Tv,
    wine: Wine,
    coffee: Coffee,
    lock: Lock,
    wind: Wind,
    utensils: Utensils,
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <RoveroLayout>
      <Breadcrumb
        pageName={roomData.title}
        bgImage={roomData.bgImage}
        pageTitle={roomData.title}
        pageSubTitle={roomData.description}
      />
      <div className="container mx-auto px-4 mt-8 md:mt-16 lg:mt-24">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                <Link href={`/rooms/${roomData.slug}`}>{roomData.title}</Link>
              </h2>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={roomData.imageUrl}
                  alt={roomData.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-around mb-8 p-4 border border-gray-200 rounded-lg">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <Ruler className="w-6 h-6 text-gray-600 mb-2" />
                <span className="text-sm">{roomData.size}</span>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <Users className="w-6 h-6 text-gray-600 mb-2" />
                <span className="text-sm">{roomData.capacity}</span>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <Bed className="w-6 h-6 text-gray-600 mb-2" />
                <span className="text-sm">{roomData.beds}</span>
              </div>
              <div className="flex flex-col items-center">
                <Mountain className="w-6 h-6 text-gray-600 mb-2" />
                <span className="text-sm">{roomData.view}</span>
              </div>
            </div>

            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4">Description</h5>
              <p className="text-gray-700">{roomData.longDescription}</p>
            </div>

            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4">Facilities</h5>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomData.facilities.map((facility, index) => {
                  const IconComponent = iconMap[facility.icon] || Plus;
                  return (
                    <li key={index} className="flex items-center">
                      <IconComponent className="w-6 h-6 text-gray-600 mr-2" />
                      <span>{facility.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mb-8">
              <h5 className="text-xl font-semibold mb-4">Gallery</h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomData.galleryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer" onClick={() => setSelectedImage(image)}>
                    <Image
                      src={image}
                      alt={`gallery image ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Plus className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg mb-8 sticky top-8">
              <div className="p-6 border-b">
                <h4 className="text-2xl font-semibold mb-2">Book Now</h4>
                <p className="text-gray-600 mb-4">Best price guaranteed</p>
                <p className="text-3xl font-bold text-green-600 mb-2">₹{roomData.price}<span className="text-sm font-normal text-gray-500">/night</span></p>
              </div>
              <ul className="divide-y">
                {bookingPlatforms.map((platform, index) => (
                  <li key={index}>
                    <a
                      href={roomData.bookingUrls[platform.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        {/* <Image
                          src={platform.logo}
                          alt={platform.name}
                          width={30}
                          height={30}
                          className="mr-3"
                        /> */}
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <span className="text-blue-600">Book &rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button className="absolute top-4 right-4 text-white" onClick={() => setSelectedImage(null)}>
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </RoveroLayout>
  );
};

export default RoomDetails;