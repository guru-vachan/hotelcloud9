import Brand from "@/components/Brand";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";
import { pages, gallery } from "@/utility/config";

const Page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="About"
        pageTitle={pages.about.title}
        pageSubTitle={pages.about.description}
        bgImage={pages.about.image}
      />
      
      {/* About Page Area */}
      <div className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base uppercase text-emerald-600 font-bold mb-2 block">
              Discover Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">Welcome to The World of Cloud9!</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img src="/images/about-hotel.jpg" alt="Cloud9 Hotel" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Nestled in the heart of the city, Cloud9 is more than just a hotel – it's an experience. Our contemporary oasis offers a perfect blend of luxury, comfort, and convenience, making every stay memorable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From our prime location just 3 km from the Alwar railway station to our proximity to cultural landmarks like the Moosi Maharani ki Chhatri palace and the 16th century Alwar fort, we're ideally situated for both business and leisure travelers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Indulge in our beautifully appointed rooms, each equipped with modern amenities including free Wi-Fi, flat-screen TVs, and luxurious bedding. For an elevated experience, our suites offer spacious living areas and breathtaking views of the city.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map((img, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm md:text-base uppercase text-emerald-600 font-bold mb-2 block">
              Experience Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Speciality</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the unique features that make Cloud9 your perfect home away from home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🕰️", title: "24/7 Service", description: "Round-the-clock assistance to cater to all your needs." },
              { icon: "🍽️", title: "Gourmet Dining", description: "Exquisite culinary experiences from our world-class chefs." },
              { icon: "🏋️", title: "Fitness Center", description: "State-of-the-art gym equipment for your workout routine." },
              { icon: "🧖", title: "Spa & Wellness", description: "Rejuvenate your body and mind with our spa treatments." },
              { icon: "🏊", title: "Infinity Pool", description: "Relax and unwind in our stunning rooftop infinity pool." },
              { icon: "🚗", title: "Valet Parking", description: "Complimentary valet service for a hassle-free arrival." },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h5 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h5>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Uncomment these if you want to include them */}
      {/* <Testimonial />
      <Brand />
      <Subscribe /> */}
    </RoveroLayout>
  );
};

export default Page;
