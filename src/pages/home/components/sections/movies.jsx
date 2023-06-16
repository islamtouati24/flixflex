import movie from "assets/images/1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function MoviesSection() {
  return (
    <section>
      <div className="container mx-auto my-6 px-4 lg:px-16">
        <ul className="font-alt flex items-center leading-normal text-gray-500">
          <li className="pr-2 text-gray-300">Our latest releases</li>
          <li className="pr-2">|</li>
          <li className="pr-2">
            <a href="/" className="text-brand">
              Watch all
            </a>
          </li>
        </ul>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper h-96"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {[...Array(10)].map((x, i) => (
          <SwiperSlide key={i} className="group -z-10 h-full">
            <a
              href="/"
              className="relative mr-4 block h-full w-full flex-shrink-0 bg-white"
            >
              <div className="absolute inset-0 hidden cursor-pointer flex-col justify-end bg-black px-4 py-4 text-white opacity-75 group-hover:flex">
                <div>
                  <h3 className="mb-2 text-lg">30 Yards</h3>
                  <p className="leading-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam temporibus error ducimus necessitatibus eius
                    excepturi nemo exercitationem distinctio minus ipsum!
                    Delectus beatae ducimus eos repellendus. Sit consectetur ad
                    expedita provident.
                  </p>
                </div>
              </div>
              <img
                src={movie}
                alt="movie img"
                className="h-full w-full object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
