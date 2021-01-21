import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="content">
        {props.children}
        <footer className="relative bottom-0 w-full justify-center items-end flex bg-gradient-to-br from-yellow-1 via-green-1 to-yellow-1 text-white p-5 border-t-2 border-white text-sm">
          <span className="text-stroke">Powered By </span>
          <a href="https://band.us/band/55139316">
            <img
              src={`BI-vertical.png`}
              className="h-10 ml-3 transform hover:scale-110 focus:scale-110 transition-all"
            ></img>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
