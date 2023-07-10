import { useEffect, useRef, useState } from "react";

import { register } from "swiper/element/bundle";
register();

const CustomSwiper = ({
  slidesPerView,
  spaceBetween,
  dataLength,
  children,
  className,
  slideConfig,
}) => {
  const swiperRef = useRef(null);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedBeginning, setReachedBeginning] = useState(true);

  useEffect(() => {
    const swiperContainer = swiperRef.current;

    const params = {
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
      },
      spaceBetween: spaceBetween,
      slidesPerView: slidesPerView,
      ...slideConfig,
      on: {
        reachEnd() {
          setReachedBeginning(false);
          setReachedEnd(true);
        },
        reachBeginning() {
          setReachedBeginning(true);
          setReachedEnd(false);
        },
      },
    };

    Object.assign(swiperContainer, params);

    swiperContainer.initialize();
  }, [spaceBetween, slidesPerView, slideConfig]);

  return (
    <div className="flex justify-center items-center gap-3 order-2 w-full">
      <swiper-container
        ref={swiperRef}
        init="false"
        class={`w-full ${className}`}
      >
        {children}
      </swiper-container>

      {dataLength > slidesPerView && (
        <>
          <div
            className={`swiper-button-prev-unique order-first ${
              reachedBeginning ? "opacity-50 disabled" : null
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 38 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.50001 25.8301C-0.833327 23.9056 -0.833334 19.0944 2.5 17.1699L30.25 1.14841C33.5833 -0.776094 37.75 1.62953 37.75 5.47853L37.75 37.5215C37.75 41.3705 33.5833 43.7761 30.25 41.8516L2.50001 25.8301Z"
                fill="#F3B27A"
              />
            </svg>
          </div>

          <div
            className={`swiper-button-next-unique order-last ${
              reachedEnd ? "opacity-50 disabled:" : null
            } `}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 37 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5 25.3301C37.8333 23.4056 37.8333 18.5944 34.5 16.6699L7.5 1.08141C4.16667 -0.843087 1.74114e-06 1.56254 1.90939e-06 5.41154L3.27217e-06 36.5885C3.44042e-06 40.4375 4.16667 42.8431 7.5 40.9186L34.5 25.3301Z"
                fill="#F3B27A"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomSwiper;
