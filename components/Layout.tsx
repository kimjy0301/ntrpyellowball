import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Layout = (props) => {
  return (
    <div className="fixed w-full h-full">
      <Header></Header>
      <div className="content flex">{props.children}</div>{" "}
      <footer className="h-20 fixed bottom-0 w-full justify-center items-center flex bg-gradient-to-br from-yellow-1 via-green-1 to-yellow-1 text-white border-t-2 border-white text-sm">
        {/* <span className="text-stroke">Powered By </span>
        <a href="https://band.us/band/55139316">
          <img
            src={`BI-vertical.png`}
            className="h-10 ml-3 transform hover:scale-110 focus:scale-110 transition-all"
          ></img>
        </a> */}

        <div className="h-16 relative max-w-lg">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            transitionTime={500}
            infiniteLoop={true}
            interval={3000}
          >
            <a href="https://vtgtennis.modoo.at/" className="block h-16">
              <img
                src={`banners/banner1.png`}
                alt="VTG 실내테니스 아카데미"
                className="h-16 transform hover:scale-110 focus:scale-110 transition-all "
              ></img>
            </a>
            <a href="http://the-tennis.com/" className="block h-16">
              <img
                src={`banners/banner2.png`}
                alt="더테니스"
                className="h-16 transform hover:scale-110 focus:scale-110 transition-all "
              ></img>
            </a>
            <a href="https://band.us/band/61888607" className="block h-16">
              <img
                alt="뉴스 더테니스"
                src={`banners/banner3.png`}
                className="h-16 transform hover:scale-110 focus:scale-110 transition-all "
              ></img>
            </a>
          </Carousel>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
