import Head from "next/head";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const index = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
                pagination={{ clickable: true, type: "fraction" }}
                className="w-full max-w-lg"
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop={true}
              >
                <SwiperSlide>
                  <img
                    src="article/article_1.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_2.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_3.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_4.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_5.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_6.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_7.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_8.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_9.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_10.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_11.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <img
                    src="article/article_12.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_13.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_14.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_15.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_16.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_17.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_18.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_19.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_20.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_21.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_22.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_23.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_24.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_25.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_26.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_27.png"
                    className="w-full h-full"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="article/article_28.png"
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
