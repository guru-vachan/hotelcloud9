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
  title: "Cloud9- Enjoy Your Next Vacation at Cloud9 ",
  description: "Enjoy Your Next Vacation at Cloud9 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
