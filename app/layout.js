import Preloader from "@/layouts/Preloader";
import "@css/all-animations.css";
import "@css/animate.css";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/default.css";
import "@css/fontawesome-all.min.css";
import "@css/jquery.fancybox.min.css";
import "@css/magnific-popup.min.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/responsive.css";
import "@css/slick.css";
import "@css/style.css";
import "./globals.css";


export const metadata = {
  title: "Cloud9 Luxury Hotel - Unforgettable Stays in Paradise",
  description: "Experience luxury accommodations, world-class amenities, and breathtaking views at Cloud9 Hotel. Book your dream vacation today!",
  keywords: "luxury hotel, resort, accommodation, vacation, Cloud9, beachfront, spa, fine dining",
  openGraph: {
    title: "Cloud9 Luxury Hotel - Your Paradise Getaway",
    description: "Indulge in luxury accommodations, gourmet dining, and exclusive amenities at Cloud9 Hotel. Book now for an unforgettable stay!",
    type: "website",
    url: "https://www.cloud9hotel.com",
    image: "/images/cloud9-hotel-exterior.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Cloud9Hotel",
    title: "Cloud9 Luxury Hotel - Escape to Paradise",
    description: "Discover unparalleled luxury and relaxation at Cloud9 Hotel. Book your stay and create lasting memories!",
    image: "/images/cloud9-hotel-suite.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.hotelcloud9.in" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="US-HI" />
        <meta name="geo.position" content="21.3069;-157.8583" />
        <meta name="ICBM" content="21.3069, -157.8583" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="es" href="https://www.cloud9hotel.com/es/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Cloud9 Luxury Hotel",
              "image": "https://www.cloud9hotel.com/images/cloud9-hotel-exterior.jpg",
              "description": "Experience luxury accommodations, world-class amenities, and breathtaking views at Cloud9 Hotel.",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Paradise Beach Road",
                "addressLocality": "Honolulu",
                "addressRegion": "HI",
                "postalCode": "96815",
                "addressCountry": "US"
              },
              "telephone": "+1-808-555-1234",
              "url": "https://www.cloud9hotel.com"
            }
          `}
        </script>
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
