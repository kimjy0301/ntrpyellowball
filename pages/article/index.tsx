import Head from "next/head";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
const index = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <title>노란공테니스 - 테니스 한마디</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full flex justify-center items-center flex-col p-3">
        <div
          className={`flex h-full w-full relative flex-col md:shadow-lg justify-center border-yellow-1 border-2  rounded-md items-center p-4 bg-white mx-1 my-1 shadow-lg md:max-w-xs1`}
        >
          <div
            className={`${
              loaded ? "opacity-100" : "opacity-0"
            } duration-700 transition-all h-full w-full`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Swiper
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-full max-w-lg"
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
