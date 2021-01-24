import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = (props) => {
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("touchstart", function () {}, true);
  }, []);

  return (
    <div className="fixed w-full h-full">
      <Header></Header>
      <div className="content flex">{props.children}</div>{" "}
      {router.pathname === "/" ? (
        <footer className="h-20 fixed bottom-0 w-full justify-center items-end p-5 flex bg-gradient-to-br from-yellow-1 via-green-1 to-yellow-1 text-white border-t-2 border-white text-sm">
          <span className="text-stroke">Powered By </span>
          <a href="https://band.us/band/55139316">
            <img
              src={`BI-vertical.png`}
              className="h-10 ml-3 transform hover-div active:scale-110 transition-all"
            ></img>
          </a>
        </footer>
      ) : (
        <footer className="h-20 fixed bottom-0 w-full justify-center items-center flex bg-gradient-to-br from-yellow-1 via-green-1 to-yellow-1 text-white border-t-2 border-white text-sm">
          <div className="h-14 relative max-w-2xl shadow-lg rounded w-full">
            <Carousel
              stopOnHover={false}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              transitionTime={500}
              infiniteLoop={true}
              interval={2000}
            >
              <a
                href="https://blog.naver.com/p139154"
                className="block h-14"
                target="_blank"
              >
                <img
                  src={`banners/banner4.png`}
                  alt="노란공테니스 블로그"
                  className="h-14 transform hover:scale-110 focus:scale-110 transition-all "
                ></img>
              </a>
              <a
                href="https://vtgtennis.modoo.at/"
                className="block h-14"
                target="_blank"
              >
                <img
                  src={`banners/banner1.png`}
                  alt="VTG 실내테니스 아카데미"
                  className="h-14 transform hover:scale-110 focus:scale-110 transition-all "
                ></img>
              </a>
              <a
                href="http://the-tennis.com/"
                className="block h-14"
                target="_blank"
              >
                <img
                  src={`banners/banner2.png`}
                  alt="더테니스"
                  className="h-14 transform hover:scale-110 focus:scale-110 transition-all "
                ></img>
              </a>
              <a
                href="https://band.us/band/61888607"
                className="block h-14"
                target="_blank"
              >
                <img
                  alt="뉴스 더테니스"
                  src={`banners/banner3.png`}
                  className="h-14 transform hover:scale-110 focus:scale-110 transition-all "
                ></img>
              </a>
            </Carousel>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
