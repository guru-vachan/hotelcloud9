import Aos from "aos";

export const roveroUtility = {
  animation() {
    Aos.init();
  },
  bgImage() {
    document.querySelectorAll("[data-background]").forEach(function (element) {
      var backgroundUrl = element.getAttribute("data-background");
      element.style.backgroundImage = "url(" + backgroundUrl + ")";
    });
  },
  stickyNav() {
    var sticky = document.getElementById("header-sticky");
    window.addEventListener("scroll", function () {
      var scroll = window.scrollY;
      if (scroll < 2) {
        sticky.classList.remove("sticky-menu");
      } else {
        sticky.classList.add("sticky-menu");
      }
    });
  },
  scrollBtn() {
    var scrollBtn = document.querySelector(".scroll-up");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
    window.addEventListener("scroll", function () {
      var scrolling = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolling > 500) {
        document.querySelector(".scroll-up").classList.add("show");
      } else {
        document.querySelector(".scroll-up").classList.remove("show");
      }
    });
  },
};
