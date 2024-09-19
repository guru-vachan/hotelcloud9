import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="w-full flex justify-center">
            <img
              src="https://hotelcloud9.in/wp-content/uploads/2022/06/cropped-Cloud-9-1-1-e1655889633598.png"
              alt="Cloud 9"
              className="h-20 object-contain mx-auto"
            />
          </div>
          
          {/* Address */}
          <div className="text-center">
            <h6 className="text-white text-lg font-semibold mb-2">Address</h6>
            <div className="flex items-center justify-center">
              <i className="fas fa-location-dot text-primary-500 mr-2 flex-shrink-0" />
              <p>Jail circle, Opp. C.P Mall, Alwar(Raj.) - 301001</p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="tel:+917232054750" className="flex items-center hover:text-primary-500 transition-colors">
              <i className="fas fa-phone-alt text-primary-500 mr-2" />
              +91 7232054750 (Sales)
            </a>
            <a href="mailto:admin@hotelcloud9.in" className="flex items-center hover:text-primary-500 transition-colors">
              <i className="far fa-envelope text-primary-500 mr-2" />
              admin@hotelcloud9.in
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm">
            <p>
              All rights reserved
              <Link href="/" className="text-primary-500 font-semibold hover:underline ml-1">
                cloud9
              </Link>
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;