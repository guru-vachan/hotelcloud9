import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import { pages } from "@/utility/config";

const ContactPage = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Contact Us"
        pageTitle={pages.contact.title}
        pageSubTitle={pages.contact.description}
        bgImage={pages.contact.image}
      />
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <ContactInfoCard
              icon="fas fa-map-marker-alt"
              title="Address"
              content={
                <>
                  Jail circle, Opp. C.P Mall
                  <br /> Alwar(Raj.) - 301001
                </>
              }
            />
            <ContactInfoCard
              icon="fas fa-phone-alt"
              title="Phone Number"
              content={
                <>
                  <a className="block" href="tel:+917232054750">+91 7232054750 (Sales)</a>
                  <a className="block" href="tel:+917232054750">+91 7232054750 (Enquiry)</a>
                </>
              }
            />
            <ContactInfoCard
              icon="fas fa-envelope"
              title="Email Address"
              content={<a className="block" href="mailto:admin@hotelcloud9.in">admin@hotelcloud9.in</a>}
            />
          </div>

          {/* Contact Form */}
          <div className="mt-16 md:mt-24">
            <h4 className="text-2xl font-semibold mb-8">Write Us Something</h4>
            <form method="POST" id="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <input
                  className="w-full p-3 border border-gray-300 rounded"
                  type="text"
                  name="inputName"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded"
                  type="email"
                  name="inputEmail"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="w-full p-3 border border-gray-300 rounded"
                  type="text"
                  name="inputWebsite"
                  placeholder="Website"
                />
              </div>
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                name="inputMessage"
                rows="5"
                placeholder="Write your comment here"
                required
              ></textarea>
              <button
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 md:mt-24 mb-16 md:mb-24">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4095461102866!2d76.61214317641567!3d27.580829731058444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972993327f7a909%3A0x1c754df47f880a88!2sHotel%20Cloud%209%20Alwar!5e0!3m2!1sen!2sin!4v1726406913721!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </RoveroLayout>
  );
};

const ContactInfoCard = ({ icon, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="inline-block bg-blue-600 text-white p-4 rounded-full mb-4">
      <i className={`${icon} text-2xl`} />
    </div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <div className="text-gray-600">{content}</div>
  </div>
);

export default ContactPage;
