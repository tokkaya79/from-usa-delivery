import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Mateush",
    text: "I ordered the latest iPhone from the US through your service and the delivery was fast and without any problems. The quality guarantees and reliable packaging made my buying experience incredibly positive.",
  },
  {
    id: 2,
    name: "Hanna",
    text: "I have been ordering designer clothes from France through your service for several years now and it has never let me down. It is important to have a reliable company that will take care of your order and provide all the necessary documents for import to Poland",
  },
  {
    id: 3,
    name: "Bogus",
    text: "I ordered the latest iPhone from the US through your service and the delivery was fast and without any problems.",
  },
  {
    id: 4,
    name: "Kasia",
    text: "I ordered the latest iPhone from the US through your service and the delivery was fast and without any problems. The quality guarantees and reliable packaging made my buying experience incredibly positive.",
  },
  {
    id: 5,
    name: "Paulina",
    text: "I have been ordering designer clothes from France through your service for several years now and it has never let me down. It is important to have a reliable company that will take care of your order and provide all the necessary documents for import to Poland",
  },
  {
    id: 6,
    name: "Andgej",
    text: "I ordered the latest iPhone from the US through your service and the delivery was fast and without any problems. The quality guarantees and reliable packaging made my buying experience incredibly positive.",
  },
];

const Reviews: React.FC = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className='reviews w-full mx-auto'>
      <h2 className='reviews__title text-center text-3xl font-bold'>Reviews</h2>
      <div className='reviews__slider relative w-full max-w-7xl mx-auto py-10'>
        <button
          className={`absolute left-[-90px] top-1/3 ${isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          id='prev-btn'>
          <img
            src='/Vector-left.svg'
            alt='irrow-left'
          />
        </button>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          navigation={{ prevEl: "#prev-btn", nextEl: "#next-btn" }}
          onSlideChange={(swiper: SwiperClass) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}>
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='reviews__slide relative h-[350px] bg-white rounded-2xl py-7 px-10 flex flex-col justify-between'>
                <p className='review__text font-bold text-2xl'>{review.text}</p>
                <div className='review__botom flex justify-between items-center'>
                  <h3 className='review__name text-[#6B7280] text-2xl font-light tracking-wide'>
                    {review.name}
                  </h3>
                  <img
                    src='/Quotes.jpg'
                    alt='Quotes'
                    className='reviews__icon w-[75px] h-[75px]'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`absolute right-[-90px] top-1/3 ${isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          id='next-btn'>
          <img
            src='/Vector-right.svg'
            alt='irrow-right'
          />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
