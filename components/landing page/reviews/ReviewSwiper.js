import { useRef, useEffect } from "react";

import icon01 from "../../../public/images/001.png";
import icon02 from "../../../public/images/002.png";
import icon03 from "../../../public/images/003.png";
import icon04 from "../../../public/images/004.png";
import ReviewSwiperItem from "./ReviewSwiperItem";
import CustomSwiper from "@/components/UI/CustomSwiper";

// import { register } from "swiper/element/bundle";
// register();

const DUMMY_REVIEWS = [
  {
    name: "Lura H",
    orders: 2,
    icon: icon01,
    review:
      "Amazing My poodle just loves it! :D just ordered a second bed for my new puppy!",
  },
  {
    name: "Steve L",
    orders: 3,
    icon: icon02,
    review:
      "Just great. I commissioned a play room for my cats and they delivered above any beyond my expectations!",
  },
  {
    name: "Karen K",
    icon: icon03,
    orders: 1,
    review:
      "Fantastic quality, my little billy is so happy with this bed! Great communication too!",
  },
  {
    name: "Harvey C",
    icon: icon04,
    orders: 1,
    review:
      "Got a wicker bed for my cat, and she loves it. great for summer keeps her nice and cool!!",
  },
  {
    name: "Harvey D",
    icon: icon04,
    orders: 1,
    review:
      "Got a wicker bed for my cat, and she loves it. great for summer keeps her nice and cool!!",
  },
  {
    name: "Harvey E",
    icon: icon04,
    orders: 2,
    review:
      "Got a wicker bed for my cat, and she loves it. great for summer keeps her nice and cool!!",
  },
];

const ReviewSwiper = () => {
  // const swiperRef = useRef(null);

  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;

  //   const params = {
  //     freeMode: true,
  //     navigation: true,
  //     spaceBetween: 40,
  //     slidesPerView: 1,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //   },
  //   1440: {
  //     slidesPerView: 5,
  //   },
  // },
  //     injectStyles: [
  //       `
  //         .swiper-button-next {
  //           background-image:url('/assets/Arrow right.svg');
  //         }

  //         .swiper-button-prev {
  //            background-image:url('/assets/Arrow left.svg')
  //         }

  //         .swiper-button-prev,
  //         .swiper-button-next {
  //           background-repeat: no-repeat;
  //           background-position: center;
  //         }

  //       .swiper-button-next::after,
  //         .swiper-button-prev::after {
  //           content: "";
  //         }
  //     `,
  //     ],
  //   };

  //   Object.assign(swiperContainer, params);

  //   swiperContainer.initialize();
  // }, []);

  const slideConfig = {
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  };

  return (
    <CustomSwiper
      slidesPerView={1}
      spaceBetween={30}
      dataLength={DUMMY_REVIEWS.length}
      className="h-[350px]"
      slideConfig={slideConfig}
    >
      {DUMMY_REVIEWS.map((review) => (
        <swiper-slide key={review.name} class="reviewSlide">
          <ReviewSwiperItem
            review={review.review}
            name={review.name}
            icon={review.icon}
            orders={review.orders}
          />
        </swiper-slide>
      ))}
    </CustomSwiper>
    // <div>
    //   <swiper-container ref={swiperRef} init="false" class="mySwiper">
    //     {DUMMY_REVIEWS.map((review) => (
    //       <swiper-slide key={review.name} class="slide">
    //         <ReviewSwiperItem
    //           review={review.review}
    //           name={review.name}
    //           icon={review.icon}
    //           orders={review.orders}
    //         />
    //       </swiper-slide>
    //     ))}
    //   </swiper-container>
    // </div>
  );
};

export default ReviewSwiper;
