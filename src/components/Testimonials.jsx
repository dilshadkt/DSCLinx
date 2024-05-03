import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Testimonials() {
  return (
    <>
      <Swiper
        rewind={true}
        // navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#E0EFF6] p-10">
            <p className="tracking-[-0.56px] leading-[164.6%] text-lg">
              “DSCLINX is proud to offer a complete range of construction
              services made possible by our professional team. Our dynamic
              corporate structure emphasizes collaboration between stakeholders,
              architects, designers, engineers and trades – creating an approach
              where all concerns are identified and construction solutions are
              provided before they ever become an issue on-site”
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-medium tracking-[-1.56px]">
                ALEY KHALIL
              </h4>
              <h6 className="text-lg tracking-[-1.56px]">CEO, OMASH</h6>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
