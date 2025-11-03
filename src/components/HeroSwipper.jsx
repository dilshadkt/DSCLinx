"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CAROUSEL_IMAGE = [
  {
    img: "/banners/b1.jpg",
    title: ["Design. Build.", "Deliver."],
    desc: "We bring your commercial space ideas to life. ",
  },
  {
    img: "/banners/b2.JPEG",
    title: ["Restaurant Design", "& Build."],
    desc: "We help turn your restaurant vision into a space people love.",
  },
  {
    img: "/banners/b3.jpg",
    title: ["Commercial Renovations", "& Fit-Outs "],
    desc: "We transform your space into something fresh and functional.",
  },
  {
    img: "/banners/b4.jpg",
    title: ["Retail & Office", "Spaces "],
    desc: "We create workspaces that feel inspiring and welcoming.",
  },
  {
    img: "/banners/b5.jpg",
    title: ["Project", "Management"],
    desc: "From start to finish, we’re here to make it all happen for you.",
  },
  {
    img: "/banners/b6.jpg",
    title: ["Art creates,", "Arch connects,", "Design Unites."],
    desc: "Enrich your space with tranquility, We deliver elegant solutions to your expanse. Exhibit the artistic experience",
  },
  // {
  //   img: "/banners/b7.jpg",
  //   title: [
  //     "Celebrate the incredible architecture and transform your home into the best.",
  //   ],
  //   desc: "Enrich your space with tranquility, We deliver elegant solutions to your expanse. Exhibit the artistic experience",
  // },
  // {
  //   img: "/banners/b8.jpg",
  //   title: ["Crafting Inspiration, Building Connections, Uniting Spaces."],
  //   desc: "Promoting unity and inspiration through creative space design and meaningful connections.",
  // },
  // {
  //   img: "/banners/b9.jpg",
  //   title: ["Transform Your Space with Remarkable Design Innovation."],
  //   desc: "Experience the transformation of your living space with our remarkable design innovation",
  // },
  // {
  //   img: "/banners/b10.jpg",
  //   title: ["Designing Dreams, Building Realities."],
  //   desc: "Transforming visions into tangible structures, we specialize in crafting dreams into concrete realities",
  // },
  // {
  //   img: "/banners/b11.jpg",
  //   title: ["Art creates,", "Arch connects,", "Design Unites."],
  //   desc: "Enrich your space with tranquility, We deliver elegant solutions to your expanse. Exhibit the artistic experience",
  // },
  // {
  //   img: "/banners/b12.jpg",
  //   title: [
  //     "Celebrate the incredible architecture and transform your home into the best.",
  //   ],
  //   desc: "Enrich your space with tranquility, We deliver elegant solutions to your expanse. Exhibit the artistic experience",
  // },
  // {
  //   img: "/banners/b13.jpg",
  //   title: ["Crafting Inspiration, Building Connections, Uniting Spaces."],
  //   desc: "Promoting unity and inspiration through creative space design and meaningful connections.",
  // },
  // {
  //   img: "/banners/b14.jpg",
  //   title: ["Transform Your Space with Remarkable Design Innovation."],
  //   desc: "Experience the transformation of your living space with our remarkable design innovation",
  // },
  // {
  //   img: "/banners/b15.jpg",
  //   title: ["Designing Dreams, Building Realities."],
  //   desc: "Transforming visions into tangible structures, we specialize in crafting dreams into concrete realities",
  // },
  // {
  //   img: "/banners/b16.jpg",
  //   title: ["Art creates,", "Arch connects,", "Design Unites."],
  //   desc: "Enrich your space with tranquility, We deliver elegant solutions to your expanse. Exhibit the artistic experience",
  // },
];

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
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
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
      swiper.destroy();
    };
  }, []);

  return (
    <section className="hero-slider hero-style">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {CAROUSEL_IMAGE.map((item, key) => (
            <div className="swiper-slide" key={key}>
              <div
                className="slide-inner relative slide-bg-image"
                data-background={item.img}
              >
                <div className="bg-black/30 absolute left-0 right-0 bottom-0 top-0 w-full h-full" />
                <div className="container">
                  <div data-swiper-parallax={300} className="slide-title">
                    <h2>
                      {item.title.map((title, key) => (
                        <div key={key}>
                          {title} <br />
                        </div>
                      ))}
                    </h2>
                  </div>
                  <div data-swiper-parallax={400} className="slide-text">
                    <p>{item.desc}</p>
                  </div>
                  <div className="clearfix" />
                  <div data-swiper-parallax={500} className="slide-btns">
                    <Link href="/contact-us">
                      <Button className="bg-[#fff] text-[#004363] rounded-none text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#fff] hover:text-white">
                        <span>Contact us</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
