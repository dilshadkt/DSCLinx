"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";

export default function HeroSwipper() {
  useEffect(() => {
    const interleaveOffset = 0.5;
    const swiperOptions = {
      loop: true,
      speed: 1000,
      parallax: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        progress: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            const slideProgress = swiper.slides[i].progress;
            const innerOffset = swiper.width * interleaveOffset;
            const innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    };

    const swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    const sliderBgSetting = document.querySelectorAll(".slide-bg-image");
    sliderBgSetting.forEach(function (slider) {
      if (slider.getAttribute("data-background")) {
        slider.style.backgroundImage =
          "url(" + slider.getAttribute("data-background") + ")";
      }
    });

    return () => {
      // Clean up Swiper instance
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="hero-slider hero-style">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              data-background="/banners/banner001.png"
            >
              <div className="container">
                <div data-swiper-parallax={300} className="slide-title">
                  <h2>Elegant Wall Painting Solutions For Your Home</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                    Elevate your living spaces with unparalleled wall painting
                    solutions. Experience artistry, durability, and charm in
                    every brushstroke, tailored perfectly for your home.
                  </p>
                </div>
                <div className="clearfix" />
                <div data-swiper-parallax={500} className="slide-btns">
                  <Button className="bg-[#004363] rounded-none	 text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-white hover:text-white">
                    <span>Contact us</span>
                  </Button>
                </div>
              </div>
            </div>
            {/* end slide-inner */}
          </div>
          {/* end swiper-slide */}
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              data-background="/banners/banner001.png"
            >
              <div className="container">
                <div data-swiper-parallax={300} className="slide-title">
                  <h2>Elegant Wall Painting Solutions For Your Home</h2>
                </div>
                <div data-swiper-parallax={400} className="slide-text">
                  <p>
                    Elevate your living spaces with unparalleled wall painting
                    solutions. Experience artistry, durability, and charm in
                    every brushstroke, tailored perfectly for your home.
                  </p>
                </div>
                <div className="clearfix" />
                <div data-swiper-parallax={500} className="slide-btns">
                  <Button className="bg-[#004363] rounded-none	text-lg px-8 py-6 hidden md:flex cont hover:bg-transparent hover:border-2 border-white hover:text-white">
                    <span>Contact us</span>
                  </Button>
                </div>
              </div>
            </div>
            {/* end slide-inner */}
          </div>
          {/* end swiper-slide */}
        </div>
        {/* end swiper-wrapper */}
        {/* swipper controls */}
      </div>
    </section>
  );
}
